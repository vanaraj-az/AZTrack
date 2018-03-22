import { Component, ViewChild  } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormArray, FormControl } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { ClientForm } from '../forms/client.form';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
    selector:'client-list',
    templateUrl: 'client-list.component.html',
    styleUrls:['client-list.component.css']
})
export class ClientListComponent  {

    clientForm:FormGroup;
    contactList : any = [];
    controls : any;
    clientData:any;
    countryData:any;
    model: any;

    @ViewChild('instance') instance: NgbTypeahead;
    focus$ = new Subject<string>();
    click$ = new Subject<string>();

    search = (text$: Observable<string>) =>
        text$
        .debounceTime(200).distinctUntilChanged()
        .merge(this.focus$)
        .merge(this.click$.filter(() => !this.instance.isPopupOpen()))
        .map(term => (term === '' ? this.countryData : this.countryData.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)));

    
        constructor(private clientService : ClientService,private fb : FormBuilder){

            let client = new ClientForm();
            this.clientForm = client.getForm();
        }


        addContactPerson() : void {
            this.controls = this.clientForm.get("contactPerson") as FormArray;
            this.controls.push(
                this.fb.group({
                    "name" : ["", [Validators.required, Validators.minLength(5)]],
                    "responsible" : ["",Validators.required],
                    "phoneNumber" : ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]+')]],
                    "email" : ["", [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]
                })
            )
        }
        
    
        deleteContact(i : number) {
           
            this.controls = <FormArray>this.clientForm.get('contactPerson');
            this.controls.removeAt(i);
        }
        
    
        ngOnInit(){
            
         this.clientService.getCountry().subscribe(
            data =>{
                this.countryData=data;
                }
           );

        } 

        submitClient(){
                
            //  this.clientService.insert(this.clientForm.value).subscribe(
            // data =>{
            //      this.clientData=data;
                    console.log(this.clientForm.value);
            //      this.clientForm.reset();
    //      }
    //  );
}

    // editClient(id) {

    //     this.clientService.update(id).subscribe(
    //         data =>{

    //             this.clientData=data;
    //             console.log(data);
    //         }
    //     );
    // }   
        
}




