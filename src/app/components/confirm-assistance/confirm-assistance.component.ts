import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GuestResponsesService } from 'src/app/services/guest-responses.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-confirm-assistance',
  templateUrl: './confirm-assistance.component.html',
  styleUrls: ['./confirm-assistance.component.scss'],
  providers: [MessageService]
})
export class ConfirmAssistanceComponent implements OnInit {
  stateOptions: any[] = [{label: 'Sí', value: 'si'}, {label: 'No', value: 'no'}];
  formulario: FormGroup;
  visible: boolean = false;
  okVisible: boolean = false;

  constructor(
    private guestResponseService: GuestResponsesService,
    private messageService: MessageService
  ) {
    this.formulario = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      assist: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(500)])
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.formulario);
    }, 500);
  }

  async onSubmit() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched(); // Marca todos los controles como tocados para mostrar errores
      return;
    }

    console.log(this.formulario.value);
    this.guestResponseService.addGuestResponse(this.formulario.value)
      .then((response) => {
        console.log(response);
        this.showSuccess();
				this.formulario.reset();
      })
      .catch((error) => {
        console.log(error);
        this.showError();
      });
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Enviado!', detail: 'Gracias :)' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Falló el envío :(' });
  }
}
