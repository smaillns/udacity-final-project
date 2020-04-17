import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enterprice',
  templateUrl: './enterprice.component.html',
  styleUrls: ['./enterprice.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EnterpriceComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private title: Title) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
  }

}
