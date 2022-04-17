import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsServiceService {
  constructor(private http: HttpClient) {}

  getAllNews() {
    return this.http.get(
      `${environment.devUrl.baseService}&apiKey=0dc5aa75acc34762a3f16d3d8a6f8924`
    );
  }
}
