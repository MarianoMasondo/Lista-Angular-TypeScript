import { Component } from '@angular/core';
import { TablaCursosComponent } from "./tabla-cursos/tabla-cursos.component";
import { TablaAlumnosComponent } from "./tabla-alumnos/tabla-alumnos.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [TablaCursosComponent, TablaAlumnosComponent]
})
export class AppComponent {
  
  cursos:boolean = true

  handleCambio(){
    this.cursos = !this.cursos
  }
}
