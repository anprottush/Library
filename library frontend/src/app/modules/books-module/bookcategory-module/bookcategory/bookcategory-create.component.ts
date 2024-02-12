import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiResponse } from 'src/app/shared/models/ApiResponse';
import { BookCategoryService } from './bookcategory-service';

@Component({
  selector: 'app-bookcategory',
  templateUrl: './bookcategory-create.component.html',
  styleUrls: ['./bookcategory.component.css'],
})
export class BookCategoryCreateComponent  implements OnInit {

  private endpoint = 'bookcategory';
  public form: FormGroup;
  public id: number = 0;
  public editData: any;
  public isEdit: boolean = true;
  public imagefile: any;

  public statuslist = ['Enable', 'Disable'];
 

  constructor(
    private baseService: BaseService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private bookCategoryService: BookCategoryService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      photo: [null, Validators.required],     
      status: ['', Validators.required],



    });

  }

  get name() {
    return this.form.get('name');
  }

  get description() {
    return this.form.get('description');
  }

  
  get photo() {
    return this.form.get('photo');
  }

 

  get status() {
    return this.form.get('status');
  }


  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      if (params['id'] != null) {

        const data = this.bookCategoryService.getData();

        console.log(data);
        if (data) {
          this.form.setValue({
            name: data.name,
            description: data.description,
            photo: data.photo,
            status: data.status,
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
    formData.append('description', this.form.value.description);
    formData.append('photo', this.imagefile);
    formData.append('status', this.form.value.status);
   


    var data = {
     
      name: this.form.value.name,
      description: this.form.value.description,
      status: this.form.value.status,
     

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
                  this.router.navigate(['./bookcategory']);
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
                  this.router.navigate(['./bookcategory']);
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


                               