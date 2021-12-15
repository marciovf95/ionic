import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { IGitAPI } from '../models/IGitAPI.model';

@Component({
  selector: 'app-dados-pessoa',
  templateUrl: './dados-pessoa.page.html',
  styleUrls: ['./dados-pessoa.page.scss'],
})
export class DadosPessoaPage implements OnInit {

  pessoa:IGitAPI;
  constructor(public dadosService:DadosService) {   }

  ngOnInit() {
    this.pessoa = this.dadosService.pegarDados('pessoa');
    console.log("Pessoa Enviada",this.pessoa);
  }

}
