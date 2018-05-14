import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnLinePage } from './on-line';

@NgModule({
  declarations: [
    OnLinePage,
  ],
  imports: [
    IonicPageModule.forChild(OnLinePage),
  ],
})
export class OnLinePageModule {}
