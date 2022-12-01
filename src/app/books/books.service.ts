import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from './books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
 books: Books[] = [
    {
        listTitle: 'fav books',
        rankOfBook: 1,
        bookTitle: 'Dune',
        yearOfPublishing: 1965,
        authorName: 'Frank Herbert',
        coverImage: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555447414l/44767458.jpg'
    },
    {   listTitle: 'fav books',
        rankOfBook: 2,
        bookTitle: 'Ender\'s Game',
        yearOfPublishing: 1985,
        authorName: 'Orson Scott Card',
        coverImage: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1408303130l/375802._SY475_.jpg'
    },
    {   listTitle: 'fav books',
        rankOfBook: 3,
        bookTitle: '1984',
        yearOfPublishing: 1949,
        authorName: 'George Orwell',
        coverImage: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1657781256l/61439040._SX318_.jpg'
    },
    {   listTitle: 'fav books',
        rankOfBook: 4,
        bookTitle: 'Fahrenheit 451',
        yearOfPublishing: 1953,
        authorName: 'Ray Bradbury',
        coverImage: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1383718290l/13079982.jpg'
    },
    {   listTitle: 'fav books',
        rankOfBook: 5,
        bookTitle: 'Brave New World',
        yearOfPublishing: 1932,
        authorName: 'Aldous Huxley',
        coverImage: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1575509280l/5129._SY475_.jpg'
    }
  ];


    public getBooks(): any {
        const booksObservable = new Observable(observer => {
            setTimeout(() => {
                observer.next(this.books);
            }, 1000);
        });

        return booksObservable;
    }

}
