import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  events: any[] = [];
  ngOnInit(): void {
    this.events = [
      {content: 'Pedido Efetuado', date: '14/09/2022 09:21', status: 'R'},
      {content: 'Preparando', date: '14/09/2022 12:25'},
      {content: 'Enviado', date: '14/09/2022 16:43'},
      {content: 'Entregue', date: '15/09/2022 09:23'}
    ]
  }
  
}
