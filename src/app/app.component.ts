import { Component } from '@angular/core';
import { IAppState } from './store';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  percent: number

	constructor(private ngRedux: NgRedux<IAppState>){

	}


	ngOnInit(){
	//se ejecutará siempre que modifiquemos el state en redux
		this.percent = this.percent = this.ngRedux.getState().percentComplete
		this.ngRedux.subscribe(()=>{
			this.percent = this.ngRedux.getState().percentComplete
		})
	}



}
