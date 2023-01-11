import { ChangeDetectorRef, Component, NgZone, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Autoplay, Thumbs } from 'swiper';
import { BehaviorSubject } from 'rxjs';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs]);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;

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

  show: boolean | undefined;
  thumbs: any;
  slides$ = new BehaviorSubject<string[]>(['']);
  constructor(private cd: ChangeDetectorRef, private ngZone: NgZone) {}

  ngOnInit(): void {}

  getSlides() {
    this.slides$.next(
      Array.from({ length: 600 }).map((el, index) => `Slide ${index + 1}`)
    );
  }

  thumbsSwiper: any;
  setThumbsSwiper(swiper: any) {
    this.thumbsSwiper = swiper;
  }
  controlledSwiper: any;
  setControlledSwiper(swiper: any) {
    this.controlledSwiper = swiper;
  }

  indexNumber = 1;
  exampleConfig = { slidesPerView: 3 };
  slidesPerView: number = 4;
  pagination: any = false;

  slides2 = ['slide 1', 'slide 2', 'slide 3'];
  replaceSlides() {
    this.slides2 = ['foo', 'bar'];
  }

  togglePagination() {
    if (!this.pagination) {
      this.pagination = { type: 'fraction' };
    } else {
      this.pagination = false;
    }
  }

  navigation = false;
  toggleNavigation() {
    this.navigation = !this.navigation;
  }

  scrollbar: any = false;
  toggleScrollbar() {
    if (!this.scrollbar) {
      this.scrollbar = { draggable: true };
    } else {
      this.scrollbar = false;
    }
  }
  breakpoints = {
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 4, spaceBetween: 40 },
    1024: { slidesPerView: 4, spaceBetween: 50 },
  };

  slides = Array.from({ length: 5 }).map((el, index) => `Slide ${index + 1}`);
  virtualSlides = Array.from({ length: 600 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  log(log: string) {
    // console.log(string);
  }

  breakPointsToggle: boolean | undefined;
  breakpointChange() {
    this.breakPointsToggle = !this.breakPointsToggle;
    this.breakpoints = {
      640: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 4, spaceBetween: 40 },
      1024: { slidesPerView: this.breakPointsToggle ? 7 : 5, spaceBetween: 50 },
    };
  }

  slidesEx = ['first', 'second'];

  onSlideChange(swiper: any) {
    if (swiper.isEnd) {
      // all swiper events are run outside of ngzone, so use ngzone.run or detectChanges to update the view.
      this.ngZone.run(() => {
        this.slidesEx = [...this.slidesEx, `added ${this.slidesEx.length - 1}`];
      });
      console.log(this.slidesEx);
    }
  }
}
