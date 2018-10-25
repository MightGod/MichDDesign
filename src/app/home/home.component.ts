import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { ImageService } from '../image-detail/shared/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{
  @Input()
  public filterBy?: string = 'all';

  public menu: any[] = [];

  constructor(private translate: TranslateService, private imageService: ImageService) 
  {
    this.menu = this.imageService.getMenu();
    translate.setDefaultLang('heb');
  }

  ngOnInit() 
  {
  }
}
