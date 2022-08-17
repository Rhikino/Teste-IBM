import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'testibm';

  public municipio$:any;
  public estado$: any;
  selectedMunicipio = null;
  selectedEstado = null;


  constructor(private http: HttpClient){
  }

  ngOnInit(){

    this.listaEstados();

  }

  listaMunicipios(){
    let response = this.http.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+ this.selectedEstado + "/municipios").subscribe(d => { this.municipio$ = d});

    return response;
  }

  listaEstados(){
    let response = this.http.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados").subscribe(d => { this.estado$ = d});

    return response;
  }
  onChangeEstado($event: any) {
    console.log($event);
    this.selectedEstado = $event.sigla;
    if(this.selectedEstado != null){
      this.listaMunicipios();
    }
  }


}
