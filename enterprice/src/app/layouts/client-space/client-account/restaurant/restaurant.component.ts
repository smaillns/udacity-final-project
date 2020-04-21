import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../models/Restaurant';
import {RestaurantService} from '../../../../shared/service/restaurant.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import Axios from 'axios';
import {AuthService} from "../../../../shared/service/auth.service";
import {mergeMap} from "rxjs/operators";


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {


  @Input() restaurant: Restaurant;

  showEdit = false;
  fileToUpload: File = null;
  formError = false

  private resForm: FormGroup;
  private resName: FormControl;
  private  resPhone: FormControl;


  constructor(private restaurantService: RestaurantService, private formBuilder: FormBuilder, public auth: AuthService) {
    if (this.restaurant == null){
      this.resName = new FormControl('', [Validators.required]);
      this.resPhone = new FormControl('', [Validators.required]);
    } else {
      this.resName = new FormControl(this.restaurant.name?  null : '', [Validators.required]);
      this.resPhone = new FormControl(this.restaurant.phone?  null : '', [Validators.required]);
    }


    this.resForm = this.formBuilder.group({
      resName: this.resName,
      resPhone: this.resPhone
    })



  }

  ngOnInit(): void {
    // this.restaurant = {
    //   restaurantId: '123',
    //   createdAt: 'createdAt',
    //   name: 'name',
    //   phone:'0552349395',
    //   imageUrl: 'assets/images/portfolio/1.jpg'
    // }
    this.restaurantService.getRestaurant().subscribe(e => {
      this.restaurant = e.items[0]
      if (this.restaurant){
        this.resName.setValue(this.restaurant.name) ;
        this.resPhone.setValue(this.restaurant.phone);
      }
    });


  }

  handleFileInput(files: FileList) {
      console.log(this.fileToUpload)
      this.fileToUpload = files.item(0);
  }

  getSigneUrl(){

    this.restaurantService.getSignedUrl(this.restaurant.restaurantId).subscribe( e => {
      const url = e.uploadUrl;
      this.uploadFile(url);
    });
  }

  uploadFile(url: string) {


    if (!this.fileToUpload)
        return

    // this.restaurantService.uploadFile(url, this.fileToUpload).subscribe(event => {
    //   if (event instanceof HttpResponse) {
    //     console.log('File is completely loaded!');
    //   }
    // }, (err) => {
    //   console.log('Upload Error:', err);
    // }, () => {
    //   console.log('Upload done');
    // });
    // this.restaurantService.test(url, this.fileToUpload);

     Axios.put(url, this.fileToUpload).then(()=>{
      alert('La photo a été téléchargée');
      this.showEdit = false;
      this.ngOnInit();
    })

  }

  onDelete(){
    this.restaurantService.deleteRestaurant(this.restaurant.restaurantId).subscribe( e => {this.restaurant = null})
  }

  onEdit(){

    const restaurant: Restaurant = {
      restaurantId: this.restaurant?.restaurantId,
      createdAt: this.restaurant.createdAt,
      name: this.resForm.get('resName').value,
      phone: this.resForm.get('resPhone').value
    }
    this.restaurantService.updateRestaurant(restaurant).subscribe(rep =>{
      this.ngOnInit();
    }, err => {
      this.formError = true
    })

    if(this.fileToUpload)
      this.getSigneUrl();
    else {
      this.showEdit = false;
      this.ngOnInit();
    }

  }

  onSave(){
    if (this.restaurant == null)
      this.onCreate()
    else
      this.onEdit()
  }

  onCreate(){
    const restaurant: Restaurant = {
      restaurantId: 'null',
      createdAt: 'null',
      name: this.resForm.get('resName').value,
      phone: this.resForm.get('resPhone').value
    }
    this.restaurantService.createRestaurant(restaurant).subscribe(rep =>{
      this.restaurant = rep.item
      this.showEdit = false;
    }, err => {
      this.formError = true
    })

  }

  onCancel(){
    this.showEdit = false;
  }



}
