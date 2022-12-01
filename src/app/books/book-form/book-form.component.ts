import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent{
  formBadge = 'Complete the form enable the Submit button';
  isDisplayed = true;
  bookForm = this.fb.group({
    listTitle: ['', Validators.required],
    book: this.fb.group({
      rankOfBook: ['', Validators.required],
      bookTitle: ['', Validators.required],
      yearOfPublishing: ['', Validators.required],
      authorName: ['', Validators.required],
      coverImage: [''],
    }),
  });
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.isDisplayed = false;
    console.table(this.bookForm.value);
  }

}
