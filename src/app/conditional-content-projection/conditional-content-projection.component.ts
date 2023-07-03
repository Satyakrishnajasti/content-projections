import { Component, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorDirective } from '../color.directive';

@Component({
  selector: 'app-conditional-content-projection',
  standalone: true,
  imports: [CommonModule, ColorDirective],
  templateUrl: './conditional-content-projection.component.html',
  styleUrls: ['./conditional-content-projection.component.sass']
})
export class ConditionalContentProjectionComponent {
  @ContentChild(ColorDirective) content!: ColorDirective;
}
