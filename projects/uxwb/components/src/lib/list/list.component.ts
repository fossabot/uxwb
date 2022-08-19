import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'uxwb-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() title?: string;

  @Input() list: ListModel[] = [];
  
  @Output() onclick: EventEmitter<ListModel> = new EventEmitter();

  push(v: ListModel): void {
    this.onclick.emit(v);
  }

}

export class ListModel {
  title!: string;

  description?: string;

  meta: any;

  badge?: number | string;
}
