import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html'
})
export class BooksListComponent implements OnInit {

  Books: any[] = [];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.Books = data;
    });
  }

  // Add this method clearly
  editBook(id: string): void {
    this.router.navigate(['/edit-book', id]);
  }

  onDelete(id: string): void {
    if (confirm('Are you sure to delete this book?')) {
      this.bookService.deleteBook(id).subscribe(() => {
        this.loadBooks();
      });
    }
  }
}
