import { Books } from './../books.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list-item',
  templateUrl: './books-list-item.component.html',
  styleUrls: ['./books-list-item.component.scss']
})
export class BooksListItemComponent implements OnInit{

  @Input() book:Books=new Books();
  ngOnInit(){
    console.log(typeof(this.book))
    }


}
