import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bank-certificate',
  templateUrl: './bank-certificate.component.html',
  styleUrls: ['./bank-certificate.component.css']
})
export class BankCertificateComponent implements OnInit {
  getForm: any;

constructor(private route: ActivatedRoute) { }
ngOnInit(): void {
  this.getFormValue();
}
getFormValue(){
  this.route.queryParams.subscribe(params => {
    const bankForm = JSON.parse(params['bankForm']);
    console.log(bankForm, "param");
    this.getForm = bankForm; // assign the value to the component property
  });
}

print(){
  window.print();
}

back() {
  window.history.back();
}

close(){
  window.close();
}
}
