import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html'
})
export class EditBookComponent implements OnInit {

  book: any = {
    isbn: '',
    title: '',
    author: '',
    description: '',
    publishedYear: '',
    publisher: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookService.getBookById(id).subscribe((data) => {
        this.book = data;
      });
    }
  }

  updateBook(): void {
    this.bookService.updateBook(this.book._id, this.book).subscribe(() => {
      this.router.navigate(['/books-list']);
    });
  }
}
