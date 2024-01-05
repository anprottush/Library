import { Component, OnInit, ElementRef } from '@angular/core';
import { Category } from '../../../shared/models/product/category';
import { BaseService } from '../../../core/services/base.service';
import { ApiResponse } from '../../../shared/models/ApiResponse';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogService } from '../../../core/services/confirm-dialog.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public categoryList: Category[] = [];
  public loading = false;
  private endpoint = 'category';

  constructor(
    private baseService: BaseService<Category>,
    private toastr: ToastrService,
    private elementRef: ElementRef,
    private confirmDialogService: ConfirmDialogService,) { }

  ngOnInit(): void {
    this.loading = true;
    this.baseService.getWithPagination(this.endpoint).subscribe((res: ApiResponse) => {
      this.loading = false;
      // console.log(res);
      debugger;
      if (res.success) {
        this.categoryList = res.payload.data;
        // this.toastr.success('', res.message[0]);
        console.log(this.categoryList);

      } else {
        this.categoryList = [];
        this.toastr.warning('Warning!', res.message[0]);
      }
    }, (error: HttpErrorResponse) => {
      this.loading = false;
      this.toastr.error('Error!', 'Server not found!');
    });

  }

}
