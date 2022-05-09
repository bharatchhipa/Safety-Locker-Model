import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url: string = "http://192.168.43.60/4";

  constructor(private http: HttpClient) { }

  callApi(state: string) {
    return this.http.get(this.url + "/" +state)
    .subscribe((data) => console.log(data)
    );
  }

}
