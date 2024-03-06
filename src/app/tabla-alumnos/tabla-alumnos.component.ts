import { Component, OnInit } from '@angular/core';
import { Cursos } from '../tabla-cursos/mock';


@Component({
  selector: 'app-tabla-alumnos',
  standalone: true,
  imports: [],
  templateUrl: './tabla-alumnos.component.html',
  styleUrl: './tabla-alumnos.component.css'
})
export class TablaAlumnosComponent implements OnInit {

  public cursos?: any[]

  ngOnInit(): void{
    this.cursos = Cursos
  }

}
