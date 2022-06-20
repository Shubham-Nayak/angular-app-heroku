import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray , FormGroupDirective} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
declare var $: any; 

@Component({
  selector: 'app-add-certificate',
  templateUrl: './add-certificate.component.html',
  styleUrls: ['./add-certificate.component.css']
})
export class AddCertificateComponent implements OnInit {
  submitted = false;
  addcertificateForm: FormGroup;
  private _alert = new Subject<string>();
  msg: string;
  certificate_uuid:string;
  public msgClass: String = '';
  public disableStatus:boolean = false;
  template:string;
  defaultTemplates=[];

  public editorData = '';

  public start:String='{';
  public end:String='}';

  config:any=[];
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
  ) {
    this.config = {allowedContent: true};
    this.config.coreStyles_bold = {
      element: 'font',
      attributes: { 'style': 'font-weight: bold;' },
      overrides: 'strong'
  };
   }

   postData={
    "code": 200,
    "status": "SUCCESS",
    "message": "Fetched Successfully",
    "data": {
        "templateDetails": {
            "template_list": [
                {
                    "template_uuid": "16046466565fa4f7009573b073343674",
                    "title": "Default Template",
                    "template": "<table style=\"border: 15px solid #0072c6; border-right: 15px solid #0894fb;  border-left: 15px solid #0894fb;width: 100%; font-family: arial; color: #383737; margin-bottom: 30px;\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td align=\"center\"></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td align=\"center\">\n\t\t\t<h1 style=\"margin-top: 30px; font-family: cursive,'Satisfy'; font-size: 40px;  letter-spacing: 1px; color: #0060a9;\">Certificate Of Completion</h1>\n\n\t\t\t<h2 style=\"text-align: center; float: inherit; color: #333;font-size: 24px; padding: 15px 0;\">This Certificate is awarded to</h2>\n\n\t\t\t<h1 style=\"display: inline-block;width: 80%;padding: 5px 25px;margin-bottom: 0px;padding-bottom: 0px;font-family: cursive,'Satisfy';font-size: 40px;border-bottom: 1px dashed #cecece;color:#27ae60;\">{$name}</h1>\n\n\t\t\t<h3 style=\"font-weight: 100;color: #383737;\">For his/her completion of HSE Awareness session</h3>\n\n\t\t\t<h3>Awarded on 1 March 2021</h3>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td align=\"center\"><img alt=\"sign\" src=\"https://camo.githubusercontent.com/805e05b94844e39d7edd518f492c8599c71835b3/687474703a2f2f692e696d6775722e636f6d2f646e5873344e442e706e67\" style=\"width: 200px;\" />\n\t\t\t<h3>Person Name</h3>\n\n\t\t\t<h3>Learning Lead</h3>\n\n\t\t\t<h3>Department Name</h3>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>\n",
                    "created_date": null,
                    "updated_date": null
                }
            ]
        }
    }
}
get f() { return this.addcertificateForm.controls;  }

  ngOnInit() {
    this.addcertificateForm = this.formBuilder.group({
      title: ['', Validators.required],
      template: ['', Validators.required]
    });

    // if (this.postData.code == 200) {
    //   this.defaultTemplates.push(this.postData.data.templateDetails.template_list);
    //   this.template =this.postData.data.templateDetails.template_list[0].template;

    // }
    this.getCertificate();
   

    console.log(this.addcertificateForm,'defaulttemplates')

  }
  getCertificate(){
    if (this.postData.code == 200) {
      this.defaultTemplates.push(this.postData.data.templateDetails.template_list);
      this.template =this.postData.data.templateDetails.template_list[0].template;
      this.addcertificateForm.patchValue({
        template:this.template,
      }); 

    }
  }

  changeTemplate(event){
    console.log(event,'ele')
    this.template=event;
    console.log(this.template,'this.template')

  }
  
  onSubmit(value,formDirective:FormGroupDirective) {
  



    this.submitted = true;
    if (this.addcertificateForm.invalid) {
      return;
    }
    this.disableStatus = true;


  }

  
}
