import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ColumnoneComponent } from './layouts/columnone/columnone.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ColumnoneComponent, HeaderComponent, ColumnoneComponent],
  imports:[
    CommonModule,
    RouterModule
  ],
  exports:[ColumnoneComponent]
})
export class SharedModule { }
