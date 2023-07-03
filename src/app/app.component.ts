import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleSlotContentProjectionComponent } from './single-slot-content-projection/single-slot-content-projection.component';
import { MultiSlotContentProjectionComponent } from './multi-slot-content-projection/multi-slot-content-projection.component';
import { ColorDirective } from './color.directive';
import { ConditionalContentProjectionComponent } from './conditional-content-projection/conditional-content-projection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SingleSlotContentProjectionComponent, MultiSlotContentProjectionComponent, ConditionalContentProjectionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'content-projection';
}
