import { Component } from '@angular/core';
import { InputMaskModule } from 'primeng/inputmask';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    InputMaskModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-jest';
}
