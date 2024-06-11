import { DataSTRMService } from './../../services/data-strm.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-manual',
  templateUrl: './cadastro-manual.component.html',
  styleUrls: ['./cadastro-manual.component.scss']
})
export class CadastroManualComponent implements OnInit {

  form: FormGroup;
  cpfCnpjMask: string = '000.000.000-009999';


  constructor(private fb: FormBuilder, private dataSTRMService: DataSTRMService) {
    this.form = this.fb.group({
      vigenciaInicial: ['', Validators.required],
      concessionaria: ['', Validators.required],
      uf: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      unidadeInstalacao: ['', Validators.required],
      numeroCliente: ['', Validators.required],
      empresa: ['', Validators.required],
      descricaoUnidade: ['', Validators.required],
      tipo: ['', Validators.required],
      modalidade: ['', Validators.required],
      clienteRural: ['', Validators.required],
      tipoOrganizacao: ['', Validators.required],
      tipoLigacao: ['', Validators.required],
      cpfCnpj: ['', [Validators.required, Validators.pattern(/^\d{11}|\d{14}$/)]],
      email: ['', [Validators.required, Validators.pattern(/^\d{11}|\d{14}$/)]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    this.loadFormData();
  }

  saveFormData(): void {
    if (this.form.valid) {
      this.dataSTRMService.saveData(this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }

  loadFormData(): void {
    const savedData = this.dataSTRMService.getData();
    if (savedData) {
      this.form.patchValue(savedData);
    }
  }

  clearFormData(): void {
    this.dataSTRMService.clearData();
    this.form.reset();
  }
  
  updateMask() {
    const value = this.form.get('cpfCnpj')?.value.replace(/\D/g, '');

    if (value.length > 11) {
      this.cpfCnpjMask = '00.000.000/0000-00';
    } else {
      this.cpfCnpjMask = '000.000.000-00';
    }
  }
}