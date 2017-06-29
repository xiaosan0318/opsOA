import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MachineRoomReceiverPage } from './machine-room-receiver';

@NgModule({
  declarations: [
    MachineRoomReceiverPage,
  ],
  imports: [
    IonicPageModule.forChild(MachineRoomReceiverPage),
  ],
  exports: [
    MachineRoomReceiverPage
  ]
})
export class MachineRoomReceiverPageModule {}
