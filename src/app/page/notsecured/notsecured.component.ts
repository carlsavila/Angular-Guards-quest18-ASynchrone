import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-notsecured',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './notsecured.component.html',
  styleUrl: './notsecured.component.scss'
})
export class NotsecuredComponent {

}
