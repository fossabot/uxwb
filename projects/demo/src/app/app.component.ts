import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListModel } from '../../../uxwb/components/src/lib/list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  constructor(private route: Router) {
  }

  routes: ListModel[] = [
    { title: $localize`List`, meta: 'list', badge: ['ui'] },
    { title: $localize`Input`, meta: 'input', badge: ['ui'] },
  ];

  listNavigate(v: ListModel): void {
    this.route.navigateByUrl(v.meta);
  }

}
