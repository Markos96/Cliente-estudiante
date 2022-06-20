import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EstudianteModel} from './estudiante-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private index:String = "google.com"
  private url:string = 'http://localhost:8090/api/estudiante'
  constructor(private http:HttpClient) { }


  // Llama al metodo obtener todos los estudiantes de la API-REST
  getAll():Observable<EstudianteModel[]>{
    return this.http.get<EstudianteModel[]>(this.url);
  }

  // Llama al metodo obtener un estudiante de la API-REST
  get(id:number):Observable<EstudianteModel>{
    return this.http.get<EstudianteModel>(this.url + '/' +id);
  }

  // Llama al metodo para crear un estudiante en la API-REST
  create(estudiante:EstudianteModel):Observable<EstudianteModel>{
    return this.http.post<EstudianteModel>(this.url, estudiante);
  }

  // Llama al metodo para actualizar un estudiante en la API-REST
  update(estudiante:EstudianteModel):Observable<EstudianteModel>{
    return this.http.put<EstudianteModel>(this.url, estudiante);
  }

  // Llama al metodo para eliminar un estudiante en la API-REST
  delete(id:number):Observable<EstudianteModel>{
    return this.http.delete<EstudianteModel>(this.url + '/' +id);
  }

}
