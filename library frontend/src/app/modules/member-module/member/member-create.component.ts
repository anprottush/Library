import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiResponse } from 'src/app/shared/models/ApiResponse';
import { MemberService } from './member-service';


@Component({
  selector: 'app-member',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member.component.css']
})
 export class MemberCreateComponent implements OnInit {

  private endpoint = 'member';
  public form: FormGroup;
  public id: number = 0;
  public editData: any;
  public isEdit: boolean = true;
  public imagefile: any;
  public genderlist = ['Male', 'Female'];
  public bloodgrouplist = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  public rolelist = ['Admin', 'Librarian', 'Member', 'admin automate', 'arif'];
  public statuslist = ['Active', 'Block'];


  constructor(
    private baseService: BaseService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private memberService: MemberService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      dateofbirth: ['', [Validators.required]],
      gender: ['', Validators.required],
      religion: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      phone: ['', Validators.required],
      bloodgroup: ['', Validators.required],
      address: ['', Validators.required],
      joinningdate: ['', Validators.required],
      photo: [null, Validators.required],
      role: ['', Validators.required],
      status: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],


    });

  }

  get name() {
    return this.form.get('name');
  }

  get date() {
    return this.form.get('dateofbirth');
  }

  get gender() {
    return this.form.get('gender');
  }

  get religion() {
    return this.form.get('religion');
  }

  get email() {
    return this.form.get('email');
  }

  get phone() {
    return this.form.get('phone');
  }

  get bloodgroup() {
    return this.form.get('bloodgroup');
  }

  get address() {
    return this.form.get('address');
  }

  get joinningdate() {
    return this.form.get('joinningdate');
  }

  get photo() {
    return this.form.get('photo');
  }

  get role() {
    return this.form.get('role');
  }

  get status() {
    return this.form.get('status');
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }


  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      if (params['id'] != null) {
        this.memberService.getData().subscribe((data: any) => {

           console.log(data);

          this.form.setValue({
            name: data.name,
            dateofbirth: data.date_of_birth,
            gender: data.gender,
            religion: data.religion,
            address: data.address,
            joinningdate: data.joinning_of_date,
            photo: data.photo,
            role: data.role,
            status: data.status,
            username: data.username,
            password: data.password,
            bloodgroup: data.blood_group,


            phone: data.phone,
            email: data.email
          });



        });



      }

    })


  }

  onChange(event: Event): void {

    this.imagefile = (event.target as HTMLInputElement).files?.[0];
    console.log(this.form.patchValue({
      photo: this.imagefile
    }));

  }


  onSubmit(): void {
console.log("submit");
    // const formData = new FormData();
    // formData.append('name', this.form.value.name);
    // formData.append('date_of_birth', this.form.value.dateofbirth);
    // formData.append('gender', this.form.value.gender);
    // formData.append('religion', this.form.value.religion);
    // formData.append('email', this.form.value.email);
    // formData.append('phone', this.form.value.phone);
    // formData.append('blood_group', this.form.value.bloodgroup);
    // formData.append('address', this.form.value.address);
    // formData.append('joinning_of_date', this.form.value.joinningdate);
    // formData.append('photo', this.imagefile);
    // formData.append('role', this.form.value.role);
    // formData.append('status', this.form.value.status);
    // formData.append('username', this.form.value.username);
    // formData.append('password', this.form.value.password);


    // var data = {
    //   address: this.form.value.address,
    //   blood_group: this.form.value.bloodgroup,
    //   date_of_birth: this.form.value.dateofbirth,
    //   email: this.form.value.email,
    //   gender: this.form.value.gender,
    //   joinning_of_date: this.form.value.joinningdate,
    //   name: this.form.value.name,
    //   password: this.form.value.password,
    //   phone: this.form.value.phone,
    //   religion: this.form.value.religion,
    //   role: this.form.value.role,
    //   status: this.form.value.status,
    //   username: this.form.value.username

    // };



    // if (this.form.invalid) {
    //   this.form.markAllAsTouched();
    //   this.toastr.error('Error!', 'Invalid Data!');
    //   return;
    // } else {

    //   if (this.id > 0) {

    //     this.baseService.put(this.endpoint, this.id, data).subscribe(
    //       (res: ApiResponse) => {
    //         if (res.success) {
    //           //this.loading = true;
    //           this.toastr.success(' successfully update', res.message);
    //           console.log(res);

    //           this.router.navigateByUrl('/', { skipLocationChange: true })
    //           .then(() => {
    //             this.router.navigate(['./member']);
    //           });

    //         } else {
    //           this.toastr.warning('Warning!', res.message);
    //         }
    //       },
    //       (error: HttpErrorResponse) => {
    //         //this.loading = false;
    //         console.error('Http Error:', error);
    //         this.toastr.error('Error!', 'Server not found!');
    //       }
    //     );

    //   } else {

    //     this.baseService.post(this.endpoint, formData).subscribe(
    //       (res: ApiResponse) => {
    //         if (res.success) {
    //           //this.loading = true;
    //           this.toastr.success(' successfully create', res.message);
    //           console.log(res);

    //           this.router.navigateByUrl('/', { skipLocationChange: true })
    //             .then(() => {
    //               this.router.navigate(['./member']);
    //             });

    //         } else {
    //           this.toastr.warning('Warning!', res.message);
    //         }
    //       },
    //       (error: HttpErrorResponse) => {
    //         //this.loading = false;
    //         console.error('Http Error:', error);
    //         this.toastr.error('Error!', 'Server not found!');
    //       }
    //     );
    //   }






    // }
  }


}
