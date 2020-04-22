import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../shared/service/auth.service";

@Component({
  selector: 'app-enterprice-nav',
  templateUrl: './enterprice-nav.component.html',
  styleUrls: ['./enterprice-nav.component.scss']
})
export class enterpriceNavComponent implements OnInit {

  constructor( public auth: AuthService) { }

  ngOnInit() {
  }

}
