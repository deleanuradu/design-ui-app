import { Component, OnDestroy } from '@angular/core';
import { CardImageDataModel } from "../../../models/card-image-data.model";
import { UnsplashService } from "../../../services/unsplash.service";
import { Subscription } from "rxjs";
import { UnsplashElementModel } from "../../../models/unsplash-element.model";
import { UNSPLASH_MOCKS } from "../../../utils/mocks";

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnDestroy{
  subscription: Subscription;
  mockImageCollection: CardImageDataModel[] = [
    {
      imageUrl: 'https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4',
      artistName: 'Paul Jarvis'
    },
    {
      imageUrl: 'https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM',
      artistName: 'Alejandro Escamilla'
    },
    {
      imageUrl: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
      artistName: 'Jerry Adney'
    },
    {
      imageUrl: 'https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU',
      artistName: 'Go Wild'
    },
    {
      imageUrl: 'https://fastly.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g',
      artistName: 'Paul Jarvis'
    },
    {
      imageUrl: 'https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE',
      artistName: 'Paul Jarvis'
    },
    {
      imageUrl: 'https://fastly.picsum.photos/id/37/2000/1333.jpg?hmac=vpYLNsQZwU2szsZc4Uo17cW786vR0GEUVq4icaKopQI',
      artistName: 'Austin Neill'
    },
    {
      imageUrl: 'https://fastly.picsum.photos/id/46/3264/2448.jpg?hmac=ZHE8nk-Q9uRp4MxgKNvN7V7pYFvA-9BCv99ltY3HBv4',
      artistName: 'Jeffrey Kam'
    }
  ]
  imageCollection: UnsplashElementModel[] = UNSPLASH_MOCKS as UnsplashElementModel[];

  constructor(public unsplashService: UnsplashService) {
    console.log(this.imageCollection.length);
    this.subscription = this.unsplashService.getRandomPhotos(10).subscribe(result => {
      this.imageCollection = result;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
