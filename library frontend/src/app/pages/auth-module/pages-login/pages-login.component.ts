import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiResponse } from 'src/app/shared/models/ApiResponse';
import { Login } from 'src/app/shared/models/authenticate/login';

@Component({
  selector: 'app-pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-login.component.css']
})
export class PagesLoginComponent implements OnInit {

  private endpoint = 'user/login';
  public form: FormGroup;

  constructor(private baseService: BaseService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.form = new FormGroup({
      username_or_email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),

    });

  }

  get usernameOrEmail() {
    return this.form.get('username_or_email');
  }

  get password() {
    return this.form.get('password');
  }

  ngOnInit(): void {
  }
  adminClick(): void {

  }

  librarianClick(): void {

  }


  onSubmit(): void {

    var logindata: Login = {
      username: this.form.value.username_or_email,
      password: this.form.value.password,
    };

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.toastr.error('Error!', 'Invalid Data!');
    }
    else {
      this.router.navigate(['./dashboard']);
      // this.baseService.post(this.endpoint, logindata)
      // .subscribe((res: ApiResponse) => {
      //       if (res.success) {
      //         //this.loading = true;
      //         this.toastr.success('You login successfully', res.message);
      //         localStorage.setItem('token',res.payload.authorization.token);
      //         this.router.navigate(['./dashboard']);
      //       } else {
      //         this.toastr.warning('Warning!', res.message);
      //       }
      //     }, (error: HttpErrorResponse) => {
      //       //this.loading = false;
      //       console.error('Http Error:', error);
      //       this.toastr.error('Error! Server not found!', error.error.message);
      //     });

    }


  }


}
