import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiResponse } from 'src/app/shared/models/ApiResponse';
import { BookIssue } from 'src/app/shared/models/admin/bookissue';
import { BookIssueService } from './bookissue-service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-bookissue',
  templateUrl: './bookissue-create.component.html',
  styleUrls: ['./bookissue.component.css']
})
export class BookIssueCreateComponent implements OnInit {

  private endpoint = 'bookissue';
  public bookissueForm: FormGroup;
  public id: number = 0;
  public editData: any;
  public isEdit: boolean = true;
  public imagefile: any;
  public memberlist = ['Admin', 'Librarian', 'Md Aflatun Kawser', 'Member', 'Customer', 'Tapos Islam', 'Tolu Idaya', 'johansmith'];
  public booklist = [
    'mahapragya ki kathaye - 7777',
    'zindagi ki talash - 3333',
    'aakhiri shart - 7678',
    'yeh toh sarvajanik paisa hai - 2594',
    'hastakshar - 2990',
    'jaintatvavidhya - 8762',
    'manzil ki aur - 3805',
    'rajpath ki khoj - 2995',
    'aadivachan - 2986',
    'avchetan man se sampark - 6788',
    'ahimsa tatva darshan - 2989',
    'chitta aur man - 3946',
    'bhikshu vichar darshan - 67767',
    'agrasen agroha aggarwal - 56756',
    'tyaag - 56756',
    'six illuminates of modern india - 43534',
    'Bharat ke jain paratatva - 6276',
    'korea kranti aur pragati - 2431',
    'Apna darpan apna Bimb - c',
    'Test Book 18 - abcd118',
    'Test Book 17 - abcd117',
    'Test Book 16 - abcd116',
    'Test Book 15 - abcd115',
    'Test Book 14 - abcd114',
    'Test Book 13 - abcd113',
    'Test Book 12 - abcd112',
    'Test Book 11 - abcd111',
    'Test Book 11 - abcd111',
    'Test Book 2 - 555',
    'Test Book 1 - 555',
    'test - B001',
    'test - B1001',
    'Twilight - 44444',
    'Pride and Prejudice - 33333',
    'The Chronicles of Narnia - 33333',
    'The Giving Tree - 22222',
    'The Fault in Our Stars - 11111',
  ];


















  constructor(
    private baseService: BaseService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private bookissueService: BookIssueService,
    private formBuilder: FormBuilder
  ) {
    this.bookissueForm = this.formBuilder.group({
      member: ['', Validators.required],
      book: ['', [Validators.required]],
      book_no: ['', Validators.required],
      issue_date: ['', Validators.required],
      notes: ['', Validators.required],

    });

  }

  get member() {
    return this.bookissueForm.get('member');
  }

  get book() {
    return this.bookissueForm.get('book');
  }

  get bookNo() {
    return this.bookissueForm.get('book_no');
  }

  get issueDate() {
    return this.bookissueForm.get('issue_date');
  }

  get notes() {
    return this.bookissueForm.get('notes');
  }



  ngOnInit(): void {
    this.route.params.subscribe((params:any)=>{
      this.id = params['id'];
      if (params['id'] != null) {
        const data = this.bookissueService.getData();

        var bookIssueData = {
          member: data.member,
          book: data.book,
          book_no: data.book_no,
          issue_date: data.issue_date,
          notes: data.notes
        };
        console.log(bookIssueData);
        if (data) {
          this.bookissueForm.setValue(bookIssueData);
        }


      }

    })


   }


  onSubmit(): void {

    var bookIssueData = {
      member: this.bookissueForm.value.member,
      book: this.bookissueForm.value.book,
      book_no: this.bookissueForm.value.book_no,
      issue_date: this.bookissueForm.value.issue_date,
      notes: this.bookissueForm.value.notes
    };

    if (this.bookissueForm.invalid) {
      this.bookissueForm.markAllAsTouched();
      this.toastr.error('Error!', 'Invalid Data!');
      return
    } else {

      if (this.id > 0) {

        this.baseService.put(this.endpoint, this.id, bookIssueData).subscribe(
          (res: ApiResponse) => {
            if (res.success) {
              //this.loading = true;
              this.toastr.success(' successfully update', res.message);
              console.log(res)

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



        this.baseService.post(this.endpoint, bookIssueData).subscribe(
          (res: ApiResponse) => {
            if (res.success) {
              //this.loading = true;
              this.toastr.success(' successfully create', res.message);
              console.log(res)
              // localStorage.setItem('token', res.payload.authorization.token);
              //this.router.navigate(['./product/brand']);
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
