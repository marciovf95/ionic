import { IGitAPI } from './../models/IGitAPI.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private apiURL = 'https://api.github.com/users';
  private key = '';

  constructor(private http:HttpClient,public ToastController: ToastController) { }

  buscarNaAPIGit(busca : string):Observable<IGitAPI>{

    const url =`${this.apiURL}/${busca}`;

    return this.http.get<IGitAPI>(url).pipe(
      // map(retorno=>retorno),
      map(retorno=>Array.of(retorno)),
      catchError(erro =>this.showError(erro))
    )
  }

  async showError(erro) {
    const toast = await this.ToastController.create({
      message: 'Erro ao Consultar API',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }

}
