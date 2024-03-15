import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Output('onAccept') onAccept: EventEmitter<void> = new EventEmitter();
  @Output('onClose') onClose: EventEmitter<void> = new EventEmitter();

  close(){
    this.onClose.emit()
  }

  accept(){
    this.onAccept.emit()
  }
}
