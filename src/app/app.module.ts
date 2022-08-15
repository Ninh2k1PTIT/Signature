import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CheckBoxModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ColorPickerModule, UploaderModule, SignatureModule, TextBoxModule, NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { TabModule, ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    ColorPickerModule,
    BrowserModule,
    CheckBoxModule,
    DropDownListModule,
    TabModule,
    ToolbarModule,
    UploaderModule,
    SignatureModule,
    TextBoxModule,
    DialogModule,
    ButtonModule,
    NumericTextBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
