import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-adp',
  templateUrl: './adp.page.html',
  styleUrls: ['./adp.page.scss'],
})
export class AdpPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  public mainlinks = [
    { title: 'Inicio', url: '/home/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/home/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/home/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/home/Archived', icon: 'archive' },
    { title: 'Trash', url: '/home/Trash', icon: 'trash' },
    { title: 'Spam', url: '/home/Spam', icon: 'warning' },
  ];
  public appPages = [
    { title: 'Inicio', url: '/home/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/home/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/home/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/home/Archived', icon: 'archive' },
    { title: 'Trash', url: '/home/Trash', icon: 'trash' },
    { title: 'Spam', url: '/home/Spam', icon: 'warning' },
  ];
  
  public headerLinksStart = [
    { title: 'Inicio', url: 'inicio', icon: 'mail' },
    { title: 'Conocenos', url: '/home/Outbox', icon: 'paper-plane' },
    { title: 'Que hacer en caso de ... ?', url: '/home/Favorites', icon: 'heart' }
  ]
  public footersLinksStart = [
    { title: 'contacto', url: '/home/Inbox', icon: 'mail' },
    { title: 'Aviso de privasidad', url: '/home/Outbox', icon: 'paper-plane' },
    { title: 'términos y condiciones', url: '/home/Favorites', icon: 'heart' }
  ];
  public footersLinksEnd = [
    { title: '3313310077', url: '/home/Inbox', icon: 'logo-whatsapp' },
    { title: 'SADMA ONLINE', url: '/home/Outbox', icon: 'logo-facebook' },
    { title: 'Instagram', url: '/home/Favorites', icon: 'logo-instagram' },
    { title: 'Mapa de sitio', url: '/home/Outbox', icon: 'map' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];


  async login() {
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

}
