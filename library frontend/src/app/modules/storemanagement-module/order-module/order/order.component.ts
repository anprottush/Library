import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements AfterViewInit {
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
