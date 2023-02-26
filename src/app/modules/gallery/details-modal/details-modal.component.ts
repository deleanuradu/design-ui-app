import { Component, Input } from '@angular/core';
import { UnsplashElementModel } from "../../../models/unsplash-element.model";

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss']
})
export class DetailsModalComponent {
  @Input() image: UnsplashElementModel | undefined;
  @Input() visible: boolean = false;


}
