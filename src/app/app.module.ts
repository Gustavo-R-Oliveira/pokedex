import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
@NgModule({
  declarations: [AppComponent, CardComponent, SelectComponent, HeaderComponent, FooterComponent, SpinnerComponent],
  imports: [BrowserModule, HttpClientModule, HammerModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
