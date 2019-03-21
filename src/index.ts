import {Component, NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material';

@Component({
  selector: 'test',
  templateUrl: 'component.html',
})
export class MyComponent {}

@NgModule({
  imports: [MatToolbarModule],
  declarations: [MyComponent],
})
export class AppModule {}