import { Component } from '@angular/core';
import { Book } from '../model/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-new-book',
  standalone: false,

  templateUrl: './new-book.component.html',
  styleUrl: './new-book.component.css',
})
export class NewBookComponent {
  newBook: Book = {
    id: 0,
    title: '',
    author: '',
    price: 0,
    publicationDate: new Date(),
  };

  constructor(private bookService: BookService) {}

  addBook(): void {
    this.bookService.addBook(this.newBook).subscribe({
      next: () => {
        alert('Livre ajouté avec succès !');
        this.newBook = {
          id: 0,
          title: '',
          author: '',
          price: 0,
          publicationDate: new Date(),
        };
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout du livre :', err);
        alert('Erreur lors de l\'ajout du livre.');
      },
    });
  }
}
