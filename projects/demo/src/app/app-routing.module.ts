import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './pages/pages.module';

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
