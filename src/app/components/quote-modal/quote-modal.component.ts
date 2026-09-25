import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { QuoteModalService, QuoteModalState } from '../../services/quote-modal.service';

@Component({
  selector: 'app-quote-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quote-modal.component.html'
})
export class QuoteModalComponent implements OnInit, OnDestroy {
  isOpen = false;
  modalState: QuoteModalState = { isOpen: false };
  private sub?: Subscription;

  // Form Fields
  firstName = '';
  lastName = '';
  contactNumber = '';
  email = '';
  projectType = 'Custom Website Development';
  projectDetails = '';

  // Submission State
  isSubmitting = false;
  isSuccess = false;
  errorMessage = '';

  // Project Types List
  projectTypes = [
    'Custom Website Development',
    'Custom Shopify Store & E-Commerce',
    'Multi-Vendor E-Commerce Marketplace',
    'Point of Sale (POS) & Barcode Billing',
    'Retail & Pharmacy POS System',
    'Restaurant POS & Online Ordering System',
    'Custom Enterprise ERP System',
    'Mobile App Development (iOS & Android)',
    'Paid-to-Click (PTC) & Earning Platform',
    'Trading & Financial Management System',
    'AI & Machine Learning Automation',
    'AI Chatbots & Intelligent Video Engines',
    'REST API & Backend Microservices Architecture',
    'Enterprise Cloud Hosting & DevOps CI/CD',
    'Database Architecture, Optimization & Migration',
    'UI/UX Design, Branding & Prototype Modeling',
    'Website Redesign, Speed Optimization & Bug Fixes',
    'Monthly Software Maintenance & 24/7 Technical Support',
    'Other / Bespoke Custom Software Solution'
  ];

  // Company Contact Destinations
  readonly companyEmail = 'tamsaltechnologies@gmail.com';
  readonly companyWhatsAppNumber = '923348128646';

  constructor(private quoteService: QuoteModalService) {}

  ngOnInit() {
    this.sub = this.quoteService.state$.subscribe((state) => {
      this.isOpen = state.isOpen;
      this.modalState = state;
      if (state.isOpen) {
        if (state.projectType) {
          this.projectType = state.projectType;
        }
        if (state.projectName && !this.projectDetails) {
          this.projectDetails = `Interested in project/product: ${state.projectName}\n\n`;
        }
        this.isSuccess = false;
        this.errorMessage = '';
      }
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  @HostListener('window:keydown.escape')
  onEscape() {
    if (this.isOpen) {
      this.closeModal();
    }
  }

  closeModal() {
    this.quoteService.close();
  }

  async onSubmit() {
    this.errorMessage = '';

    // Basic Validation
    if (!this.firstName.trim()) {
      this.errorMessage = 'Please enter your first name.';
      return;
    }
    if (!this.contactNumber.trim()) {
      this.errorMessage = 'Please enter your contact phone / WhatsApp number.';
      return;
    }
    if (!this.email.trim()) {
      this.errorMessage = 'Please enter your email address.';
      return;
    }
    if (!this.projectDetails.trim()) {
      this.errorMessage = 'Please provide some details about your project requirements.';
      return;
    }

    this.isSubmitting = true;

    // 1. Prepare WhatsApp Formatted Message
    const fullName = `${this.firstName.trim()} ${this.lastName.trim()}`.trim();
    const waText = 
`*🚀 New Project Quote Request - Tamsal Technologies*
━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${fullName}
📱 *Phone / WhatsApp:* ${this.contactNumber.trim()}
✉️ *Email Address:* ${this.email.trim()}
🎯 *Project Type:* ${this.projectType}
━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 *Project Requirements & Scope:*
${this.projectDetails.trim()}

Sent via Tamsal Technologies Web Portal`;

    const encodedWa = encodeURIComponent(waText);
    const waUrl = `https://wa.me/${this.companyWhatsAppNumber}?text=${encodedWa}`;

    // 2. Automatically launch WhatsApp immediately in the user interaction event
    if (typeof window !== 'undefined') {
      try {
        const link = document.createElement('a');
        link.href = waUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch {
        window.open(waUrl, '_blank');
      }
    }

    // 3. Automatically dispatch Email to company inbox in background
    try {
      const emailPayload = {
        'Client Name': fullName,
        'Phone / WhatsApp': this.contactNumber.trim(),
        'Client Email': this.email.trim(),
        'Project Category': this.projectType,
        'Project Requirements': this.projectDetails.trim(),
        '_subject': `🚀 New Project Quote: ${fullName} - ${this.projectType}`,
        '_template': 'table',
        '_captcha': 'false'
      };

      await fetch(`https://formsubmit.co/ajax/${this.companyEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      });

      this.isSubmitting = false;
      this.isSuccess = true;
      this.resetForm();
    } catch (err) {
      console.warn('Background email dispatch status:', err);
      this.isSubmitting = false;
      this.isSuccess = true;
      this.resetForm();
    }
  }

  resetForm() {
    this.firstName = '';
    this.lastName = '';
    this.contactNumber = '';
    this.email = '';
    this.projectType = 'Custom Website Development';
    this.projectDetails = '';
  }

  openWhatsAppDirect() {
    const waUrl = `https://wa.me/${this.companyWhatsAppNumber}?text=${encodeURIComponent('Hello Tamsal Technologies, I would like to discuss my project quote request.')}`;
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank');
    }
  }
}
