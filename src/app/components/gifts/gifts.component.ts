import { Component } from '@angular/core';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.scss']
})
export class GiftsComponent {
	visible: boolean = false;
	okVisible: boolean = false;

	showDialog() {
		this.visible = true;
	}

	showConfirm() {
		this.okVisible = true;
		setTimeout(()=>{
			this.okVisible = false;
		}, 1000);
	}

	copyCbu(){
		navigator.clipboard.writeText('0070188030004021492298')
			.then(() => {
				console.log('Texto copiado al portapapeles')
				this.showConfirm();
			})
			.catch(err => {
				console.error('Error al copiar al portapapeles:', err)
			})
	}
}
