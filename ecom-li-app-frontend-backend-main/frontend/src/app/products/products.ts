import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-products',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './products.html',
    styles: []
})
export class Products implements OnInit {
    products: any[] = [];
    errorMessage: string = '';
    isLoading: boolean = false;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.loadProducts();
    }

    loadProducts(): void {
        this.isLoading = true;
        this.errorMessage = '';
        this.products = [];

        this.http.get<any>('/inventory-service/api/products').subscribe({
            next: (data) => {
                this.products = data._embedded ? data._embedded.products : [];
                this.isLoading = false;
            },
            error: (err) => {
                console.error(err);
                this.errorMessage = `Error loading products: ${err.message}`;
                this.isLoading = false;
            }
        });
    }
}
