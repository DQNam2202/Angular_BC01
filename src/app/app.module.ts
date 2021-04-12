import { DirectivesModule } from './Modules/directives/directives.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BaiTapLayoutComponent } from './bai-tap-layout/bai-tap-layout.component';
import { HeaderComponent } from './bai-tap-layout/header/header.component';
import { ContentComponent } from './bai-tap-layout/content/content.component';
import { SideBarComponent } from './bai-tap-layout/side-bar/side-bar.component';
import { FooterComponent } from './bai-tap-layout/footer/footer.component';
import { BaiTapLayoutModule } from './Modules/bai-tap-layout/bai-tap-layout.module';
import { OneWayBindingComponent } from './Modules/data-binding/one-way-binding/one-way-binding.component';
import { DataBindingModule } from './Modules/data-binding/data-binding.module';

// Module chứa nhiều components
@NgModule({
  declarations: [ //Những thẻ có thể sử dụng được cho Module này
    AppComponent,
    DemoComponent,
  ],
  // import modules
  // Các Module khác muốn sử dụng trong module này phải được import vào
  imports: [
    DirectivesModule,
    BrowserModule,
    BaiTapLayoutModule,
    DataBindingModule
  ],
  providers: [], // Nới chứa các service muốn sử dụng được cho Module này khai báo tại đây
  bootstrap: [AppComponent]//Các component sử dụng được trong file index.html
})
export class AppModule { }
