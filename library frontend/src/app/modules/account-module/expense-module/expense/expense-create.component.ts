import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpenseService } from './expense-service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiResponse } from 'src/app/shared/models/ApiResponse';

@Component({
  selector: 'app-expense',
  templateUrl: './expense-create.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseCreateComponent implements OnInit {

  private endpoint = 'expense';
  public form: FormGroup;
  public id: number = 0;
  public editData: any;
  public isEdit: boolean = true;
  public imagefile: any;

  constructor(
    private baseService: BaseService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private expenseService: ExpenseService,
    private formBuilder: FormBuilder
  ) {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      date: ['', [Validators.required]],
      amount: ['', Validators.required],
      file: [null, Validators.required],
      note: ['', Validators.required],

    });

  }

  get name() {
    return this.form.get('name');
  }

  get date() {
    return this.form.get('date');
  }

  get amount() {
    return this.form.get('amount');
  }

  get file() {
    return this.form.get('file');
  }

  get note() {
    return this.form.get('note');
  }



  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      if (params['id'] != null) {
        const data = this.expenseService.getData();

        console.log(data);
        if (data) {
          this.form.setValue({
            name: data.name,
            date: data.date,
            amount: data.amount,
            note: data.note,
            //
            file: data.file
          });
        }


      }

    })


  }

  onChange(event: Event): void {

    this.imagefile = (event.target as HTMLInputElement).files?.[0];

  }


  onSubmit(): void {

    const formData = new FormData();
    formData.append('name', this.form.value.name);
    formData.append('date', this.form.value.date);
    formData.append('amount', this.form.value.amount);
    formData.append('file', this.imagefile);
    formData.append('note', this.form.value.note);

    var data = {
      name: this.form.value.name,
      date: this.form.value.date,
      amount: this.form.value.amount,
      //
      note: this.form.value.note
    };


    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.toastr.error('Error!', 'Invalid Data!');
      return;
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
                this.router.navigate(['./expense']);
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
              console.log(res)

              this.router.navigateByUrl('/', { skipLocationChange: true })
                .then(() => {
                  this.router.navigate(['./expense']);
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

