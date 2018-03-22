import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from "./services/client.service"
import { ClientForm } from './forms/client.form';

@Component({
    templateUrl: 'client.component.html',
})
export class ClientComponent implements OnInit {
    clientForm : FormGroup;

    clientList : any[];

    constructor(
        private clientService : ClientService,
        private fb : FormBuilder,
    ) {
        let clientForm = new ClientForm();
        this.clientForm = clientForm.getForm();
    }

    ngOnInit() {
        this.clientService.findAll().subscribe(
            data => {
                this.clientList[''] = data;
            }
        );
    }

    addContactPerson() : FormGroup {
        return this.clientForm.get("contactPerson").value.push(
            this.fb.group({
                "name" : ["", Validators.required],
                "responsible" : "",
                "phoneNumber" : "",
                "email" : ""
            })
        )
    }

    addClient() {
        this.clientService.findAll().subscribe(
            data => {
                this.clientList.push(data[0]);
            }
        );
    }

    editClient(client : any) {
        this.clientForm.patchValue(client);
    }
}
