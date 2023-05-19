import authService from "../../Services/authService";
import store from "../index";

export var GET_QTS = 'GET_QTS'

async function get_qts(){
    try {
        const qts = await authService.AdminData()
        store.dispatch({
            type:GET_QTS,
            payload:qts.data.data
        })
    } catch (error) {
        console.log(error,'error');
    }

}
export default get_qts