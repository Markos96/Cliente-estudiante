import { Component, OnInit } from '@angular/core';
import { EstudianteModel } from './estudiante-model';
import { EstudianteService } from './estudiante.service';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  titulo:string="Lista de Estudiantes";

  estudiantes:EstudianteModel[];

  constructor(private estudianteService:EstudianteService) { }

  ngOnInit(): void {
  
    this.estudianteService.getAll().subscribe(
        e => this.estudiantes=e // Almaceno en mi variable estudiantes, lo que traiga la variable e.
    );

  }

  delete(estudiante:EstudianteModel):void {
    this.estudianteService.delete(estudiante.id).subscribe(
      e => this.estudianteService.getAll().subscribe(
        res => this.estudiantes = res
      ) 
    )
  }



}
