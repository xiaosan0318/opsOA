import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MachineRoomSearchPage } from './machine-room-search';

@NgModule({
  declarations: [
    MachineRoomSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(MachineRoomSearchPage),
  ],
  exports: [
    MachineRoomSearchPage
  ]
})
export class MachineRoomSearchPageModule {}
