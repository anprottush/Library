import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiResponse } from 'src/app/shared/models/ApiResponse';
import { BookService } from './book-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookCreateComponent implements OnInit {

  private endpoint = 'book';
  public form: FormGroup;
  public id: number = 0;
  public editData: any;
  public isEdit: boolean = true;
  public imagefile: any;

  public memberDataSubscription!: Subscription;

  public bookcategorylist = [
    'Tamil',
    'e',
    'Hindi Sahitya',
    'Stories and Poems',
    'History',
    'Magazines',
    'Muni Sadhvi ji',
    'Health',
    'Yoga',
    'Acharya Tulsi',
    'Acharya Mahapragya',
    'MANAGEMENT',
    'Category 1',
    'Science',
    'General Knowledge',
    'Business Book',
    'Kids',
    'Music And Movie',



  ];

  public racklist = [
    'Tamil',
    '3',
    '2',
    '1',
    'Central Staff',
    'A12',
    'E',
    'D',
    'C',
    'B',



  ];


  constructor(
    private baseService: BaseService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private bookService: BookService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      author: ['', [Validators.required]],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      codeno: ['', Validators.required],
      photo: [null, Validators.required],
      bookcategory: ['', Validators.required],
      isbnno: ['', Validators.required],
      rack: ['', Validators.required],
      editionnumber: ['', Validators.required],
      editiondate: ['', Validators.required],
      publisher: ['', Validators.required],
      publisheddate: ['', Validators.required],
      notes: ['', Validators.required],

    });

  }

  get name() {
    return this.form.get('name');
  }

  get author() {
    return this.form.get('author');
  }

  get quantity() {
    return this.form.get('quantity');
  }

  get price() {
    return this.form.get('price');
  }

  get codeno() {
    return this.form.get('codeno');
  }

  get photo() {
    return this.form.get('photo');
  }

  get bookcategory() {
    return this.form.get('bookcategory');
  }



  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      if (params['id'] != null) {

        this.memberDataSubscription = this.bookService.bookData.subscribe(data => {

          console.log(data);

          if (data) {
            this.form.setValue({
              name: data.name,
              author: data.author,
              quantity: data.quantity,
              price: data.price,
              codeno: data.code_no,
              photo: data.photo,
              bookcategory: data.book_category,
              isbnno: data.isbn_no,
              rack: data.rack,
              editionnumber: data.edition_number,
              editiondate: data.edition_date,
              publisher: data.publisher,
              publisheddate: data.published_date,
              notes: data.notes
            });
          }
        });

      }

    })


  }

  onChange(event: Event): void {

    this.imagefile = (event.target as HTMLInputElement).files?.[0];

  }


  onSubmit(): void {

    const formData = new FormData();
    formData.append('name', this.form.value.name);
    formData.append('author', this.form.value.author);
    formData.append('quantity', this.form.value.quantity);
    formData.append('price', this.form.value.price);
    formData.append('code_no', this.form.value.codeno);
    formData.append('photo', this.imagefile);
    formData.append('book_category', this.form.value.bookcategory);
    formData.append('isbn_no', this.form.value.isbnno);
    formData.append('rack', this.form.value.rack);
    formData.append('edition_number', this.form.value.editionnumber);
    formData.append('edition_date', this.form.value.editiondate);
    formData.append('publisher', this.form.value.publisher);
    formData.append('published_date', this.form.value.publisheddate);
    formData.append('notes', this.form.value.notes);

    var data = {
      name: this.form.value.name,
      author: this.form.value.author,
      quantity: this.form.value.quantity,
      price: this.form.value.price,
      code_no: this.form.value.codeno,
      book_category: this.form.value.bookcategory,
      isbn_no: this.form.value.isbnno,
      rack: this.form.value.rack,
      edition_number: this.form.value.editionnumber,
      edition_date: this.form.value.editiondate,
      publisher: this.form.value.publisher,
      published_date: this.form.value.publisheddate,
      notes: this.form.value.notes

    };


    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.toastr.error('Error!', 'Invalid Data!');
      return
    } else {

      if (this.id > 0) {

        this.baseService.put(this.endpoint, this.id, data).subscribe(
          (res: ApiResponse) => {
            if (res.success) {
              //this.loading = true;
              this.toastr.success(' successfully update', res.message);
              console.log(res);

              this.router.navigateByUrl('/', { skipLocationChange: true })
                .then(() => {
                  this.router.navigate(['./book']);
                });

            } else {
              this.toastr.warning('Warning!', res.message);
            }
          },
          (error: HttpErrorResponse) => {
            //this.loading = false;
            console.error('Http Error:', error);
            this.toastr.error('Error!', 'Server not found!');
          }
        );

      } else {

        this.baseService.post(this.endpoint, formData).subscribe(
          (res: ApiResponse) => {
            if (res.success) {
              //this.loading = true;
              this.toastr.success(' successfully create', res.message);
              console.log(res);

              this.router.navigateByUrl('/', { skipLocationChange: true })
                .then(() => {
                  this.router.navigate(['./book']);
                });
            } else {
              this.toastr.warning('Warning!', res.message);
            }
          },
          (error: HttpErrorResponse) => {
            //this.loading = false;
            console.error('Http Error:', error);
            this.toastr.error('Error!', 'Server not found!');
          }
        );
      }






    }
  }

}

