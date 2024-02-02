import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiResponse } from 'src/app/shared/models/ApiResponse';
import { ConfirmDialogService } from 'src/app/core/services/confirm-dialog.service';
import { Router } from '@angular/router';
import { EbookService } from './ebook-service';

interface Ebook {
  id: number;
  name: string;
  author: string;
  cover_photo: string;
  file: string;
  notes: string;
}

@Component({
  selector: 'app-ebook',
  templateUrl: './ebook.component.html',
  styleUrls: ['./ebook.component.css'],
})
export class EbookComponent implements OnInit {
  ebooks: Ebook[] = [];
  loading = false;
  private endpoint = 'ebook';

  constructor(
    private baseService: BaseService,
    private toastr: ToastrService,
    private confirmDialogService: ConfirmDialogService,
    private router: Router,
    private EbookService: EbookService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.baseService.getWithPagination(this.endpoint).subscribe(
      (res: any) => {
        this.loading = false;
        console.log(res);
        if (res.success) {
          this.ebooks = res.payload.data;
          this.toastr.success('Success!  data retrieved', res.message);
        } else {
          this.ebooks = [];
          this.toastr.warning('Warning!', res.message);
        }
      },
      (error: HttpErrorResponse) => {
        this.loading = false;
        this.toastr.error('Error!', 'Server not found!');
      }
    );
  }

  editClick(updatedebookdata: any) {
    this.router.navigate(['/ebook/edit', updatedebookdata.id]);
    this.EbookService.setData(updatedebookdata);
  }

  deleteClick(deletedddata: any) {
    this.confirmDialogService.confirmThis(
      'You are about to delete a record. This cannot be undone. Are you sure?',
      () => {
        this.baseService.delete(this.endpoint, deletedddata.id).subscribe(
          (res: ApiResponse) => {
            if (res.success) {
              this.toastr.success('Success! Data Deleted', res.message);
              this.loadData();
            } else {
              this.toastr.warning('Warning!', res.message);
            }
          },
          (error: HttpErrorResponse) => {
            this.toastr.error('Error!', 'Server not found!');
          }
        );
      },
      () => {
        this.toastr.warning('Warning!', 'Delete operation cancelled.');
      }
    );
  }
}
