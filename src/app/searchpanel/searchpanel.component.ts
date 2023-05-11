import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-searchpanel',
  templateUrl: './searchpanel.component.html',
  styleUrls: ['./searchpanel.component.css']
})
export class SearchpanelComponent {
  panelOpenState = false;
  searchPda: FormGroup;

  constructor( private fb: FormBuilder){
    this.searchPda = this.fb.group({
      pdaNo: [],
      customer: [null, ],
      vesselCtrl: [null, ],
      port: [null, ],
      branch: [null, ],
      status: [],
      fromDate: [],
      toDate: [],
      createdBy: [null, ],
  });
  }
}