import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-bills',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './bills.html',
    styles: []
})
export class Bills implements OnInit {
    bills: any[] = [];
    searchId: string = '';
    foundBill: any = null;
    error: string = '';
    isLoading: boolean = false;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.loadBills();
    }

    loadBills(): void {
        this.isLoading = true;
        this.http.get<any>('/billing-service/api/bills').subscribe({
            next: (data) => {
                this.bills = data._embedded ? data._embedded.bills : [];
                this.isLoading = false;
            },
            error: (err) => {
                console.log('Listing bills failed, might need to search by ID');
                this.isLoading = false;
            }
        });
    }

    searchBill(id: string) {
        this.error = '';
        this.foundBill = null;
        if (!id) return;

        this.http.get<any>(`/billing-service/bills/${id}`).subscribe({
            next: (data) => {
                this.foundBill = data;
            },
            error: (err) => {
                this.error = 'Bill not found or error fetching bill';
                console.error(err);
            }
        });
    }
}
