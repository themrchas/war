import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfigProviderService, loadConfig } from '../services/config-provider.service';
import { HttpClientModule } from '@angular/common/http';
import { TestComponentComponent } from './components/test-component/test-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ ConfigProviderService, 
    { provide: APP_INITIALIZER, useFactory: loadConfig, deps: [ConfigProviderService], multi: true} ],
  bootstrap: [AppComponent]
})

export class AppModule {}
