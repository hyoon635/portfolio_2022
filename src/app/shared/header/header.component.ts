import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentPage = 'home';

  constructor() {}

  ngOnInit(): void {}

  goPage(page: any) {
    this.currentPage = page;
    document.getElementById(page)?.scrollIntoView({ behavior: 'smooth' });
  }
}
