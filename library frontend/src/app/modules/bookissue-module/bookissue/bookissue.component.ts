import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-bookissue',
  templateUrl: './bookissue.component.html',
  styleUrls: ['./bookissue.component.css']
})
export class BookIssueComponent implements AfterViewInit {
  @ViewChild('dataTable', { static: false }) dataTable!: ElementRef;

  ngAfterViewInit(): void {
    $(this.dataTable.nativeElement).DataTable({
      paging: true,
      lengthChange: true,
      searching: true,
      ordering: true,
      info: true,
      autoWidth: false
    });
  }
}
