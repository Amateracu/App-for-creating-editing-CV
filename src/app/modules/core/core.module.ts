import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { DatepickerModule } from 'src/app/shared/controls/datepicker/datepicker.module';
import { InputModule } from 'src/app/shared/controls/input/input.module';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CoreRoutingModule } from './core-routing.module';
import { CorePageComponent } from './pages/core-page/core-page.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [CorePageComponent, HeaderComponent, SideBarComponent, BreadcrumbsComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatSidenavModule,
    MatToolbarModule,
    TranslateModule,
    InputModule,
    DatepickerModule,
  ],
  exports: [],
  providers: [],
})
export class CoreModule {}
