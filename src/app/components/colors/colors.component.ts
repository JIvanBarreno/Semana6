import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Console } from 'console';
import { ListColor } from '../../models/rgbdata.model';
import { ColorlistComponent } from '../colorlist/colorlist.component';

@Component({
	selector: 'app-colors',
	standalone: true,
	imports: [ReactiveFormsModule, ColorlistComponent],
	templateUrl: './colors.component.html',
	styleUrl: './colors.component.css'
})
export class ColorsComponent {
	public title: string = "Lista Colores"
	public red = new FormControl();
	public green = new FormControl();
	public blue = new FormControl();
	public newColor: string = "";
	public colorItem : ListColor[] = [];

	private convertir(valor: number) {
		return ("0" + valor.toString(16)).slice(-2);
	}

	addColor() {
		var r = this.red.value;
		var g = this.green.value;
		var b = this.blue.value;
		var rgb = "#" +  this.convertir(r) + this.convertir(g) + this.convertir(b);
		
		this.colorItem.push(new ListColor(r, g, b, rgb));
	}
}
