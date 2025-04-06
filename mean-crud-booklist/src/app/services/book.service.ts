import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8001/api/books';

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<any[]>(this.baseUrl);
  }

  getBookById(id: string) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  updateBook(id: string, book: any) {
    return this.http.put(`${this.baseUrl}/${id}`, book);
  }

  deleteBook(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  addBook(book: any) {
    return this.http.post(this.baseUrl, book);
  }
}
