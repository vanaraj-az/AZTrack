import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgModel,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CountryForm } from './../forms/country.form'
import { CountryService } from './../services/country.service';

@Component({
    selector:'country',
    templateUrl: 'country-list.component.html',
    styleUrls:['country-list.component.css']
})


export class CountryComponent implements OnInit {


    countryForm:FormGroup;
    countryList : any = [];
    url = '';
    index = 0;
    i : any;
    closeResult: string;
    greeting = {};
    name = 'World';


    constructor(private countryService : CountryService, private modalService: NgbModal){

        let country = new CountryForm();
        this.countryForm = country.getForm();
    }


    open(content) {
        this.modalService.open(content).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      }
    
      private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return  `with: ${reason}`;
        }
      }
    

    ngOnInit(){

        this.countryService.getCountry().subscribe(
            data =>{
                this.countryList=data;
                 }
            );
         }

         
    //push clientForm value into countryList
    addCountry(){

        if(this.index==0){
            this.countryList.push(this.countryForm.controls.country.value);
            console.log(this.countryList); 
            alert(this.countryForm.controls.country.value + "  added successfully")
            this.countryForm.controls.country.reset();
        }
        else{
            this.countryList[this.i] = this.countryForm.controls.country.value;
            this.countryForm.controls.country.reset();
            console.log(this.countryList);
        }
    }


    editCountry(i,content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
        this.index = 1;
        this.i = i;
        console.log(i);
        this.countryForm.controls.country.patchValue(this.countryList[i]);
      }


    //delete country from list
    deleteCountry(i: any){
       
        this.countryList.splice(i,1);
    }


    //insert countryForm into httService
    submit(url){

        // this.clientService.insert(url,this.countryList).subscribe(
        //     data =>{
        //         this.countryList=data;
                console.log(this.countryList);
        //     }
        // );
    }


}