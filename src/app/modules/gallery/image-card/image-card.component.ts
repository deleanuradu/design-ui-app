import { Component, Input } from '@angular/core';
import { CardImageDataModel } from "../../../models/card-image-data.model";

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent {
  @Input() image: CardImageDataModel | undefined;
}
