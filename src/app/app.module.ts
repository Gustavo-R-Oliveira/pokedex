import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ArrowComponent } from './components/arrow/arrow.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, CardComponent, ArrowComponent, SelectComponent],
  imports: [BrowserModule, HttpClientModule, HammerModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
