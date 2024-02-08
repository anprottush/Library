import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiResponse } from 'src/app/shared/models/ApiResponse';
import { EbookService } from './ebook-service';

@Component({
  selector: 'app-ebook-create',
  templateUrl: './ebook-create.component.html',
  styleUrls: ['./ebook.component.css'],
})
export class EbookCreateComponent implements OnInit {
  private endpoint = 'ebook';
  public form: FormGroup;
  public submitted = false;
  public selectedPhotoName: any;
  public selectedFileName: any;
  public id: number | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private baseService: BaseService,
    private router: Router,
    private route: ActivatedRoute,
    private EbookService: EbookService
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      author: ['', Validators.required],
      coverphoto: [null, Validators.required],
      file: [null, Validators.required],
      notes: ['', Validators.required],
    });
  }

  get name() {
    return this.form.get('name');
  }

  get author() {
    return this.form.get('author');
  }

  get coverphoto() {
    return this.form.get('coverphoto');
  }

  get file() {
    return this.form.get('file');
  }

  get notes() {
    return this.form.get('notes');
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      if (params['id'] != null) {
        const data = this.EbookService.getData();

        var ebookData = {
          name: data.name,
          author: data.author,
          notes: data.notes,
        };
        console.log(ebookData);
        if (data) {
          this.form.setValue(ebookData);
        }
      }
    });
  }
  onSubmit(): void {
    this.submitted = true;

    const formData = new FormData();
    formData.append('name', this.form.value.name);
    formData.append('author', this.form.value.author);
    formData.append('photo', this.selectedPhotoName);
    formData.append('file', this.selectedFileName);
    formData.append('notes', this.form.value.notes);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.toastr.error('Invalid Form Data!', 'Error');
      return;
    }

    if (this.id) {
      this.onUpdate(this.form.value);
    } else {
      this.baseService.post(this.endpoint, formData).subscribe(
        (response: any) => {
          console.log('Response:', response);
          this.toastr.success('Ebook added successfully!', 'Success');
          setTimeout(() => {
            this.router.navigate(['/ebook/index']);
          }, 3000);
        },
        (error: HttpErrorResponse) => {
          console.error('Error:', error);
          this.toastr.error('Error while adding ebook!', 'Error');
        }
      );
    }
  }

  onUpdate(ebookData: any): void {
    if (this.id === null) {
      this.toastr.error('Error!', 'ID is null!');
      return;
    }

    this.baseService.put(this.endpoint, this.id, ebookData).subscribe(
      (res: ApiResponse) => {
        if (res.success) {
          this.toastr.success('Ebook updated successfully!', 'Success');
          setTimeout(() => {
            this.router.navigate(['/ebook/index']);
          }, 3000);
        } else {
          this.toastr.error('Error while updating ebook!', 'Error');
        }
      },
      (error: HttpErrorResponse) => {
        console.error('Error:', error);
        this.toastr.error('Error while updating ebook!', 'Error');
      }
    );
  }

  // onNameChange(event: Event) {
  //   const target = event.target as HTMLInputElement;
  //   if (target.files && target.files.length > 0) {
  //     this.selectedPhotoName = target.files[0].name;
  //   }
  // }

  onPhotoChange(event: Event): void {
    this.selectedPhotoName = (event.target as HTMLInputElement).files?.[0];
    // console.log('Selected Photo:', this.selectedPhotoName);
  }

  onFileChange(event: Event): void {
    this.selectedFileName = (event.target as HTMLInputElement).files?.[0];
    // console.log('Selected File:', this.selectedFileName);
  }
}
