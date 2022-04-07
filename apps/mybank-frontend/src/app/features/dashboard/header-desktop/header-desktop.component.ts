import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-desktop',
  templateUrl: './header-desktop.component.html'
})
export class HeaderDesktopComponent implements OnInit {

  constructor(private router: Router){}
  ngOnInit(): void {}

  logout(): void {}
}
