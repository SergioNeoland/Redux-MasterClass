import { tassign } from 'tassign';
import { CHANGE_PERSONAL_INFO, CHANGE_ADDRESS_INFO, CHANGE_BILLING_INFO, UPDATE_PERCENT_COMPLETED } from './actions';



//Creo la interfaz
export interface IAppState {
	personalInfo: any
	addressInfo: any     //Le defino el tipo
	billingInfo: any
	accountSelected: number
	percentComplete: number
	// tokenUser: string
}



//Estado inicial de nuestra store (de los datos arriba definidos)
export const INITIAL_STATE: IAppState = { //Le digo a mi INITIAL_STATE que es de tipo IAppState
	personalInfo: {},
	addressInfo: {},     //Esto son objetos
	billingInfo: {},
	accountSelected: 0,
	percentComplete: 0
	// tokenUser: ""
}
//Cuando yo cree Redux, todos los componentes de mi app van a poder acceder a este objeto de arriba


//1ºparam el estado de nuestra app, 2º param la acción. Esta acción "depende del case" se ejecuta siempre que hagamos un dispatch
export function rootReducer(state: IAppState, action): IAppState{ //El método devuelve de tipo IAppState --> "action): IAppState{"
	switch(action.type){
		case CHANGE_PERSONAL_INFO: {
			return tassign(state, { personalInfo: action.data })
		}
		case CHANGE_ADDRESS_INFO: {
			return tassign(state, {addressInfo: action.data })
		}
		case CHANGE_BILLING_INFO: {
			return tassign(state, {billingInfo: action.data })
		}
		case UPDATE_PERCENT_COMPLETED: {
			return tassign(state, { percentComplete: action.data})
		}
	}
	return state
}