import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-storebookcategory',
  templateUrl: './storebookcategory.component.html',
  styleUrls: ['./storebookcategory.component.css']
})
export class StoreBookCategoryComponent implements AfterViewInit {
  @ViewChild('dataTable', { static: false }) elementRef!: ElementRef;

  ngAfterViewInit(): void {
    $(this.elementRef.nativeElement).DataTable({
      paging: true,
      lengthChange: true,
      searching: true,
      ordering: true,
      info: true,
      autoWidth: false
    });
  }
}
