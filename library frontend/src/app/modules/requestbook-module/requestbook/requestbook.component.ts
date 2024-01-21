import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-requestbook',
  templateUrl: './requestbook.component.html',
  styleUrls: ['./requestbook.component.css'],
})
export class RequestBookComponent implements AfterViewInit {
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
