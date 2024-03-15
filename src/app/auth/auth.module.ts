import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { LoginEmailComponent } from './components/login-email/login-email.component';
import { LoginToolsComponent } from './components/login-tools/login-tools.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    LayoutComponent,
    RegisterComponent,
    LoginComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    LoginEmailComponent,
    LoginToolsComponent
  ],
})
export class AuthModule { }
