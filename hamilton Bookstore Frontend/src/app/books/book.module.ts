import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { BooksComponent } from './books.component';
import { BookDetailComponent } from './bookdetails.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([
        { path: 'books/:id', component: BookDetailComponent },
        { path: 'books', component: BooksComponent }
    ])
  ],
  declarations: [
    BooksComponent,
    BookDetailComponent,
  ]
})
export class BookModule { }
