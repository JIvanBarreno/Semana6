import { Component, Input } from '@angular/core';
import { ListColor } from '../../models/rgbdata.model';

@Component({
	selector: 'app-colorlist',
	standalone: true,
	imports: [],
	templateUrl: './colorlist.component.html',
	styleUrl: './colorlist.component.css'
})
export class ColorlistComponent {
	@Input() dataColors : Array<ListColor> = [];
}
