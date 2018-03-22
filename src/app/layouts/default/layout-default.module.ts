import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutDefaultComponent } from "./layout-default.component";
import { CountryComponent } from './../../master/country/country-list/country-list.component';
import { ClientListComponent } from './../../application/client/client-list/client-list.component';


const countryRoutes : Routes = [
    {
        path: 'client',
        component: CountryComponent
    },
    
]

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forRoot(countryRoutes),
      NgbModule.forRoot()
  ],
  declarations: [
      LayoutDefaultComponent,
      ClientListComponent
  ],
  providers: [],
  exports : [
      LayoutDefaultComponent,
  ]
})
export class LayoutDefaultModule { }
