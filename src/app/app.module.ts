import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { NotificationComponent } from './notification/notification.component';
import { InputComponent } from './input/input.component';
import { ProductsComponent } from './products/products.component';
import { ContainerComponent } from './container/container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotificationComponent,
    InputComponent,
    ProductsComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
