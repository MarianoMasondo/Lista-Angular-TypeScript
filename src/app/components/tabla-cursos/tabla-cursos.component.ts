import { Component, OnInit } from '@angular/core';
import { alumnos } from '../tabla-alumnos/mock';
import { Alumno } from '../../models/alumno-to';

@Component({
  selector: 'app-tabla-cursos',
  standalone: true,
  imports: [],
  templateUrl: './tabla-cursos.component.html',
  styleUrl: './tabla-cursos.component.css'
})
export class TablaCursosComponent implements OnInit {

  public cursos?: Alumno[]

  ngOnInit(): void{
    this.cursos = alumnos
  }
}