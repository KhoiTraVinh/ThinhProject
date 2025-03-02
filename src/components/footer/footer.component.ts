import { Component } from '@angular/core';
import { ShareModule } from '../../share-module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ShareModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
