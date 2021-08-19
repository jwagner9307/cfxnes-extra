import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {fromEvent} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ButtonsEnum} from '@app/game/buttons.enum';
import {NzMessageService} from 'ng-zorro-antd/message';
import {ButtonModel} from '@app/game/game-pad/button.model';

@Component({
  selector: 'app-game-pad',
  templateUrl: './game-pad.component.html',
  styleUrls: ['./game-pad.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class GamePadComponent implements OnInit {

  @Input() inputs: any;

  _port!: number;
  @Input()
  public set port(port: number) {
    this._port = port;
    this.form.patchValue({port});
    this.mappingKeyboard();
  }
  public get port(): number {
    return this._port;
  }

  gamepadList: Array<Gamepad|null> = [];
  form!: FormGroup;
  buttonsEnum = ButtonsEnum;

  listKeyboard: ButtonModel[] = [];

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
  ) {
    this.inputs = null;
    this.form = this.fb.group({
      port: '',
      controllerId: '',
      bindBtnA: '',
      bindBtnB: '',
      bindBtnSelect: '',
      bindBtnStart: '',
      bindBtnUp: '',
      bindBtnDown: '',
      bindBtnLeft: '',
      bindBtnRight: '',
    });
    // https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API
    // https://www.smashingmagazine.com/2015/11/gamepad-api-in-web-games/
    fromEvent(window, 'gamepadconnected').subscribe((event) => {
      this.gamepadList = this.scanGamepads();
      this.gamepadList = this.gamepadList.filter(item => item !== null);
      if (this.gamepadList.length === 1) {
        this.form.patchValue({
          controllerId: this.gamepadList[0]?.id
        });
      }
    });
    fromEvent(window, 'gamepaddisconnected').subscribe(() => {
      this.gamepadList = this.scanGamepads();
      this.gamepadList = this.gamepadList.filter(item => item !== null);
    });
    this.form.get('controllerId')?.valueChanges.subscribe((id) => {
      this.autoMapGamePad(id);
    });
  }

  ngOnInit(): void {
  }

  save(): void {

  }

  // Gamepad
  scanGamepads(): Array<Gamepad|null> {
    const gamePad = navigator.getGamepads();
    return [
      gamePad[0], gamePad[1], gamePad[2], gamePad[3],
    ];
  }

  bindButton(button: ButtonsEnum): void {
    const devInput = this.port + '.' + button;
    this.message.info('Press gamepad button...');
    this.inputs.record((srcInput: any) => {
      console.log('Bind value srcInput', srcInput);
      this.inputs.map.delete(devInput); // Delete previous mapping for each input
      this.inputs.map.delete(srcInput);
      this.mappdingKeyboardForButton(button);
      this.inputs.map.set(devInput, srcInput); // Set new mapping
      this.message.create('success', 'Bind button success');
      this.patchFormBind(button, srcInput);
      this.saveChange();
    });
  }

  quietBindButton(button: ButtonsEnum, value: any): void {
    if (!value) {
      return;
    }
    const devInput = this.port + '.' + button;
    this.inputs.map.delete(devInput);
    this.inputs.map.delete(value);
    this.mappdingKeyboardForButton(button);
    this.inputs.map.set(devInput, value);
  }

  isRelease(button: ButtonsEnum): boolean {
    return this.inputs.state.get(this.port + '.' + button);
  }

  isBind(button: ButtonsEnum): boolean {
    let value: any = null;
    switch (button) {
      case ButtonsEnum.BTN_A:
        value = this.form.get('bindBtnA')?.value;
        break;
      case ButtonsEnum.BTN_B:
        value = this.form.get('bindBtnB')?.value;
        break;
      case ButtonsEnum.BTN_SELECT:
        value = this.form.get('bindBtnSelect')?.value;
        break;
      case ButtonsEnum.BTN_START:
        value = this.form.get('bindBtnStart')?.value;
        break;
      case ButtonsEnum.BTN_UP:
        value = this.form.get('bindBtnUp')?.value;
        break;
      case ButtonsEnum.BTN_DOWN:
        value = this.form.get('bindBtnDown')?.value;
        break;
      case ButtonsEnum.BTN_LEFT:
        value = this.form.get('bindBtnLeft')?.value;
        break;
      case ButtonsEnum.BTN_RIGHT:
        value = this.form.get('bindBtnRight')?.value;
        break;
    }
    return this.inputs.map.get(this.port + '.' + button).indexOf(value) !== -1;
  }

  patchFormBind(button: ButtonsEnum, value: any): void {
    let dataPath: any = null;
    switch (button) {
      case ButtonsEnum.BTN_A:
        dataPath = {
          bindBtnA: value
        };
        break;
      case ButtonsEnum.BTN_B:
        dataPath = {
          bindBtnB: value
        };
        break;
      case ButtonsEnum.BTN_SELECT:
        dataPath = {
          bindBtnSelect: value
        };
        break;
      case ButtonsEnum.BTN_START:
        dataPath = {
          bindBtnStart: value
        };
        break;
      case ButtonsEnum.BTN_UP:
        dataPath = {
          bindBtnUp: value
        };
        break;
      case ButtonsEnum.BTN_DOWN:
        dataPath = {
          bindBtnDown: value
        };
        break;
      case ButtonsEnum.BTN_LEFT:
        dataPath = {
          bindBtnLeft: value
        };
        break;
      case ButtonsEnum.BTN_RIGHT:
        dataPath = {
          bindBtnRight: value
        };
        break;
    }
    if (dataPath) {
      this.form.patchValue(dataPath);
    }
  }

  mappingKeyboard(): void {
    if (this.port !== 1) {
      return;
    }
    this.listKeyboard = [
      new ButtonModel(ButtonsEnum.BTN_A, 'keyboard.a'),
      new ButtonModel(ButtonsEnum.BTN_B, 'keyboard.s'),
      new ButtonModel(ButtonsEnum.BTN_SELECT, 'keyboard.space'),
      new ButtonModel(ButtonsEnum.BTN_START, 'keyboard.enter'),
      new ButtonModel(ButtonsEnum.BTN_UP, 'keyboard.up'),
      new ButtonModel(ButtonsEnum.BTN_DOWN, 'keyboard.down'),
      new ButtonModel(ButtonsEnum.BTN_LEFT, 'keyboard.left'),
      new ButtonModel(ButtonsEnum.BTN_RIGHT, 'keyboard.right'),
    ];
    for (const itemMap of this.listKeyboard) {
      this.inputs.map.set(this.port + '.' + itemMap.key, itemMap.value);
    }
  }

  mappdingKeyboardForButton(button: ButtonsEnum): void {
    const itemMap: ButtonModel|undefined = this.listKeyboard.find((item: ButtonModel) => item.key === button);
    if (itemMap) {
      this.inputs.map.set(this.port + '.' + itemMap.key, itemMap.value);
    }
  }

  saveChange(): void {
    localStorage.setItem('GamePad' + this.port, JSON.stringify(this.form.value));
  }

  autoMapGamePad(gamePadId?: string): void {
    if (!gamePadId) {
      return;
    }
    const data = localStorage.getItem('GamePad' + this.port);
    if (data) {
      const dataObj = JSON.parse(data);
      if (gamePadId === dataObj.controllerId) {
        this.form.patchValue({
          bindBtnA: dataObj.bindBtnA,
          bindBtnB: dataObj.bindBtnB,
          bindBtnSelect: dataObj.bindBtnSelect,
          bindBtnStart: dataObj.bindBtnStart,
          bindBtnUp: dataObj.bindBtnUp,
          bindBtnDown: dataObj.bindBtnDown,
          bindBtnLeft: dataObj.bindBtnLeft,
          bindBtnRight: dataObj.bindBtnRight,
        });
        this.quietBindButton(ButtonsEnum.BTN_A, dataObj.bindBtnA);
        this.quietBindButton(ButtonsEnum.BTN_B, dataObj.bindBtnB);
        this.quietBindButton(ButtonsEnum.BTN_SELECT, dataObj.bindBtnSelect);
        this.quietBindButton(ButtonsEnum.BTN_START, dataObj.bindBtnStart);
        this.quietBindButton(ButtonsEnum.BTN_UP, dataObj.bindBtnUp);
        this.quietBindButton(ButtonsEnum.BTN_DOWN, dataObj.bindBtnDown);
        this.quietBindButton(ButtonsEnum.BTN_LEFT, dataObj.bindBtnLeft);
        this.quietBindButton(ButtonsEnum.BTN_RIGHT, dataObj.bindBtnRight);
      }
    }
  }

}
