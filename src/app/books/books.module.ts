import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksListItemComponent } from './books-list-item/books-list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookFormComponent } from './book-form/book-form.component';



@NgModule({
  declarations: [
    BookComponent,
    BooksListComponent,
    BooksListItemComponent,
    BookFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
