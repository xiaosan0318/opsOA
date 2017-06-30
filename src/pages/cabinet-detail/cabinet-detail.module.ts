import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CabinetDetailPage } from './cabinet-detail';

@NgModule({
  declarations: [
    CabinetDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CabinetDetailPage),
  ],
  exports: [
    CabinetDetailPage
  ]
})
export class CabinetDetailPageModule {}
