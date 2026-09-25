import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface QuoteModalState {
  isOpen: boolean;
  projectType?: string;
  projectName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuoteModalService {
  private stateSubject = new BehaviorSubject<QuoteModalState>({ isOpen: false });
  state$ = this.stateSubject.asObservable();

  open(projectType?: string, projectName?: string) {
    this.stateSubject.next({
      isOpen: true,
      projectType: projectType || 'Custom Website Development',
      projectName: projectName || ''
    });
    // Prevent background scrolling when modal is open
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  close() {
    this.stateSubject.next({ isOpen: false });
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
}
