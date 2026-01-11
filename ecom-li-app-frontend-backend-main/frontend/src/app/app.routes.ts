import { Routes } from '@angular/router';
import { Customers } from './customers/customers';
import { Products } from './products/products';
import { Bills } from './bills/bills';

export const routes: Routes = [
    { path: 'customers', component: Customers },
    { path: 'products', component: Products },
    { path: 'bills', component: Bills },
    { path: '', redirectTo: '/customers', pathMatch: 'full' }
];
