import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements OnInit {
  myDate!: Date

  constructor(private router : Router) { }

  ngOnInit() {

  }

  showdate() {
    let dateChoisie = new Date(this.myDate).getTime();
    localStorage.setItem('date', dateChoisie.toString());
    this.router.navigateByUrl('home')
  }

}
