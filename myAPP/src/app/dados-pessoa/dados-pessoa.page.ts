import { IGit } from './../models/IGit.model';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-pessoa',
  templateUrl: './dados-pessoa.page.html',
  styleUrls: ['./dados-pessoa.page.scss'],
})
export class DadosPessoaPage implements OnInit {

  pessoa:IGit;
  constructor(public dadosService:DadosService) {   }

  ngOnInit() {
    this.pessoa = this.dadosService.pegarDados('pessoa');
    console.log("Pessoa Enviada",this.pessoa);
  }

}
