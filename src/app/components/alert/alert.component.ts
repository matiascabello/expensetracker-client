import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  message!: string;
  @Output() close = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.close.emit()
  }

  deleteItem() {
    this.delete.emit()
  }

}
