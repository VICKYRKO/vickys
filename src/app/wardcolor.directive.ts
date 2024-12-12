import { Directive, ElementRef, Renderer2, Input, OnChanges, SimpleChanges } from '@angular/core';


@Directive({
  selector: '[appWardcolor]'
})
export class WardcolorDirective implements OnChanges {

  @Input()
  ward!: string; // Mark as optional


  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Lifecycle hook that gets called when the input value changes
  ngOnChanges(changes: SimpleChanges) {
    if (changes['ward']) { // Use bracket notation to access 'ward'
      console.log('Ward changed:', changes['ward']);
      this.setBackgroundColor(this.ward);
    }
  }

  // Set background color based on the ward value
  private setBackgroundColor(ward: string) {
    let color = 'white';  // Default color for unassigned ward

    switch (ward) {
      case 'Ortho':
        color = 'lightblue';
        break;
      case 'Surgery':
        color = 'lightcoral';
        break;
      case 'Maternity':
        color = 'lightgreen';
        break;
      case 'Pediatric':
        color = 'lightyellow';
        break;
      default:
        color = 'white';  // Default color if no match
        break;
    }

    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  
  }

}
