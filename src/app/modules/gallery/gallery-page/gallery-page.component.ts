import { Component } from '@angular/core';
import { CardImageDataModel } from "../../../models/card-image-data.model";

@Component({
  selector: 'app-gallery-page-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent {
  imageCollection: CardImageDataModel[] = [
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
    }
  ]
}
