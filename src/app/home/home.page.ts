import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  afficher!: boolean;
  dateChoisie!: number;
  dateActuelle!: number;
  nbrDodo!: number;
  pluriel!: string;


  constructor(private router : Router) { }

  ionViewDidEnter() {
    this.dateActuelle = Date.now();
    if (localStorage.getItem('date') != null) {
      this.dateChoisie = parseInt(localStorage.getItem('date')!);
      let diff = this.dateChoisie - this.dateActuelle;
      this.nbrDodo = Math.trunc((diff / (1000 * 60 * 60 * 24)) + 1);
      
      if (this.nbrDodo > 0) {
        this.afficher = true;
        if (this.nbrDodo > 1) {
          this.pluriel = 's';
        } else {
          this.pluriel = '';
        }
      } else {
        this.afficher = false;
        localStorage.clear()
      }
    } else {
      this.afficher = false;
    }
  }

  pickDate() {
    this.router.navigateByUrl('date')
  }

}
