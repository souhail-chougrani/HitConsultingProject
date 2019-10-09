import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { AngularModule } from '../angular-Material/angular.module';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, AngularModule],
  exports: [LoaderComponent]
})
export class SharedModule {}
