import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
//import { Chart } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {

    var s = document.createElement("script");
    s.type = "text/javascript";
    // s.src = "../assets/js/main.js";
    s.src = "./../../../../assets/js/chart.js";
    this.elementRef.nativeElement.appendChild(s);
  }


  ngAfterViewInit(): void {

    // var s = document.createElement("script");
    // s.type = "text/javascript";
    // s.src = "./../../../../assets/js/chart.js";
    // document.body.appendChild(s);

  }

}
