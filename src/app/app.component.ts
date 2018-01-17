import { Component } from '@angular/core';

// import { AddKegComponent } from './add-keg/add-keg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tap-Room';

  display: boolean = false;

  kegs: Keg[] = [
    new Keg('10 Barrel Baroque Pearl', '10 Barrel Brewing', 'Hazy IPA', 200, 6.4, 120),
    new Keg('Aleson Blending Dubbel', 'Alesong Brewing', 'Belgian-Style Dubbel', 20, 7.1, 120),
    new Keg('Baerlic Primeval', 'Baerlic', 'Brown Ale', 20, 6.8, 120),
    new Keg('Bend Darth Lagesr', 'Bend Brewing Company', 'Dark Lager', 20, 5.0, 120),
    new Keg('Boneyard Enzymatic', 'Boneyard Beer Company', 'IPA', 20, 7.0, 120),
    new Keg('Firestone Walker 805', 'Firestone Walker Brewing Company', 'Blonde Ale', 200, 4.7, 1200)
  ];
  selectedKeg: Keg = this.kegs[0];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
    this.display = true;
  }

  pour(clickedKeg) {
    clickedKeg.pints -= 1;
  }

  saveChanges() {
    this.display = false;
  }
}

export class Keg {
  constructor(
    public name: string,
    public brand: string,
    public style: string,
    public price: number,
    public alcoholContent: number,
    public pints: number
  ) { }
}
