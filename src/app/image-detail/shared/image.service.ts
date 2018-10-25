import { Injectable } from '@angular/core'

@Injectable()
export class ImageService
{
    public getImage(category : string) : any[]
    {
        return IMAGES.slice(0).filter(image => image.category === category);
    }

    public getMenu() : any[]
    {
        return MENU.slice(0);
    }

    public getNextCategory(category: string) : string
    {
        let id : number = MENU.slice(0).filter(menu => menu.category == category).pop().id;
        return this.getCategoryById(++id);
    }

    public getPreviousCategory(category: string) : string
    {
        let id : number = MENU.slice(0).filter(menu => menu.category == category).pop().id;
        return this.getCategoryById(--id);
    }

    private getCategoryById(id: number) : string
    {
        return (id != null && id >= 1 && id <= MENU.length) ? MENU.slice(0).filter(menu => menu.id == id).pop().category : "";
    }
}

const IMAGES =
[
    {"id":1, "category": "album", "url":"assets/img/album/album1.jpg"},
    {"id":2, "category": "album", "url":"assets/img/album/album2.jpg"},
    {"id":3, "category": "album", "url":"assets/img/album/album3.jpg"},
    {"id":4, "category": "app", "url":"assets/img/app/app1.jpg"},
    {"id":5, "category": "app", "url":"assets/img/app/app2.jpg"},
    {"id":6, "category": "invite", "url":"assets/img/invite/invite1.jpg"},
    {"id":7, "category": "invite", "url":"assets/img/invite/invite2.jpg"},
    {"id":8, "category": "invite", "url":"assets/img/invite/invite3.jpg"},
    {"id":9, "category": "magazine", "url":"assets/img/magazine/magazine1.jpg"},
    {"id":10, "category": "magazine", "url":"assets/img/magazine/magazine2.jpg"},
    {"id":11, "category": "magazine", "url":"assets/img/magazine/magazine3.jpg"},
    {"id":12, "category": "poster", "url":"assets/img/poster/poster1.jpg"},
    {"id":13, "category": "poster", "url":"assets/img/poster/poster2.jpg"},
    {"id":14, "category": "poster", "url":"assets/img/poster/poster3.jpg"},
    {"id":15, "category": "web", "url":"assets/img/web/web1.jpg"},
    {"id":16, "category": "web", "url":"assets/img/web/web2.jpg"},
    {"id":17, "category": "web", "url":"assets/img/web/web3.jpg"}
]

const MENU =
[
    {"id":1, "category": "app", "url":"assets/img/menu/menu_app.jpg"},
    {"id":2, "category": "invite", "url":"assets/img/menu/menu_invite.jpg"},
    {"id":3, "category": "magazine", "url":"assets/img/menu/menu_magazine.jpg"},
    {"id":4, "category": "album", "url":"assets/img/menu/menu_album.jpg"},
    {"id":5, "category": "web", "url":"assets/img/menu/menu_web.jpg"},
    {"id":6, "category": "poster", "url":"assets/img/menu/menu_poster.jpg"}
]