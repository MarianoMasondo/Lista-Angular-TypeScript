import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-cursos',
  standalone: true,
  imports: [],
  templateUrl: './tabla-cursos.component.html',
  styleUrl: './tabla-cursos.component.css'
})
export class TablaCursosComponent implements OnInit {

  public alumnos?: any[]

  ngOnInit(): void{
    this.alumnos = this.alumnos
  }
}