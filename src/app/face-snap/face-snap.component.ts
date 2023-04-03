import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  /**2 facons d'afficher d'afficher des donnees dynamiques :
   * string interpolation
   * attribute binding
  **/
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;

  // on initialise maintenant les propriétés dans la methode ngOnInit
  ngOnInit() {
    this.title = 'Moustache';
    this.description = 'La mascotte de la maison';
    this.createdDate = new Date();
    this.snaps = 6;
  }

}
