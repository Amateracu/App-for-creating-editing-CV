import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule, MatCheckboxModule],
  exports: [],
  providers: [],
})
export class AuthModule {}
