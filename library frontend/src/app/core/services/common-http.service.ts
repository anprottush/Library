import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from './../../shared/models/ApiResponse';
@Injectable({
  providedIn: 'root',
})
export class CommonHttpService {
  private apiUrl = environment.apiUrl;
  private pageNo: number = 1;
  private pageSize: number = 20;
  private httpOptions = {
    headers: new HttpHeaders(),
    params: new HttpParams()
  };
  
  constructor(private http: HttpClient) {
    this.httpOptions.headers = new HttpHeaders(
      {
         'Content-Type': 'application/json', 
         'enctype': 'multipart/form-data',
        'Accept': 'application/json', 
        'Access-Control-Allow-Headers': 'Content-Type' 
      }
    )
    this.httpOptions.params = new HttpParams()
      .set('pageNumber', this.pageNo)
      .set('pageSize', this.pageSize);
   }

  // GET request
  get(endpoint: string, id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}${endpoint}/${id}`, this.httpOptions);
  }
  
  // GET request
  getWithPagination(endpoint: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}${endpoint}`, this.httpOptions);
  }

  // POST request
  post(endpoint: string, body: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}${endpoint}`, body, this.httpOptions);
  }

  // PUT request
  put(endpoint: string, body: any): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}${endpoint}/${body.Id}`, body, this.httpOptions);
  }

  // DELETE request
  delete(endpoint: string, id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}${endpoint}/${id}`, this.httpOptions);
  }
}
