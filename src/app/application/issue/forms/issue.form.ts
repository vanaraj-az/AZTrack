import { Injectable } from '@angular/core';
import { FormBuilder, Validators }  from '@angular/forms';

@Injectable()
export class IssueForm {
    private fb : FormBuilder;

    constructor() {
        this.fb = new FormBuilder();
    }

    getForm() {
        return this.fb.group({
            "issueType" : ["", Validators.required],
            "title"  : ["",Validators.required],
            "description" : ["",Validators.required],
            "originalEstimation" : ["", Validators.required],
            "attachment" : ["", Validators.required]
        });
    }
}


