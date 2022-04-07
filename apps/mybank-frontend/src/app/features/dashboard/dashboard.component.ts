import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'io.yorosoft.mybank-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  date = new Date().getFullYear()

  constructor() { }

  ngOnInit(): void {
  }

}
