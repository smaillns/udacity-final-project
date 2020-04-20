import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Restaurant } from '../../layouts/client-space/client-account/models/Restaurant';
import { apiEndpoint } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient: HttpClient) {
    // Axios.create()
  }

  getRestaurant():Observable<{items: Restaurant[]}>{
    return this.httpClient.get<{items: Restaurant[]}>(apiEndpoint + '/restaurant');
  }

  deleteRestaurant(restaurantId: string){
    return this.httpClient.delete(apiEndpoint + '/restaurant/'+restaurantId);
  }

  createRestaurant(restaurant: Restaurant): Observable<{item: Restaurant}>{
    return this.httpClient.post<{item: Restaurant}>(apiEndpoint + '/restaurant', restaurant);
  }


  updateRestaurant(restaurant: Restaurant): Observable<{response: Restaurant}>{
    return this.httpClient.patch<{response: Restaurant}>(apiEndpoint + '/restaurant/'+restaurant.restaurantId, restaurant);
  }

  getSignedUrl(restaurantId: string):Observable<{uploadUrl: string}>{
    return this.httpClient.post<{uploadUrl: string}>(apiEndpoint + '/restaurant/'+restaurantId+'/image', '');
  }


  uploadFile(url: string, file: File): Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    const req = new HttpRequest('PUT', url, formData, {headers: new HttpHeaders().append('Content-Type', 'multipart/form-data' ).append('Accept', 'application/json') });
    return this.httpClient.request(req);
  }

}
