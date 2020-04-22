import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../shared/service/auth.service";

@Component({
  selector: 'app-client-account',
  templateUrl: './client-account.component.html',
  styleUrls: ['./client-account.component.scss']
})
export class ClientAccountComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.parseAccessToken();
  }

}
