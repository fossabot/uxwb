import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [
    ListComponent,
  ],
})
export class UxwbComponentsModule { }
