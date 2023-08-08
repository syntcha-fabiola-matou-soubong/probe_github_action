// data.service.ts
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  getUserCount() {
    throw new Error('Method not implemented.');
  }
  getOrderCount() {
    throw new Error('Method not implemented.');
  }
  getRevenue() {
    throw new Error('Method not implemented.');
  }
  getData(): string {
    return 'Données factices pour les tests E2E';
  }
}
