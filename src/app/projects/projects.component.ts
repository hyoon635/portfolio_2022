import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projectList = [
    { id: 0, name: 'songareeDM', title: '송아리 당뇨앱', url: '' },
    { id: 1, name: 'songareeDoctors', title: '송아리 닥터스', url: '' },
    { id: 2, name: 'songareeBP', title: '송아리 혈압앱', url: '' },
    { id: 3, name: 'songareeWeb', title: '송아리 닥터스', url: '' },
    { id: 4, name: 'songareeAppbook', title: '송아리 앱북 시리즈', url: '' },
    { id: 5, name: 'songareeAir', title: '송아리 에어 IoT', url: '' },
    { id: 6, name: 'songareeIT', title: '송아리아이티 홈페이지', url: '' },
    { id: 7, name: 'songareeITAdmin', title: '송아리아이티 Admin', url: '' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
