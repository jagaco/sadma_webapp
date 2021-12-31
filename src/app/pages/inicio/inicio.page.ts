import { Component, HostListener, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public folder: string;
  authenticated = false;
  

  
  constructor(
    private activatedRoute: ActivatedRoute, 
    private authService: AuthenticationService, 
    private router: Router,
    private platform: Platform
    
    ) {  this.initializeApp(); }

  initializeApp() {
    this.platform.ready().then(() => {
      
    })
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }


  public mainlinks = [
    { title: 'Inicio', url: '/inicio/Inbox', icon: 'mail' },
    { title: 'Registro', url: '/inicio/Registro', icon: 'receipt' },
    { title: 'Favorites', url: '/home/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/home/Archived', icon: 'archive' },
    { title: 'Trash', url: '/home/Trash', icon: 'trash' },
    { title: 'Spam', url: '/home/Spam', icon: 'warning' },
  ];

  //side panel
  public appPages = [
    { title: 'Inicio', url: '/inicio/Inicio', icon: 'home' },
    { title: 'Registro', url: '/inicio/Registro', icon: 'receipt' },
    { title: 'Ingresos', url: '/inicio/Ingresos', icon: 'car' },
    { title: 'Noticias', url: '/inicio/Noticias', icon: 'mail' },
    { title: 'Beneficios', url: '/inicio/Beneficios', icon: 'wallet' },
    { title: 'Servicios', url: '/inicio/servicios', icon: 'construct' }
    
  ];
  
  public headerLinksStart = [
    { title: 'Inicio', url: '/inicio/Inbox', icon: 'mail' },
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
  
  
  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
  async login() {
    this.router.navigateByUrl('login', { replaceUrl: true });
  }

}
