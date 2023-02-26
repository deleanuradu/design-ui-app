import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UnsplashElementModel } from "../../../models/unsplash-element.model";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss']
})
export class DetailsModalComponent {
  @Output() close = new EventEmitter<void>;
  @Input() image: UnsplashElementModel | undefined;
  @Input() visible: boolean = false;

  faTimes = faTimes;
}
