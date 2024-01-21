import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements AfterViewInit {
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
