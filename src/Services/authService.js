import httpService from "./httpService";


export async function Login (obj){
    const data = await httpService.post('/user/login',obj)
    console.log(data,'data.success');
    if(data.data.success === true){
        localStorage.setItem('loginData',data.data.data.token)
    }
    return data
}

export async function Register (obj){
    const data = await httpService.post('/user/register',obj)
    return data
}
export async function AdminData (obj){
    const data = await httpService.get('/user/getquestions',obj)
    return data
}
export async function AdminDataPost (obj){
    const data = await httpService.post('/admin/addquestion',obj)
    return data
}
export async function getdel (obj){
   
    // const data = await httpService.delete(`/admin/deletequestion/${id}`)
    const data = await httpService.delete('/admin/deletequestion',{data:{id:obj.id}})
    console.log(data,'deleteservice');
    return data
}


export default {Login, Register, AdminData, AdminDataPost, getdel}