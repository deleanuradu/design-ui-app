import { Component, Input } from '@angular/core';
import { UnsplashElementModel, User } from "../../../models/unsplash-element.model";

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent {
  @Input() image: UnsplashElementModel | undefined;

  getFullName(artist: User): string {
    if (artist.name.includes(artist.last_name)) {
      return artist.name;
    } else {
      if (artist.last_name) {
        return artist.name + ' ' + artist.last_name;
      } else {
        return artist.name;
      }
    }
  }

  getDescription(image: UnsplashElementModel): string {
    return image.description? image.description : image.alt_description;
  }
}
