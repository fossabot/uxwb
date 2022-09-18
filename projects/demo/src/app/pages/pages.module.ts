import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
  { title: 'List', path:'list', component: ListComponent },
  { title: 'Input', path:'input', component: InputComponent },
];

@NgModule({
  declarations: [
    ListComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[

  ],
})
export class PagesModule {
}
