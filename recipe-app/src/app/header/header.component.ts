import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() feautureSelection = new EventEmitter<string>();
  
  onSelect(selection: string) {
    this.feautureSelection.emit(selection);
  }
}