import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { DatepickerModule } from 'src/app/shared/controls/datepicker/datepicker.module';
import { InputAutocompleteModule } from 'src/app/shared/controls/input-autocomplete/input-autocomplete.module';
import { InputModule } from 'src/app/shared/controls/input/input.module';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CoreRoutingModule } from './core-routing.module';
import { CorePageComponent } from './pages/core-page/core-page.component';

@NgModule({
  declarations: [CorePageComponent, HeaderComponent, SideBarComponent, BreadcrumbsComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatSidenavModule,
    MatToolbarModule,
    TranslateModule,
    InputModule,
    DatepickerModule,
    InputAutocompleteModule,
  ],
})
export class CoreModule {}
