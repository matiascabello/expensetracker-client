import { Component, Input, OnInit } from '@angular/core';
import { Thing } from 'src/app/interfaces/thing.interface';

@Component({
  selector: 'app-data-item',
  templateUrl: './data-item.component.html',
  styleUrls: ['./data-item.component.css']
})
export class DataItemComponent implements OnInit {

  @Input()
  thingTest!: Thing;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    
  }

}
