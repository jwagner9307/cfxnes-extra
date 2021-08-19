import { NgModule } from '@angular/core';
import {GameComponent} from './game.component';
import {RouterModule, Routes} from '@angular/router';
import {GamePadComponent} from './game-pad/game-pad.component';
import {GamePadButtonComponent} from './game-pad/game-pad-button/game-pad-button.component';
import {FormatGamepadNamePipe} from '@app/game/game-pad/format-gamepad-name.pipe';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzResultModule} from 'ng-zorro-antd/result';
import {NzPageHeaderModule} from 'ng-zorro-antd/page-header';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {NzEmptyModule} from 'ng-zorro-antd/empty';
import {NzListModule} from 'ng-zorro-antd/list';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzCollapseModule} from 'ng-zorro-antd/collapse';
import {NzAlertModule} from 'ng-zorro-antd/alert';
import {NzSwitchModule} from 'ng-zorro-antd/switch';
import {NzTreeViewModule} from 'ng-zorro-antd/tree-view';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzBadgeModule} from 'ng-zorro-antd/badge';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NzCalendarModule} from 'ng-zorro-antd/calendar';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzTableModule} from 'ng-zorro-antd/table';

const NGZORROMOD = [
  NzGridModule,
  NzLayoutModule,
  NzCalendarModule,
  NzCardModule,
  NzTypographyModule,
  NzBreadCrumbModule,
  NzIconModule,
  NzMenuModule,
  NzButtonModule,
  NzToolTipModule,
  NzResultModule,
  NzEmptyModule,
  NzPageHeaderModule,
  NzListModule,
  NzCheckboxModule,
  NzDrawerModule,
  NzFormModule,
  NzInputModule,
  NzCollapseModule,
  NzAlertModule,
  NzSwitchModule,
  NzTreeViewModule,
  NzTableModule,
  NzDividerModule,
  NzMessageModule,
  NzPopconfirmModule,
  NzSelectModule,
  NzBadgeModule,
  NzDescriptionsModule,
  NzModalModule,
  NzTabsModule,
  NzSpinModule,
];

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
    data: { breadcrumb: '' }
  }
];

// @ts-ignore
@NgModule({
  declarations: [
    GameComponent,
    GamePadComponent,
    GamePadButtonComponent,
    FormatGamepadNamePipe,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ...NGZORROMOD,
    GameComponent,
    FormatGamepadNamePipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ...NGZORROMOD,
  ]
})
export class GameModule { }
