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
      introduce: '당뇨 수첩을 대체할 수 있는 모바일 앱 서비스',
      Detailurl:
        'https://obsidian-patio-7a9.notion.site/89408cd6aabc448291842473957250fa',
    },
    {
      id: 1,
      name: 'songareeDoctors',
      type: 'web',
      title: '송아리 닥터스',
      introduce:
        '송아리당뇨 앱을 사용하는 환자의 기록 정보를 의료진에게 제공하는 웹 모니터링 서비스',
      Detailurl:
        'https://obsidian-patio-7a9.notion.site/8c5c362511324838b9d6bea70ca35579',
    },
    {
      id: 2,
      name: 'songareeBP',
      type: 'app',
      title: '송아리 혈압앱',
      introduce: '혈압 관리를 위한 모바일 앱 서비스',
      Detailurl:
        'https://obsidian-patio-7a9.notion.site/4d624be0ee0f4a39ad4042828fbce256',
    },
    {
      id: 3,
      name: 'songareeWeb',
      type: 'web',
      title: '송아리웹',
      introduce:
        '송아리에서 제공하는 앱 서비스을 통해 입력한 데이터를 관리할 수 있는 웹 서비스',
      Detailurl:
        'https://obsidian-patio-7a9.notion.site/d773d194e990491fbff70c346197f1a5',
    },
    {
      id: 4,
      name: 'songareeAppbook',
      type: 'app',
      title: '송아리 앱북 시리즈',
      introduce:
        '의학적 지식을 전문 의료진이 제작하여 제공하는 모바일 학습 서비스',
      Detailurl:
        'https://obsidian-patio-7a9.notion.site/87c661bad8ac481bb5550b128426ec73',
    },
    {
      id: 5,
      name: 'songareeAir',
      type: 'app',
      title: '송아리 에어 IoT',
      introduce: '개인용 산소포화도 모니터링 앱 서비스',
      Detailurl:
        'https://obsidian-patio-7a9.notion.site/IoT-3012023063aa47b9a08e50c6deaff211',
    },
    {
      id: 6,
      name: 'songareeIT',
      type: 'web',
      title: '송아리아이티 홈페이지',
      introduce: '송아리아이티 홈페이지',
      Detailurl:
        'https://obsidian-patio-7a9.notion.site/cecb55ec38f1428b9d660314482b07b5',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
