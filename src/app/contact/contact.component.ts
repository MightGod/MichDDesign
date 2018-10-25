import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit 
{
  constructor(private translate: TranslateService) 
  {
    translate.setDefaultLang('heb');
  }

  public switchLanguage(language: string) : void
  {
      this.translate.use(language);
  }

  ngOnInit() {
  }

}
