import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
  
})
export class HeaderComponent {

  isMenuOpen: boolean = false
  
  toggleMenu () {
    this.isMenuOpen = !this.isMenuOpen
  }

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'ru']);       // Указываем доступные языки
    translate.setDefaultLang('en');         // Устанавливаем язык по умолчанию
    translate.use('en');                    // Активируем язык при старте
  }

  switchLang(lang: string) {
    this.translate.use(lang);               // Переключаем язык при клике
  }

}
