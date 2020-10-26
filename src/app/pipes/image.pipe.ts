import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(image: string, type: string ='user'): string {

    let url = URL_SERVICES+'/image';

    if(!image){
      return url+`/${type}/xxx`
    }

    if (image.indexOf('https') >= 0){
      return image
    }

    url += `/${type}/${image}`;

    return url;
  }

}
