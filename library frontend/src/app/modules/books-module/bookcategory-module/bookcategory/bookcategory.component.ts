import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from 'src/app/core/services/base.service';
import { ConfirmDialogService } from 'src/app/core/services/confirm-dialog.service';
import { ApiResponse } from 'src/app/shared/models/ApiResponse';
import { BookCategory } from 'src/app/shared/models/admin/bookcategory';
import { BookCategoryService } from './bookcategory-service';
declare var $: any;
@Component({
  selector: 'app-bookcategory',
  templateUrl: './bookcategory.component.html',
  styleUrls: ['./bookcategory.component.css'],
})
export class BookCategoryComponent implements OnInit, AfterViewInit {
  @ViewChild('dataTable', { static: false }) elementRef!: ElementRef;

  public list: BookCategory[] = [];
  private endpoint = 'bookcategory';
  public loading = false;
  constructor(
    private baseService: BaseService,
    private toastr: ToastrService,
    private confirmDialogService: ConfirmDialogService,
    private bookCategoryService: BookCategoryService,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    // $(this.dataTable.nativeElement).DataTable({
    //   paging: true,
    //   lengthChange: true,
    //   searching: true,
    //   ordering: true,
    //   info: true,
    //   autoWidth: false
    // });

  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.baseService.getWithPagination(this.endpoint).subscribe(
      (res: ApiResponse) => {
        this.loading = false;
        console.log(res);
        if (res.success) {
          setTimeout(()=>{
            this.list = res.payload.data;
            this.loading = true;
          },1000);

          this.toastr.success('Success!  data retrive', res.message);

        } else {
          this.list = [];
          this.toastr.warning('Warning!', res.message);
        }
      },
      (error: HttpErrorResponse) => {
        //this.loading = false;
        this.toastr.error('Error!', 'Server not found!');
      }
    );
  }

  detailesClick() {}

  editClick(updateddata: any) {
    this.router.navigate(['./bookcategory/edit', updateddata.id]);
    this.bookCategoryService.setData(updateddata);
  }

  deleteClick(deletedddata: any) {
    this.confirmDialogService.confirmThis(
      'you are about to delete a record. This cannot be undone. are you sure?', () => {

        this.baseService.delete(this.endpoint, deletedddata.id).subscribe(
          (res: ApiResponse) => {
            //this.loading = false;
            if (res.success) {
              this.toastr.success('Success! data Deleted', res.message);
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
            this.toastr.error('Error!', 'Server not found!');
          }
        );
      }, () => {



      }

    );
  }

  addClick(adddata: any) {}

  rejectClick(rejectdata: any) {}







}

