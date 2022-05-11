import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() tipoPage=0
  constructor() { }
  showFiller = false;
  ngOnInit(): void {
  }

}
export class MenuOverviewExample {}
