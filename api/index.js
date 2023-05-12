import createApi from './requst.js'
import home from '@/api/home/index.js'
 
let  Modules = {
	home
}

let api = new createApi({ Modules }).create()
 
export default api







