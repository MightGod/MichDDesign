import { Component, OnInit } from '@angular/core';
import { ImageService } from './shared/image.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit 
{
  public images: any[];
  public category: string = this.route.snapshot.params['category'];
  public youtube: SafeResourceUrl;
  public next: string;
  public previous: string;

  constructor(private imageService: ImageService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private router: Router) 
              { 
                this.youtube = sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/-BRe75JO3v0");
              }

  ngOnInit()
  {
    this.changePicture(this.category);
  }

  public changePicture(category : string)
  {
    if (category != '')
    {
      this.router.navigateByUrl(`/category/${category}`);
      this.images = this.imageService.getImage(category);
      this.category = category;
      this.next = this.imageService.getNextCategory(category);
      this.previous = this.imageService.getPreviousCategory(category);
    }
  }
}
