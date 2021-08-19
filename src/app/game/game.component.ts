import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
// @ts-ignore
import cfxnes from '@cfxnes';
import {NzMessageService} from 'ng-zorro-antd/message';
import { gamelist } from './game-list.data';
import {NzModalService} from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class GameComponent implements OnInit, AfterViewInit {

  @ViewChild('cfxnesBoard') cfxnesBoard!: ElementRef;
  @ViewChild('inputRom') inputRom!: ElementRef;

  cfxnes = cfxnes;

  nes!: any;
  rom!: any;
  audio!: any;
  video!: any;
  fullscreen!: any;
  devices!: any;
  inputs!: any;

  isEnabledAudio!: boolean;

  loadingRom!: boolean;
  modalOpenRom!: boolean;

  gamelistData = gamelist;

  constructor(
    private message: NzMessageService,
    private modal: NzModalService,
  ) {
    this.loadingRom = false;
    this.modalOpenRom = false;
    this.isEnabledAudio = true;
    this.nes = cfxnes();
    console.log('cfxnes', this.nes);
    this.nes.region = 'ntsc';
    const {rom, video, audio, fullscreen, devices, inputs} = this.nes;
    this.rom = rom;
    this.video = video;
    this.audio = audio;
    this.fullscreen = fullscreen;
    this.devices = devices;
    this.inputs = inputs;
    // https://github.com/jpikl/cfxnes/blob/master/lib/API.md
    this.devices[1] = 'joypad';
    this.devices[2] = 'joypad';
    this.fullscreen.type = 'stretched';
    this.video.renderer = 'webgl'; // Renderer can be only changed before the output is set
    this.video.scale = 2.5; // Set 2x resolution scale
    this.video.filter = 'nearest'; // Linear interpolation
    this.video.palette = 'sony-cxa2025as'; // Set palette
    this.audio.enabled = this.isEnabledAudio;
    // video.debug = true; // Enable debug output
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.video.output = this.cfxnesBoard.nativeElement; // Set output
    this.nes.start();
  }

  start(): void {
    this.nes.start();
  }

  stop(): void {
    this.nes.stop();
  }

  reset(): void {
    this.nes.reset();
  }

  power(): void {
    this.nes.power();
  }

  toogleAudio(): void {
    if (!this.audio) {
      return;
    }
    if (this.isEnabledAudio) {
      this.audio.enabled = false;
      this.isEnabledAudio = false;
    } else {
      this.audio.enabled = true;
      this.isEnabledAudio = true;
    }
  }

  toggleFullscreen(): void {
    if (!this.fullscreen.is) {
      this.fullscreen.enter().then(() => {
        this.message.create('success', 'Full screen mode');
      }).catch((error: any) => {
        this.message.create('error', 'Oops! Browser refused fullscreen request');
      });
    } else {
      this.fullscreen.exit().then(() => {
        this.message.create('success', 'Exit Full screen mode');
      }).catch((error: any) => {
        this.message.create('error', 'Oops! Browser refused fullscreen request');
      });
    }
  }

  triggerOpenRom(): void {
    this.inputRom.nativeElement.click();
  }

  openRom(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.loadRom(file);
    }
  }

  loadRom(data: any): void {
    this.loadingRom = true;
    this.rom.load(data).then(() => {
      this.loadingRom = false;
      this.modalOpenRom = false;
      this.message.create('success', 'Load rom success');
    });
  }

  modalOpenRomShow(): void {
    this.modalOpenRom = true;
  }

  modalOpenRomCancel(): void {
    this.modalOpenRom = false;
  }

  author(): void {
    this.modal.info({
      nzTitle: '<strong>Application Information</strong>',
      nzContent: '<p>Base on <a href="https://github.com/jpikl/cfxnes" target="_blank">CFXNES</a>, I integrate with Angular 12. Make simple interface and easy to play. Support Gamepad and auto mapping.</p><p>Email: <a href="mailto:tuanquynh0508@gmail.com">tuanquynh0508@gmail.com</a></p>',
      nzOnOk: () => console.log('OK')
    });
  }

}
