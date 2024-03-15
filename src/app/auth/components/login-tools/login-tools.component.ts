import { Component, OnInit } from '@angular/core';
import { AuthModule } from '../../auth.module';
import { ToolCardComponent } from '../tool-card/tool-card.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login-tools',
  templateUrl: './login-tools.component.html',
  styleUrls: ['./login-tools.component.css'],
  imports: [ToolCardComponent, CommonModule]
})
export class LoginToolsComponent implements OnInit{

  ngOnInit(){
    const element = document.getElementsByTagName('app-login').item(0) as HTMLElement;
    element.style.maxWidth = '100%'
  }

  cards = [
    {img: 'card-ad.svg', title: 'Anuncios', text: 'Crea y administra a los usuarios que ingresan a tus canales'},
    {img: 'card-media.svg', title: 'Medios', text: 'Administra el inventario de espacios publicitarios en tu sitio web.'},
    {img: 'card-social.svg', title: 'Social', text: 'Activa campañas de Marketing Digital usando inventario de Redes Sociales y Google.'},
    {img: 'card-cloud.svg', title: 'Cloud', text: 'Configura y administra tus campañas de email marketing y mensajería instantánea.'},
    {img: 'card-audience.svg', title: 'Audiencias', text: 'Gestiona, organiza y activa los datos de tu público objetivo para los diferentes flujos de campaña.'},
  ]

}
