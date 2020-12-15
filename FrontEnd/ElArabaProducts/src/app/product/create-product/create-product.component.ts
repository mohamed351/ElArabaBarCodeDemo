import { Component, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  form = new FormGroup({
    productName:new FormControl('',[Validators.required]),
    productSerails:new FormArray([])
  });

  get ProductName(){
    return this.form.get("productName");
  }
  get ProductSerials(){
    return this.form.get("productSerails") as FormArray;
  }
  constructor() { }

  ngOnInit(): void {
  }
  OnSubmitData(){
    console.log(this.form.valid);
    console.log(this.form.value);
  }
  AddBarCode(data:HTMLInputElement){
    if(data.validity.valid){
  
    this.ProductSerials.push(new FormControl({value:data.value,disabled:true},[Validators.required]))
    data.value ="";
    }
  }
  DeleteElement(item){
  
      this.ProductSerials.removeAt(item);
        
  }

}
