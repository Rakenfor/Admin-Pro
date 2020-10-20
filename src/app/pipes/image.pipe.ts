import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(image: string, type: string ='user'): string {

    let url = URL_SERVICES+'/image';

    console.log(image);

    if(!image){
      return url+'/users/xxx'
    }

    if (image.indexOf('https') >= 0){
      return image
    }

    url += `/${type}/${image}`;

    console.group('url');

    return url;
  }

}
