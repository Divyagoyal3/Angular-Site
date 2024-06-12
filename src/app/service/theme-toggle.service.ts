// theme-toggle.service.ts

import { EventEmitter, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeToggleService {
    private _darkMode = new BehaviorSubject<boolean>(false);
    darkMode$ = this._darkMode.asObservable();
  
    toggleDarkMode() {
      this._darkMode.next(!this._darkMode.value);
    }
}
