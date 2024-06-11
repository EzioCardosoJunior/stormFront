
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSTRMService {

  private storageKey = 'formData';

  constructor() { }

  saveData(data: any): void {
    let existingData = this.getData() || [];
    
    const newData = { 
      ...data,
      id: existingData.length
    };
    
    existingData.push(newData);
    localStorage.setItem(this.storageKey, JSON.stringify(existingData));
  }

  getData(): any[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  clearData(): void {
    localStorage.removeItem(this.storageKey);
  }
}
