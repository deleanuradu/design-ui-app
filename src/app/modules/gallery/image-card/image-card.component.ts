import { Component, Input } from '@angular/core';
import { UnsplashElementModel, User } from "../../../models/unsplash-element.model";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent {
  @Input() image: UnsplashElementModel | undefined;

  constructor(private sanitization: DomSanitizer) {
  }

  getFullName(artist: User): string {
    if (artist.name.includes(artist.last_name as string)) {
      return artist.name;
    } else {
      if (artist.last_name) {
        return artist.name + ' ' + artist.last_name;
      } else {
        return artist.name;
      }
    }
  }

  getSafeUrl(filePreviewUrl: string | undefined){
    return this.sanitization.bypassSecurityTrustStyle('url(\'' + filePreviewUrl + '\')');
  }

  getDescription(image: UnsplashElementModel): string {
    let result = image.description? image.description : image.alt_description;
    return result[0].toUpperCase() + result.slice(1);
  }
}
