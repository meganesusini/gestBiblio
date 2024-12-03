import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import { BookService } from '../services/book.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-books',
  standalone: false,

  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  editingBook: Book | null = null;
  public roles: string[] = [];

  constructor(
    private bookService: BookService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.roles = this.authService.roles;
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  deleteBook(book: Book): void {
    const confirmDelete = confirm(
      `Voulez-vous vraiment supprimer le livre "${book.title}" ?`
    );
    if (confirmDelete) {
      const previousBooks = [...this.books];

      this.books = this.books.filter((b) => b.id !== book.id);

      this.bookService.deleteBook(book.id).subscribe({
        next: () => {
          alert('Livre supprimé avec succès !');
        },
        error: (err) => {
          console.error('Erreur lors de la suppression du livre :', err);
          alert('Erreur lors de la suppression du livre. Veuillez réessayer.');
          this.books = previousBooks;
        },
      });
    }
  }

  editBook(book: Book): void {
    this.editingBook = { ...book };
  }

  saveEdit(): void {
    if (this.editingBook) {
      this.bookService.updateBook(this.editingBook).subscribe({
        next: (updatedBook) => {
          const index = this.books.findIndex((b) => b.id === updatedBook.id);
          if (index !== -1) {
            this.books[index] = updatedBook;
            this.books = [...this.books];
          }
          this.cancelEdit();
          alert('Livre modifié avec succès !');
        },
        error: (err) => {
          console.error('Erreur lors de la modification :', err);
          alert('Erreur lors de la modification du livre.');
        },
      });
    }
  }

  cancelEdit(): void {
    this.editingBook = null;
  }
}
