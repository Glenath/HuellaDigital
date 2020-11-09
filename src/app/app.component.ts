import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  stars: number[] = [1, 2, 3, 4, 5];
  specialties: string[] = ['Cirugía cardiovascular', 'Electrocardiograma', 'Hipertensión', 'Insuficiencia cardíaca'];
  title = 'pruebaHuella';
}
