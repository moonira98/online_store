import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  viewMode: 'grid' | 'list' = 'grid'
  ngOnInit(): void {
  
    
  }



  setViewMode(mode: 'grid' | 'list') {
    debugger
    this.viewMode = mode
  }

}
