
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  showBankCertificateModal = false;
  showRoadCertificateModal = false;
  bankCertificateForm!: FormGroup;
  roadCertificateForm!: FormGroup;
  bankCertificateValue:any;
  roadCertificateValue:any;
  userId: string = '';

  constructor(private formBuilder: FormBuilder,private router: Router,private authService:AuthService) { }

  ngOnInit(): void {
    this.bankCertificateForm = this.formBuilder.group({
      stampto: ['Superintending Engineer', [Validators.required]],
      stampcircle: ['Mirzapur Circle', [Validators.required]],
      stamploc: ['PWD Mirzapur', [Validators.required]],
      stampacc: ['33675955277', [Validators.required]],
    });
    this.roadCertificateForm = this.formBuilder.group({
      stampto: ['Superintending Engineer', [Validators.required]],
      stampcircle: ['Mirzapur Circle', [Validators.required]],
      stamploc: ['PWD Mirzapur', [Validators.required]],
      roadName: [`Navin mandi isthal dudhi me 02 nag nilami chabutra(09 * 40) meter ke marmmat/ucchikaran ka karan`, [Validators.required]],
      amount: ['3 Lakh', [Validators.required]],
    });
    this.authService.currentUserId.subscribe(userId => {
      this.userId = userId;
      console.log(this.userId );
    });
  }
  openBankCertificateModal() {
    this.showBankCertificateModal = true;
  }

  closeBankCertificateModal() {
    this.showBankCertificateModal = false;
  }
  onBankCertificateSubmit() {
    if (this.bankCertificateForm.valid) {
      //console.log(this.bankCertificateForm.value);
      this.bankCertificateValue = this.bankCertificateForm.value;
      this.router.navigate(['/bank-certificate'],{queryParams : {bankForm : JSON.stringify(this.bankCertificateForm.value)}});
    }
  }
  openRoadCertificateModal() {
    this.showRoadCertificateModal = true;
  }

  closeRoadCertificateModal() {
    this.showRoadCertificateModal = false;
  }
  onRoadCertificateSubmit() {
    if (this.roadCertificateForm.valid) {
      this.roadCertificateValue = this.roadCertificateForm.value;
      console.log(this.roadCertificateValue);
      this.router.navigate(['/road-certificate'],{queryParams : {roadForm : JSON.stringify(this.roadCertificateForm.value)}});
    }
  }
  logOut(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
