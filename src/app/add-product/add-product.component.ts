import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private api:ApiService) {}

    productCode = ""
    name = ""
    manufacturingDate = ""
    expiryDate = ""
    brand = ""
    price = ""
    seller = ""
    distributor = ""

    readValues =  () => {

      let product:any = {
        "productCode":this.productCode,
        "name":this.name,
        "manufacturingDate":this.manufacturingDate,
        "expiryDate":this.expiryDate,
        "brand":this.brand,
        "prices":this.price,
        "seller":this.seller,
        "distributor":this.distributor
      }
      console.log(product);
      

      this.api.addProduct(product).subscribe(
        (response:any) => {
          console.log(response)
          if(response.status == "success"){
            alert("added successfully")
            this.productCode = ""
            this.name = ""
            this.manufacturingDate = ""
            this.expiryDate = ""
            this.brand = ""
            this.price = ""
            this.seller = ""
            this.distributor = ""
          } else {
            alert("something went wrong")
          }
        
        }
      )
    }
    
}
