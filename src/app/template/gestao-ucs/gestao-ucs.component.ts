import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DataSTRMService } from 'src/app/services/data-strm.service';

@Component({
  selector: 'app-gestao-ucs',
  templateUrl: './gestao-ucs.component.html',
  styleUrls: ['./gestao-ucs.component.scss']
})
export class GestaoUcsComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'unidadeInstalacao',
    'numeroCliente',
    'empresa', 
    'descricaoUnidade',  
    //'Status'
  ];
  
  dataSource: any;
  clickedRows = new Set<any>();

  constructor(private dataService: DataSTRMService) { }

  ngOnInit(): void {
    this.loadDataFromService();
  }

  loadDataFromService(): void {
    const data = this.dataService.getData();
    this.dataSource = data.length ? data : [];
  }

  showAlert() {
    Swal.fire({
      title: 'Hello!',
      text: 'This is a SweetAlert2 alert.',
      icon: 'success',
      confirmButtonText: 'Cool'
    });
  }

  cards = [
    { title: 'Total UCs', content: ' 1' },
    { title: 'Status', content: ' 2' },
    { title: 'Tipo', content: ' 3' },
    { title: 'Grupo', content: ' 4' },
    { title: 'Dados de Faturamento', content: ' 5' }
  ];
}
