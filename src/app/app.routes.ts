import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { GuaranteeComponent } from './pages/guarantee/guarantee.component';
import { ReadyKitComponent } from './pages/ready-kit/ready-kit.component';
import { BuildKitComponent } from './pages/build-kit/build-kit.component';
import { CreateDesignComponent } from './pages/create-design/create-design.component';
import { CompanyKitComponent } from './pages/company-kit/company-kit.component';
import { DessertCatalogComponent } from './pages/dessert-catalog/dessert-catalog.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'guarantee', component: GuaranteeComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'delivery', component: DeliveryComponent},
    {path: 'readyKit', component: ReadyKitComponent },
    {path: 'buildKit', component: BuildKitComponent},
    {path: 'createDesign', component: CreateDesignComponent},
    {path: 'companyKit', component: CompanyKitComponent},
    {path: 'dessertCatalog', component: DessertCatalogComponent}
   
];
