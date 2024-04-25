import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss'
})
export class Page2Component implements OnInit {

  id: string;

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
  }



}
