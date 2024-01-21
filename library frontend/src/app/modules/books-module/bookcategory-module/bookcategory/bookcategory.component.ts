import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-bookcategory',
  templateUrl: './bookcategory.component.html',
  styleUrls: ['./bookcategory.component.css'],
})
export class BookCategoryComponent implements AfterViewInit {
  @ViewChild('dataTable', { static: false }) dataTable!: ElementRef;

  ngAfterViewInit(): void {
    $(this.dataTable.nativeElement).DataTable({
      paging: true,
      lengthChange: true,
      searching: true,
      ordering: true,
      info: true,
      autoWidth: false,
    });
  }
}
