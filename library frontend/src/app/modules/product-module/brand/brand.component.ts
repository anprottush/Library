import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort } from '@angular/material/sort';
import { Brand } from './../../../shared/models/product/brand';
import { BaseService } from '../../../core/services/base.service';
import { ApiResponse } from '../../../shared/models/ApiResponse';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogService } from '../../../core/services/confirm-dialog.service';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  public brandList: Brand[] = [];
  displayedColumns: string[] = ['id', 'brandname', 'branddescription', 'imageUrl', 'action'];
  dataSource: any;
  public loading = false;
  private endpoint = 'brand';
  private imageEndpoint = 'brand/images';
  loadingIndicator = true;
  reorderable = true;
  public brandForm: FormGroup;
  ActivateAddEditForm: boolean = true;
  public editData: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator; 
  @ViewChild(MatSort) sort!: MatSort;

  brandname: string = '';
  branddescription: string = '';

  constructor(private baseService: BaseService<Brand>,
    private toastr: ToastrService,
    private elementRef: ElementRef,
    private confirmDialogService: ConfirmDialogService,
    private router: Router,
    private liveAnnouncer: LiveAnnouncer
    
  ) {
    this.brandForm = new FormGroup({
      brandName: new FormControl('', Validators.required), 
      brandDescription: new FormControl('', Validators.required), 
      brandImage: new FormControl(null)
    });
  }
  
 
ngOnInit(): void {
    
    
    this.loadBranddata();
  }

  announceSortChange(sortState: Sort) {
    
    if (sortState.direction) {
      this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }

  loadBranddata()
  {
    //this.loading = true;
    this.baseService.getWithPagination(this.endpoint).subscribe((res: ApiResponse) => {
      //this.loading = false;
      console.log(res);
      if (res.success) {
        this.brandList = res.payload.data;
        this.dataSource = new MatTableDataSource<Brand>(this.brandList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.toastr.success('Success! Brand data retrive', res.message[0]);
        
      } else {
        this.brandList = [];
        this.toastr.warning('Warning!', res.message[0]);
      }
    }, (error: HttpErrorResponse) => {
      this.loading = false;
      this.toastr.error('Error!', 'Server not found!');
    });


  }
  
  addClick(){
    this.ActivateAddEditForm=true;
  }
    
  editClick(brand:any)
  {
    this.ActivateAddEditForm=false;
    this.editData = brand;
    this.brandname=this.editData.brandName;
    this.branddescription= this.editData.description;
    //console.log(this.editData.brandName)
  
  }

  deleteClick(brand:any) {
    this.confirmDialogService.confirmThis("Are you sure to delete?", () => {
      alert("Yes clicked");
      console.log(brand.brandName);
      this.baseService.delete(this.endpoint,brand.id).subscribe((res: ApiResponse) => {
        //this.loading = false;
        if (res.success) {
          this.toastr.success('Success! Brand Deleted', res.message[0]);
          this.router.navigate(['./product/brand']);
  
        } else {
          this.toastr.warning('Warning!', res.message[0]);
        }
      }, (error: HttpErrorResponse) => {
        this.loading = false;
        this.toastr.error('Error!', 'Server not found!');
      });
     
    },  () => {
      alert("No clicked");
    })
  }


  Filterchange(event: Event) {
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;

  }

  
  onSubmit():void {

    var addBrandata = {
      
      BrandName: this.brandForm.value.brandName,
      Description: this.brandForm.value.brandDescription,
      ImageUrl: this.brandForm.value.brandImage

    };

    console.log('Valid?', this.brandForm.valid); // true or false
    console.log('Brand Name', addBrandata.BrandName);
    console.log('Brand Description', addBrandata.Description);
    console.log('Brand Image', addBrandata.ImageUrl);


    if(this.brandForm.valid)
    {
      if (this.ActivateAddEditForm)
      {
        this.baseService.post(this.endpoint,addBrandata).subscribe((res: ApiResponse) => {
          if (res.success) {
            //this.loading = true;
            this.toastr.success('Success! Brand Created', res.message[0]);
            this.ActivateAddEditForm=false;
            this.router.navigate(['./product/brand']);
            
    
          } else {
            //this.brandForm = [];
            this.toastr.warning('Warning!', res.message[0]);
          }
        }, (error: HttpErrorResponse) => {
          this.loading = false;
          this.toastr.error('Error!', 'Server not found!');
        });
      }
      else
      {
        var editBranddata = {
          Id: this.editData.id,
          BrandName: this.brandForm.value.brandName,
          Description: this.brandForm.value.brandDescription,
          //ImageUrl: this.brandForm.value.brandImage
    
        };
        
        this.baseService.put(this.endpoint,editBranddata).subscribe((res: ApiResponse) => {
          //this.loading = false;
          if (res.success) {
            this.toastr.success('Success! Brand Updated', res.message[0]);
            this.ActivateAddEditForm=false;
            this.router.navigate(['./product/brand']);
    
          } else {
            this.toastr.warning('Warning!', res.message[0]);
          }
        }, (error: HttpErrorResponse) => {
          this.loading = false;
          this.toastr.error('Error!', 'Server not found!');
        });
      
      
    }
  }
    else
    {
      this.loading = false;
      this.toastr.error('Error!', 'Invalid Data!');
    }
    
  }
}
