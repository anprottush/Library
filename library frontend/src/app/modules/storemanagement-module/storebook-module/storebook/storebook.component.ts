import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-storebook',
  templateUrl: './storebook.component.html',
  styleUrls: ['./storebook.component.css']
})
export class StoreBookComponent implements AfterViewInit {
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
