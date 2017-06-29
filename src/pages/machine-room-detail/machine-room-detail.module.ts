import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MachineRoomDetailPage } from './machine-room-detail';

@NgModule({
  declarations: [
    MachineRoomDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MachineRoomDetailPage),
  ],
  exports: [
    MachineRoomDetailPage
  ]
})
export class MachineRoomDetailPageModule {}
