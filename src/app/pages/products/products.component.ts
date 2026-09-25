import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { QuoteModalService } from '../../services/quote-modal.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  email = 'tamsaltechnologies@gmail.com';
  phone = '+92 334 8128646';
  whatsapp = '923348128646';

  constructor(public quoteService: QuoteModalService) {}

  openQuote(productTitle?: string) {
    this.quoteService.open(productTitle || 'Business Website', productTitle);
  }

  // Products & Pricing Data List
  products = [
    {
      title: 'Business Website',
      icon: '🌐',
      price: 'Rs. 20,000 – 60,000+',
      timeline: '3–7 days',
      desc: 'Professional business websites with WhatsApp integration, Google Maps, contact forms, and optional online ordering.',
      popular: false,
      tier: 'Starter to Pro',
      features: [
        'Home, About, Services/Products, Gallery, Contact',
        'WhatsApp Button & Google Maps Integration',
        'Mobile Responsive Design',
        'Admin Panel (Professional tier)',
        'E-commerce & Online Ordering (available)'
      ]
    },
    {
      title: 'Point of Sale (POS)',
      icon: '🧾',
      price: 'Rs. 50,000 – 100,000',
      timeline: '1–3 weeks',
      desc: 'Complete billing and inventory management system for retail, restaurants, and pharmacies.',
      popular: true,
      tier: 'Most Popular',
      features: [
        'Billing & Barcode Scanning',
        'Inventory & Purchase Management',
        'Customer & Supplier Records',
        'Expense & Sales Reports',
        'Restaurant & Pharmacy Modules'
      ]
    },
    {
      title: 'Enterprise ERP',
      icon: '🏢',
      price: 'Rs. 100,000 – 150,000+',
      timeline: '3–6 weeks',
      desc: 'Complete business management platform covering sales, inventory, accounts, HR, and reporting for growing enterprises.',
      popular: false,
      tier: 'Enterprise Suite',
      features: [
        'Sales, Purchases & Inventory',
        'Accounts & Financial Reports',
        'Employee & HR Management',
        'Customer & Supplier Management',
        'Fully Customizable Architecture'
      ]
    }
  ];

  roadmapSteps = [
    {
      step: '01',
      title: 'Business Websites',
      subtitle: 'Fast Turnaround & Online Presence',
      desc: 'Quick launch websites enabling your customers to find your services, view menus/products, and message directly via WhatsApp.'
    },
    {
      step: '02',
      title: 'Retail & Restaurant POS',
      subtitle: 'Automated Operations & Billing',
      desc: 'Streamline shop floor and counter checkout with barcode scanning, automated inventory deduction, and daily profit/loss reporting.'
    },
    {
      step: '03',
      title: 'Enterprise ERP',
      subtitle: 'Unified Operational Hub',
      desc: 'Connect your accounts, warehouse inventory, HR payroll, and multi-branch operations into one high-performance platform.'
    }
  ];
}
