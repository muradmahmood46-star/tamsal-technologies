import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { QuoteModalComponent } from './components/quote-modal/quote-modal.component';
import { QuoteModalService } from './services/quote-modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, QuoteModalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public quoteService: QuoteModalService) {}
  isScrolled = false;
  isNavHidden = false;
  lastScrollTop = 0;
  isMobileMenuOpen = false;

  companyName = 'TAMSAL TECHNOLOGIES';
  email = 'tamsaltechnologies@gmail.com';
  phone = '+92 334 8128646';

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop || 0;
    this.isScrolled = currentScroll > 50;

    // Don't hide navbar if mobile drawer is currently open
    if (this.isMobileMenuOpen) {
      this.isNavHidden = false;
      this.lastScrollTop = currentScroll;
      return;
    }

    // Scroll Down -> Hide navbar
    if (currentScroll > this.lastScrollTop && currentScroll > 80) {
      this.isNavHidden = true;
    } else {
      // Scroll Up / Near Top -> Show navbar
      this.isNavHidden = false;
    }

    this.lastScrollTop = Math.max(0, currentScroll);
  }
}