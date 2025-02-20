import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class I18nSService {

  public langSignal: BehaviorSubject<string> = new BehaviorSubject("fr")


  constructor(private translateS: TranslateService) {
    this.initLanguage()
  }

  private initLanguage() {
    const savedLang = localStorage.getItem('language') || 'fr';
    this.translateS.use(savedLang);
  }

  switchLanguage(lang: string) {
    this.translateS.use(lang);
    localStorage.setItem('language', lang); // Sauvegarder la langue choisie
  }

  getCurrentLanguage(): string {
    return this.translateS.currentLang;
  }
}
