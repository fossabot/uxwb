import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [
  { title: 'Index', path:'', component: IndexComponent },
];

@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[

  ],
})
export class PagesModule {
}
