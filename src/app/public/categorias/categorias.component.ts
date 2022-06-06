import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
  
})

export class CategoriasComponent implements OnInit {

  archivos:any;

  constructor(public apiService:APIService){}

  
  ngOnInit(): void {
    this.apiService.getArchivos().subscribe
    (resp=>
    {this.archivos=resp; 
      // console.log(resp)
    })
  }

}
