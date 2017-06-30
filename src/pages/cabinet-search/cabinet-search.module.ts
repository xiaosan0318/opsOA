import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CabinetSearchPage } from './cabinet-search';

@NgModule({
  declarations: [
    CabinetSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(CabinetSearchPage),
  ],
  exports: [
    CabinetSearchPage
  ]
})
export class CabinetSearchPageModule {}
