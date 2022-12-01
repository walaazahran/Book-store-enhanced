import { Books } from './../books.model';
import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books:Books[]=[];

  listName="My Favorite List";
  constructor(private booksService: BooksService) { }
  ngOnInit() {
      const studentObservable = this.booksService.getBooks();
        studentObservable.subscribe((booksData: Books[]) => {
            this.books = booksData;
      });
    }
}
