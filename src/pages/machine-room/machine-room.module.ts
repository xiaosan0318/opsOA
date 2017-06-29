import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MachineRoomPage } from './machine-room';

@NgModule({
  declarations: [
    MachineRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(MachineRoomPage),
  ],
  exports: [
    MachineRoomPage
  ]
})
export class MachineRoomPageModule {}
