import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projectList = [
    {
      id: 0,
      name: 'songareeDM',
      type: 'app',
      title: '송아리 당뇨앱',
      Detailurl: 'https://www.notion.so/89408cd6aabc448291842473957250fa',
    },
    {
      id: 1,
      name: 'songareeDoctors',
      type: 'web',
      title: '송아리 닥터스',
      Detailurl: '',
    },
    {
      id: 2,
      name: 'songareeBP',
      type: 'app',
      title: '송아리 혈압앱',
      Detailurl: '',
    },
    {
      id: 3,
      name: 'songareeWeb',
      type: 'web',
      title: '송아리웹',
      Detailurl: '',
    },
    {
      id: 4,
      name: 'songareeAppbook',
      type: 'app',
      title: '송아리 앱북 시리즈',
      Detailurl: '',
    },
    {
      id: 5,
      name: 'songareeAir',
      type: 'app',
      title: '송아리 에어 IoT',
      Detailurl: '',
    },
    {
      id: 6,
      name: 'songareeIT',
      type: 'web',
      title: '송아리아이티 홈페이지',
      Detailurl: '',
    },
    {
      id: 7,
      name: 'songareeITAdmin',
      type: 'web',
      title: '송아리아이티 Admin',
      Detailurl: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
