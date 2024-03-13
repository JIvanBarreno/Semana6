export class ListColor {
	public red: number = 0;
	public green: number = 0;
	public blue: number = 0;
	public hex: string = "";

	constructor(r: number, g: number, b: number, h: string) {
		this.red = r;
		this.green = g;
		this.blue = b;
		this.hex = h;
	}
}