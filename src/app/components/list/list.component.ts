import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
@Input() list;
  constructor() { }

  ngOnInit() {
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.list.cards, event.previousIndex, event.currentIndex);
  }}



