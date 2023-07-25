import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponce } from '../models/data.model';

@Injectable()
export class DataService {
  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<DataResponce> {
    return this.http.get<DataResponce>(this.dataUrl);
  }
}
