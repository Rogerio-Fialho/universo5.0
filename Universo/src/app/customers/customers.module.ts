import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ThfModule } from '@totvs/thf-ui';

import { CustomersPage } from './customers.page';
import { CustomersEditPage } from './customers-edit/customers-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThfModule,
    RouterModule.forChild([
      {
        path: '',
        component: CustomersPage,
      },
      {
        path: 'edit/:id',
        component: CustomersEditPage,
      }
    ])
  ],
  declarations: [
    CustomersPage,
    CustomersEditPage
  ]
})
export class CustomersModule {}
