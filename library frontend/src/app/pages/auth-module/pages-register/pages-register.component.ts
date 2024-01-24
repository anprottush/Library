import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from 'src/app/core/services/base.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from 'src/app/shared/models/ApiResponse';

@Component({
  selector: 'app-pages-register',
  templateUrl: './pages-register.component.html',
  styleUrls: ['./pages-register.component.css'],
})
export class PagesRegisterComponent implements OnInit {
  private endpoint = 'user/register';
  public registerForm: FormGroup;

  constructor(
    private baseService: BaseService<any>,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      photo: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  ngOnInit(): void {}

  onSubmit(): void {
    var registerdata = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      email: this.registerForm.value.email,
      name: this.registerForm.value.name,
      phone: this.registerForm.value.phone,
      photo: this.registerForm.value.photo,
    };
    debugger;
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      this.toastr.error('Error!', 'Invalid Data!');
    } else {
      debugger;
      // this.baseService.post(this.endpoint, registerdata).subscribe(
      //   (res: ApiResponse) => {
      //     if (res.success) {
      //       //this.loading = true;
      //       this.toastr.success('Register successfully', res.message);
      //       localStorage.setItem('token', res.payload.authorization.token);
      //       //this.router.navigate(['./product/brand']);
      //     } else {
      //       this.toastr.warning('Warning!', res.message);
      //     }
      //   },
      //   (error: HttpErrorResponse) => {
      //     //this.loading = false;
      //     console.error('Http Error:', error);
      //     this.toastr.error('Error!', 'Server not found!');
      //   }
      // );
    }
  }
}
