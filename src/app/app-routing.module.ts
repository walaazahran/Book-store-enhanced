import { BooksListItemComponent } from './books/books-list-item/books-list-item.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BookFormComponent } from './books/book-form/book-form.component';
import { BooksModule } from './books/books.module';
import { BookComponent } from './books/book/book.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path:'',redirectTo:'books-list',pathMatch:'full'},
  { path: 'book', component: BookComponent},
  { path: 'book-form', component: BookFormComponent },
  { path: 'books-list', component: BooksListComponent },
  { path: 'books-list-item', component: BooksListItemComponent },
];

@NgModule({

  imports: [BrowserModule, BooksModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppRoutingModule {}
