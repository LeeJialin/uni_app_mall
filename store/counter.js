import { defineStore } from 'pinia'



export const useCounterStore = defineStore('counterStore', {
	state: () => {
		return {
			count: 800
		}
	},
		
	actions: {
		increment() {
			this.count ++
		}
	}
	
})