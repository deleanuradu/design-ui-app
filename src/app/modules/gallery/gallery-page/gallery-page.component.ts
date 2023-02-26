import { Component, OnDestroy } from '@angular/core';
import { UnsplashService } from "../../../services/unsplash.service";
import { Subscription } from "rxjs";
import { UnsplashElementModel } from "../../../models/unsplash-element.model";
import { UNSPLASH_MOCKS } from "../../../utils/mocks";

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnDestroy {
  subscription: Subscription;
  imageCollection: UnsplashElementModel[] = UNSPLASH_MOCKS as UnsplashElementModel[];
  selectedImage: UnsplashElementModel | undefined;
  detailsModalVisible = false;

  constructor(public unsplashService: UnsplashService) {
    this.shuffle(this.imageCollection);
    this.subscription = this.unsplashService.getRandomPhotos(10).subscribe(result => {
      this.imageCollection = result;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  selectImage(image: UnsplashElementModel): void {
    this.selectedImage = image;
    this.detailsModalVisible = true;
  }

   shuffle(array: Array<any>): Array<any> {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }
}
