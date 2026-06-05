import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isScrolled = false;

  // ==========================================
  // CODE KO CHERE BINA YAHAN SE TEXT CHANGE KAREIN
  // ==========================================
  
  companyName = 'TAMSAL TECHNOLOGIES';
  email = 'tamsal.technologies@gmail.com';
  phone = '+92 334 8128646';

  // Sliding Patti (Marquee) Keywords
  marqueeItems = [
    'Software Engineering', 'AI Integration & ML Models', 'Expert Technical Consultancy',
    'Angular 18 Specialist', 'Secure Enterprise Databases', 'Enterprise Cloud Scalability',
    'Predictive Data Analytics', 'Automated DevOps Pipelines', 'Next-Gen Web Architecture',
    'Robust Cyber Security Standards'
  ];

  // Projects Data List
  projects = [
    {
      title: 'NeuroPrompt Video Engine',
      desc: 'Futuristic AI engine converting voice prompts and text into real-time cinematic video sequences using advanced diffusion models.',
      tags: ['Generative AI', 'Python', 'WebSockets'],
      icon: '🧠'
    },
    {
      title: 'Contact Management',
      desc: 'Enterprise CRM system engineered for scalable client interaction and real-time data sync.',
      tags: ['Angular', 'Node.js', 'SQL Server'],
      icon: '📊'
    },
    {
      title: 'Academic Manager',
      desc: 'Smart performance analytics dashboard with complex calculation logic and data visualization.',
      tags: ['Backend Logic', 'Angular 18'],
      icon: '🎓'
    },
    {
      title: 'AI Commerce Planner',
      desc: 'Next-gen full-stack planner automating social media management and business strategy.',
      tags: ['AI/ML', 'Full-Stack'],
      icon: '📈'
    },
    {
      title: 'Police Management System',
      desc: 'Secure database system for FIR tracking, records management, and role-based access control.',
      tags: ['Database', 'C# .NET Core'],
      icon: '👮'
    },
    {
      title: 'Task Reward System',
      desc: 'Gamified full-stack productivity engine driven by smart contract logic and real-time user milestones.',
      tags: ['React Vite', 'Full-Stack'],
      icon: '🏆'
    }
  ];

  // Team Profiles Data List
  team = [
    { name: 'Murad Mahmood', role: 'CEO / AI Engineer', desc: 'Visionary leadership driving technical innovation and strategic direction across all projects.', initial: 'M' },
    { name: 'Rashid Ahmed', role: 'Senior Software Engineer / Technical Advisor', desc: 'Expert in scalable architecture, enterprise database management, and professional consultancy.', initial: 'R' },
    { name: 'Saad Munir', role: 'Senior Web Developer', desc: 'Professional web developer crafting scalable, high-performance web applications.', initial: 'S' }
  ];

  // Core Services Data List
  services = [
    { title: 'Software Development', desc: 'Custom full-stack solutions with Angular & .NET Core.', icon: '💻' },
    { title: 'Database Management', desc: 'Secure and scalable SQL Server architecture.', icon: '🗄️' },
    { title: 'AI Solutions', desc: 'Smart automation and machine learning models.', icon: '🤖' },
    { title: 'Full-Stack Web API Engineering', desc: 'Robust and clean RESTful API architectures using .NET Core and Node.js.', icon: '🔌' },
    { title: 'Cloud Architecture & DevOps', desc: 'Secure deployment, scaling, and cloud migration services.', icon: '☁️' },
    { title: 'Intelligent Chatbots & NLP', desc: 'AI-powered custom agents for automated client communication.', icon: '💬' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}