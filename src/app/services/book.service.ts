import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'http://localhost:3000/books'; // json-server --watch books.json --port 3000
  private nextId = 1;

  constructor(private http: HttpClient) {
    this.initializeNextId();
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl);
  }

  addBook(book: Book): Observable<Book> {
    book.id = this.nextId++;
    return this.http.post<Book>(this.baseUrl, book);
  }

  initializeNextId(): void {
    this.getBooks().subscribe((books) => {
      const maxId = books.length > 0 ? Math.max(...books.map((b) => b.id)) : 0;
      this.nextId = maxId + 1;
    });
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }  

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.baseUrl}/${book.id}`, book);
  }
}
