import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { QuoteModalService } from '../../services/quote-modal.service';

export interface ProductPlan {
  title: string;
  icon: string;
  pricePkr: string;
  priceUsd: string;
  timeline: string;
  desc: string;
  popular: boolean;
  tier: string;
  features: string[];
}

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

  // Currency Toggle state
  currency: 'PKR' | 'USD' = 'PKR';

  constructor(public quoteService: QuoteModalService) {}

  setCurrency(curr: 'PKR' | 'USD') {
    this.currency = curr;
  }

  openQuote(productTitle?: string) {
    this.quoteService.open(productTitle || 'Business Website', productTitle);
  }

  // 5 Complete Products & Pricing Cards Data List
  products: ProductPlan[] = [
    {
      title: 'Business Website',
      icon: '🌐',
      pricePkr: 'Rs. 20,000 – 60,000+',
      priceUsd: '$70 – $250+',
      timeline: '1–3 weeks',
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
      pricePkr: 'Rs. 50,000 – 100,000',
      priceUsd: '$180 – $360',
      timeline: '3–6 weeks',
      desc: 'Complete billing and inventory management system for retail, restaurants, and pharmacies.',
      popular: false,
      tier: 'Retail & Pharmacy',
      features: [
        'Billing & Barcode Scanning',
        'Inventory & Purchase Management',
        'Customer & Supplier Records',
        'Expense & Sales Reports',
        'Restaurant & Pharmacy Modules'
      ]
    },
    {
      title: 'Custom Shopify Store',
      icon: '🛍️',
      pricePkr: 'Rs. 20,000 – 40,000',
      priceUsd: '$70 – $150',
      timeline: '1–2 weeks',
      desc: 'Fully customized Shopify store setup with theme design, product listings, payment gateway, and store optimization — ready to start selling fast.',
      popular: false,
      tier: 'E-Commerce Ready',
      features: [
        'Custom Shopify Theme Setup & Branding',
        'Product Upload & Category Structuring',
        'Payment Gateway & Shipping Configuration',
        'Mobile-Optimized Storefront',
        'Basic SEO & Store Speed Optimization'
      ]
    },
    {
      title: 'Paid-to-Click (PTC) Platform',
      icon: '💰',
      pricePkr: 'Rs. 20,000 – 50,000',
      priceUsd: '$70 – $180',
      timeline: '3–5 weeks',
      desc: 'Earning platform where users complete tasks, view ads, or click links to earn rewards — with dashboard, referral system, and payout tracking.',
      popular: false,
      tier: 'New Launch',
      features: [
        'User Dashboard & Task/Ad System',
        'Wallet, Earnings & Payout Tracking',
        'Referral & Commission System',
        'Admin Panel for User & Payment Management',
        'Secure Login & Fraud Prevention Basics'
      ]
    },
    {
      title: 'Enterprise ERP',
      icon: '🏢',
      pricePkr: 'Rs. 100,000 – 150,000+',
      priceUsd: '$300 – $550+',
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
