import { NgZone, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from './book';
import { BookService } from './books.service';

@Component({
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookDetailComponent implements OnInit {
  pageTitle = 'Book Detail';
  errorMessage = '';
  book: Book | undefined;
  orderform:FormGroup;
  order:boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookService: BookService,
              private formBuilder:FormBuilder,
              private ngZone:NgZone
              ) {
                this.orderform=this.formBuilder.group({
                  bookId:[''],
                  bookName:[''],
                  name:[''],
                  contact:[''],
                  address:['']
                })
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getBook(id);
    }
  }

  getBook(id: number) {
    this.bookService.getBook(id).subscribe({
      next: book => this.book = book,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/books']);
  }

  onSubmit(): void {
    this.bookService.addOrder(this.orderform.value).subscribe((res:any)=>{
      console.log('Your order has been successfully placed. We\'ll soon get in touch with you');
      this.ngZone.run(()=>
        this.router.navigateByUrl('/books'))
      },(err)=>{
        console.log(err);
      });
    }

  toggleOrder(): void{
    this.order = !this.order;
  }

}
