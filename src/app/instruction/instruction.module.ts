import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstructionPageRoutingModule } from './instruction-routing.module';

import { InstructionPage } from './instruction.page';
import { NgxPrintModule } from 'ngx-print';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstructionPageRoutingModule,NgxPrintModule
  ],
  declarations: [InstructionPage]
})
export class InstructionPageModule {}
