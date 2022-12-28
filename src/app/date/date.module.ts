import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './components/date.component';
import { DateRoutingModule } from './date-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DateComponent
  ],
  imports: [
    CommonModule,
    DateRoutingModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    DateComponent
  ]
})
export class DateModule { }
