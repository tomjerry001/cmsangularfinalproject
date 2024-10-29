import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NgxPaginationModule } from 'ngx-pagination';
 // Import NgxPaginationModule

@NgModule({
  declarations: [
    AppComponent
   
    // Remove MedicineListComponent from here
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule // Add NgxPaginationModule if needed for other components
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
