import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ThemeToggleService } from './service/theme-toggle.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';
  showHeader: boolean = false;

  constructor(public theme :ThemeToggleService,private router: Router) {
  }
  toggleTheme(): void {
    this.theme.toggleDarkMode();
  }


  isLoginPageOrSignupPage(): boolean {
    // Get the current URL segment
    const currentUrlSegment = this.router.url.split('/')[1]; // Assuming login and signup are at the first level

    // Check if the current URL is for login or signup
    return currentUrlSegment === 'login' || currentUrlSegment === 'signup';
  }
}
