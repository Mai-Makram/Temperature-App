import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvertComponent } from './convert/convert.component';
import { TempraturePipe } from './temprature.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertComponent,
    TempraturePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
