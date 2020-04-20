import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountToModule } from 'angular-count-to';
import { AngularTiltModule } from 'angular-tilt';
import 'hammerjs';
import 'mousetrap';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxMasonryModule } from 'ngx-masonry';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPayPalModule } from 'ngx-paypal';
import { SwiperConfigInterface, SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SharedModule } from '../shared/shared.module';
import { enterpriceAboutComponent } from './enterprice/enterprice-about/enterprice-about.component';
import { enterpriceDownloadComponent } from './enterprice/enterprice-download/enterprice-download.component';
import { enterpriceFooterComponent } from './enterprice/enterprice-footer/enterprice-footer.component';
import { enterpriceHeaderComponent } from './enterprice/enterprice-header/enterprice-header.component';
import { enterpriceNavComponent } from './enterprice/enterprice-nav/enterprice-nav.component';
import { enterpricePricingComponent } from './enterprice/enterprice-pricing/enterprice-pricing.component';
import { enterpriceScreenshotsComponent } from './enterprice/enterprice-screenshots/enterprice-screenshots.component';
import { enterpriceServicesComponent } from './enterprice/enterprice-services/enterprice-services.component';
import { enterpriceSubscribeComponent } from './enterprice/enterprice-subscribe/enterprice-subscribe.component';
import { enterpriceVideoComponent } from './enterprice/enterprice-video/enterprice-video.component';
//Enterprice Layouts
import { EnterpriceComponent } from './enterprice/enterprice.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { CountDownComponent } from './enterprice/count-down/count-down.component';
import { ClientAccountComponent } from './client-space/client-account/client-account.component';
import {AccordionComponent} from './client-space/client-account/accordion/accordion.component';
import { RestaurantComponent } from './client-space/client-account/restaurant/restaurant.component';
import {GalleryComponent} from "./client-space/client-account/restaurant/gallery/gallery.component";



const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {};

@NgModule({
  declarations: [
    EnterpriceComponent, enterpriceHeaderComponent, enterpriceNavComponent, enterpriceServicesComponent, enterpriceAboutComponent, enterpriceDownloadComponent, enterpriceScreenshotsComponent, enterpricePricingComponent, enterpriceVideoComponent, enterpriceSubscribeComponent, enterpriceFooterComponent, CountDownComponent, ClientAccountComponent, AccordionComponent, RestaurantComponent, GalleryComponent],

  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SwiperModule,
    CarouselModule,
    NgbModule,
    GalleryModule.forRoot(),
    SharedModule,
    CountToModule,
    AngularTiltModule,
    ScrollToModule.forRoot(),
    MasonryGalleryModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    Ng5SliderModule,
    NgxMasonryModule
  ],

  exports: [],

  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})

export class LayoutsModule { }
