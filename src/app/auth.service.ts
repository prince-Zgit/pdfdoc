import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userIdSource = new BehaviorSubject<string>('');
  currentUserId = this.userIdSource.asObservable();

  constructor() { }

  // Simulate authentication logic
  isAuthenticated(): boolean {
    // Check if the user is logged in
    // You can implement your authentication logic here
    return !!localStorage.getItem('currentUser');
  }

  // Simulate login
  login(username: string, password: string): boolean {
    if (username === 'papa' && password === 'shalu') {
      localStorage.setItem('currentUser', JSON.stringify({ username }));
      return true;
    } else {
      return false;
    }
  }

  // Simulate logout
  logout(): void {
    localStorage.removeItem('currentUser');
  }
  changeUserId(userId: string): void {
    this.userIdSource.next(userId);
  }
}
