import { HttpErrorResponse } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from 'src/app/core/services/base.service';
import { ConfirmDialogService } from 'src/app/core/services/confirm-dialog.service';
import { ApiResponse } from 'src/app/shared/models/ApiResponse';
import { BookIssue } from 'src/app/shared/models/admin/bookissue';
import { BookIssueService } from './bookissue-service';
declare var $: any;
@Component({
  selector: 'app-bookissue',
  templateUrl: './bookissue.component.html',
  styleUrls: ['./bookissue.component.css'],
})
export class BookIssueComponent implements OnInit, AfterViewInit {
  @ViewChild('dataTable', { static: false }) elementRef!: ElementRef;

  public list: BookIssue[] = [];

  private endpoint = 'bookissue';
  public loading = false;
  constructor(
    private baseService: BaseService,
    private toastr: ToastrService,
    private confirmDialogService: ConfirmDialogService,
    private bookIssueService: BookIssueService,
    private router: Router
  ) {}
  ngAfterViewInit(): void {
    // $(this.elementRef.nativeElement).DataTable({
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
          this.list = res.payload.data;
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
    this.router.navigate(['./bookissue/edit', updateddata.id]);
    this.bookIssueService.setData(updateddata);
  }

  deleteClick(deletedddata: any) {
    this.confirmDialogService.confirmThis(
      'you are about to delete a record. This cannot be undone. are you sure?',
      () => {
        alert('Yes clicked');
        console.log(deletedddata.id);
        this.baseService.delete(this.endpoint, deletedddata.id).subscribe(
          (res: ApiResponse) => {
            //this.loading = false;
            if (res.success) {
              this.toastr.success('Success! data Deleted', res.message);
              //this.router.navigate(['./product/brand']);
            } else {
              this.toastr.warning('Warning!', res.message);
            }
          },
          (error: HttpErrorResponse) => {
            //this.loading = false;
            this.toastr.error('Error!', 'Server not found!');
          }
        );
      },
      () => {}
    );
  }

  renewreturnClick() {}

  paymentClick() {}
}
