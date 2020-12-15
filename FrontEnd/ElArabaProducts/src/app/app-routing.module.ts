import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product/product.component';
import {SerialsComponent} from './serials/serials.component';
import {CreateProductComponent} from './product/create-product/create-product.component';
import {EditProductComponent} from './product/edit-product/edit-product.component';

const routes: Routes = [{path:"",component:ProductComponent},
{path:"serial", component:SerialsComponent }, 
{path:"product/Create",component:CreateProductComponent},
{path:"product/Edit/:id",component:EditProductComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
