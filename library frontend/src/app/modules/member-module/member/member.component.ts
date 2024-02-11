import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from 'src/app/core/services/base.service';
import { ConfirmDialogService } from 'src/app/core/services/confirm-dialog.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from 'src/app/shared/models/ApiResponse';
import { MemberService } from './member-service';
import { Member } from 'src/app/shared/models/admin/member';
declare var $: any;
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit, AfterViewInit {
  @ViewChild('dataTable', { static: false }) dataTable!: ElementRef;

  public list: Member[] = [];
  private endpoint = 'member';
  public loading: boolean = false;
  constructor(
    private baseService: BaseService,
    private toastr: ToastrService,
    private confirmDialogService: ConfirmDialogService,
    private memberService: MemberService,
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

    this.baseService.getWithPagination(this.endpoint).subscribe(
      (res: ApiResponse) => {

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
    this.router.navigate(['./member/edit', updateddata.id]);
    this.memberService.setData(updateddata);
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
              this.router.navigateByUrl('/', { skipLocationChange: true })
              .then(() => {
                this.router.navigate(['./member']);
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
      },
      () => {}
    );
  }

  renewreturnClick() {}

  paymentClick() {}







}
