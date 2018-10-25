import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit 
{
  public engFlag : boolean = false; 

  constructor(private translate: TranslateService) 
  {
    translate.setDefaultLang('heb');
  }

  public switchLanguage(language: string) : void
  {
    this.engFlag = !this.engFlag;
    this.translate.use(language);
  }
  

  
  ngOnInit() {}
}
