import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-road-certificate',
  templateUrl: './road-certificate.component.html',
  styleUrls: ['./road-certificate.component.css']
})
export class RoadCertificateComponent {
  getForm: any;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getFormValue();
  }
  getFormValue(){
    this.route.queryParams.subscribe(params => {
      const roadForm = JSON.parse(params['roadForm']);
      console.log(roadForm, "param");
      this.getForm = roadForm; // assign the value to the component property
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
