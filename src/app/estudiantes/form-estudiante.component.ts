import { Component, OnInit } from '@angular/core';
import { EstudianteModel} from './estudiante-model';
import { EstudianteService } from './estudiante.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form-estudiante',
  templateUrl: './form-estudiante.component.html',
  styleUrls: ['./form-estudiante.component.css']
})
export class FormEstudianteComponent implements OnInit {
  estudiante: EstudianteModel = new EstudianteModel();
  titulo:string = "Registro de Estudiante";

  constructor(private estudianteService: EstudianteService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
      this.activatedRoute.params.subscribe(
        e => {
          let id=e['id'];
            if(id){
              this.estudianteService.get(id).subscribe(
                student => this.estudiante = student
              );
            }
        }
      );
  }

  create():void{
    console.log(this.estudiante);
    this.estudianteService.create(this.estudiante).subscribe(
      res => this.router.navigate(['estudiante'])
    );
  }

  update():void{
    this.estudianteService.update(this.estudiante).subscribe(
      res => this.router.navigate(['estudiante'])
    )
  }

}
