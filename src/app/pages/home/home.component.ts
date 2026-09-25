import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { QuoteModalService } from '../../services/quote-modal.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  companyName = 'TAMSAL TECHNOLOGIES';
  email = 'tamsaltechnologies@gmail.com';
  phone = '+92 334 8128646';

  // Animated Counters on About Lab Image
  projectCount = 0;
  experienceCount = 0;
  reliabilityCount = 0;
  private isAnimating = false;
  private observer?: IntersectionObserver;
  private animationFrameId?: number;

  @ViewChild('aboutLabFrame') aboutLabFrame?: ElementRef;

  constructor(
    public quoteService: QuoteModalService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngAfterViewInit() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.isAnimating) {
              this.startCounterAnimation();
            }
          });
        },
        { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
      );

      setTimeout(() => {
        if (this.aboutLabFrame?.nativeElement) {
          this.observer?.observe(this.aboutLabFrame.nativeElement);
        } else {
          const el = document.getElementById('about');
          if (el) this.observer?.observe(el);
        }
      }, 100);
    } else {
      this.projectCount = 10;
      this.experienceCount = 5;
      this.reliabilityCount = 100;
      this.cdr.detectChanges();
    }
  }

  startCounterAnimation() {
    this.isAnimating = true;
    this.projectCount = 0;
    this.experienceCount = 0;
    this.reliabilityCount = 0;
    this.cdr.detectChanges();

    const duration = 2000; // 2 seconds visible counting
    const startTime = performance.now();

    this.ngZone.runOutsideAngular(() => {
      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic curve for natural smooth slowdown at the end
        const easeOut = 1 - Math.pow(1 - progress, 3);

        this.projectCount = Math.min(10, Math.floor(easeOut * 10.99));
        this.experienceCount = Math.min(5, Math.floor(easeOut * 5.99));
        this.reliabilityCount = Math.min(100, Math.floor(easeOut * 100));

        this.ngZone.run(() => {
          this.cdr.detectChanges();
        });

        if (progress < 1) {
          this.animationFrameId = requestAnimationFrame(step);
        } else {
          this.projectCount = 10;
          this.experienceCount = 5;
          this.reliabilityCount = 100;
          this.isAnimating = false;
          this.ngZone.run(() => {
            this.cdr.detectChanges();
          });
        }
      };

      this.animationFrameId = requestAnimationFrame(step);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  openQuote(projectType?: string, projectName?: string) {
    this.quoteService.open(projectType, projectName);
  }

  // Sliding Patti (Marquee) Keywords
  marqueeItems = [
    'Software Engineering',
    'AI Integration & ML Models',
    'Expert Technical Consultancy',
    'Angular 18 Specialist',
    'PHP & Laravel Development',
    'Multi-Vendor E-Commerce Solutions',
    'Secure Enterprise Databases',
    'Enterprise Cloud Scalability',
    'Predictive Data Analytics',
    'Automated DevOps Pipelines',
    'Next-Gen Web Architecture',
    'Robust Cyber Security Standards',
    'Trading & Earning Platform Development'
  ];

  // Projects Data List
  projects = [
    {
      title: 'NeuroPrompt Video Engine',
      desc: 'Futuristic AI engine converting voice prompts and text into real-time cinematic video sequences using advanced diffusion models.',
      tags: ['Generative AI', 'Python', 'WebSockets'],
      icon: '🧠',
      image: 'projects/neuroprompt.svg',
      link: '#contact',
      isExternal: false,
      buttonText: 'Get a Quote'
    },
    {
      title: 'AI Commerce Planner',
      desc: 'Next-gen full-stack planner automating social media management and business strategy.',
      tags: ['AI/ML', 'Full-Stack'],
      icon: '📈',
      image: 'projects/commerce-planner.svg',
      link: '#contact',
      isExternal: false,
      buttonText: 'Get a Quote'
    },
    {
      title: 'Smart Grow Chain',
      desc: 'Paid-to-click (PTC) earning platform where users complete tasks and view ads to earn rewards, with user dashboard and payout tracking.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Python'],
      icon: '💰',
      image: 'projects/smart-grow.svg',
      link: 'https://www.smart-grow-chain.store',
      isExternal: true,
      buttonText: 'View Live'
    },
    {
      title: 'Tamsal Store',
      desc: 'Multi-vendor e-commerce platform enabling multiple sellers to list and manage products, with unified checkout and order management.',
      tags: ['PHP', 'Laravel', 'MySQL', 'Multi-Vendor'],
      icon: '🛒',
      image: 'projects/tamsal-store.svg',
      link: 'https://tamsal.store',
      isExternal: true,
      buttonText: 'View Live'
    },
    {
      title: 'Elite Future Zone',
      desc: 'Earning and trading platform allowing users to invest, trade, and track earnings through a secure dashboard system.',
      tags: ['PHP', 'Laravel', 'MySQL'],
      icon: '📈',
      image: 'projects/elite-future.svg',
      link: 'https://elitefuturezone.site',
      isExternal: true,
      buttonText: 'View Live'
    },
    {
      title: 'Namart Zone',
      desc: 'Full-featured e-commerce store with product catalog, cart, checkout, and order tracking for online retail.',
      tags: ['PHP', 'Laravel', 'MySQL'],
      icon: '🛍️',
      image: 'projects/namart-zone.svg',
      link: 'https://www.namartzone.store',
      isExternal: true,
      buttonText: 'View Live'
    }
  ];

  // Team Profiles Data List
  team = [
    { name: 'Murad Mahmood', role: 'CEO / AI Engineer', desc: 'Visionary leadership driving technical innovation and strategic direction across all projects.', initial: 'M' },
    { name: 'Ibtisam Ali', role: 'Technical Advisor / AI Engineer', desc: 'Expert in AI systems, scalable architecture, and technical strategy, guiding the development of intelligent, high-performance solutions.', initial: 'I' },
    { name: 'Saad Munir', role: 'Senior Web Developer', desc: 'Professional web developer crafting scalable, high-performance web applications.', initial: 'S' }
  ];

  // Core Services Data List (Roadmap & Business Offerings)
  services = [
    {
      title: 'Business Website Engineering',
      desc: 'High-conversion websites with WhatsApp ordering, Google Maps, contact forms, and admin panels for restaurants, pharmacies, clinics, and retail stores.',
      icon: '🌐',
      image: 'services/website-dev.webp',
      badge: '3–7 Days Delivery',
      tags: ['Restaurants', 'Pharmacies', 'Retail', 'Clinics']
    },
    {
      title: 'E-Commerce & Online Ordering',
      desc: 'Complete digital storefronts with product catalogs, shopping cart, WhatsApp checkout integration, order management, and secure admin dashboards.',
      icon: '🛒',
      image: 'services/mobile-apps.webp',
      badge: 'Online Storefronts',
      tags: ['Multi-Vendor', 'Cart & Checkout', 'Order Tracking']
    },
    {
      title: 'Point of Sale (POS) Software',
      desc: 'Fast barcode billing, real-time inventory management, customer/supplier ledgers, expense tracking, and automated daily sales reports.',
      icon: '🧾',
      image: 'services/pos-system.webp',
      badge: 'Retail & Pharmacy POS',
      tags: ['Barcode Billing', 'Stock Control', 'Sales Reports']
    },
    {
      title: 'Custom Enterprise ERP',
      desc: 'End-to-end business management platform integrating sales, purchases, inventory, accounts, HR, payroll, and customizable enterprise reporting.',
      icon: '🏢',
      image: 'services/erp-suite.webp',
      badge: 'Scalable Architecture',
      tags: ['Accounts', 'HR & Payroll', 'Inventory', 'Analytics']
    },
    {
      title: 'Continuous Software Maintenance',
      desc: 'Reliable monthly technical support, high-speed hosting management, security updates, daily database backups, and on-demand feature upgrades.',
      icon: '🛡️',
      image: 'services/cloud-devops.webp',
      badge: 'Monthly Retainers',
      tags: ['24/7 Monitoring', 'Security Patches', 'Cloud Hosting']
    },
    {
      title: 'Custom AI & API Engineering',
      desc: 'Tailored full-stack business logic, RESTful API engineering, machine learning automation models, and custom client communication bots.',
      icon: '🤖',
      image: 'services/ai-automation.webp',
      badge: 'High-Performance Tech',
      tags: ['AI/ML Automation', 'Node.js & .NET', 'SQL Architecture']
    }
  ];
}
