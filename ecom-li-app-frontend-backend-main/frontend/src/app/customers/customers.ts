import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-customers',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './customers.html',
    styles: []
})
export class Customers implements OnInit {
    customers: any[] = [];
    debugData: any;
    errorMessage: string = '';
    isLoading: boolean = false;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.loadCustomers();
    }

    loadCustomers(): void {
        this.isLoading = true;
        this.errorMessage = '';
        this.customers = [];

        this.http.get<any>('/customer-service/api/customers').subscribe({
            next: (data) => {
                this.customers = data._embedded ? data._embedded.customers : [];
                this.debugData = data;
                this.isLoading = false;
            },
            error: (err) => {
                console.error(err);
                this.errorMessage = `Error: ${err.status} ${err.statusText} - ${err.message}. The backend might be starting up.`;
                this.debugData = err;
                this.isLoading = false;
            }
        });
    }
}
