import {Component} from '@angular/core';
import {GridOptions, ColDef} from 'ag-grid';
import {RedComponentComponent} from '../red-component/red-component.component';

@Component({
	selector: 'app-my-grid-application',
	templateUrl: './my-grid-application.component.html',
	styleUrls: ['./my-grid-application.component.css']
})
export class MyGridApplicationComponent {

	private gridOptions: GridOptions;
	public rowData = [{id: 5, value: 10},
		{id: 10, value: 15},
		{id: 15, value: 20}];
	public columnDefs: ColDef[] = [{
		headerName: "ID",
		field: "id",
		width: 100
	},
		{
			headerName: "Value",
			field: "value",
			cellRendererFramework: RedComponentComponent,
			width: 100
		}];

	constructor() {
		this.gridOptions = {};
		// this.gridOptions.rowData = this.generateData();
		// this.gridOptions.columnDefs = this.generateColumnDef(this.gridOptions.rowData);
	}

	feedGrid() {
		this.gridOptions = {};
		this.rowData = this.generateData();
		this.columnDefs = this.generateColumnDef(this.rowData);
	}

	generateData() {
		let data = [];
		for (let i = 1; i <= 100; i++) {
			let row = {};
			for (let j = 1; j <= 100; j++) {
				row["p" + j] = i * j;
			}
			data.push(row);
		}
		return data;
	}

	generateColumnDef(data: any[]): ColDef[] {
		let colDef: ColDef[] = [
			{
				headerName: '#', width: 30, checkboxSelection: true, suppressSorting: true,
				suppressMenu: true, pinned: true
			}
		];
		if (data.length) {
			let row = data[0];
			for (let k in row) {
				colDef.push({
					headerName: k,
					field: k,
					width: 60
				});
			}
			colDef[1].pinned = true;
		}
		return colDef;
	}
}
