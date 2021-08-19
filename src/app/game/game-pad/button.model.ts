import {ButtonsEnum} from '@app/game/buttons.enum';

export class ButtonModel {
  key!: ButtonsEnum;
  value!: string;

  constructor(key: ButtonsEnum, value: string) {
    this.key = key;
    this.value = value;
  }

  getKeyDisplay(): string {
    return this.key.replace('joypad.', '');
  }

  getValueDisplay(): string {
    return this.value.replace('keyboard.', '');
  }
}
