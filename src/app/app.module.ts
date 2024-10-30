import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AuthGuard } from './auth/auth.guard';
import {CmsInterceptor} from 'src/app/cms.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    NgxPaginationModule, // Add NgxPaginationModule if needed for other components
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CmsInterceptor,
      multi: true
      }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }