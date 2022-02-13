import Axios from "axios"

async function findID(id) {
    const response = await Axios.get('http://localhost:3333/user/'+id)

    return response.data.data
}

async function getAvarageSession(id) {
    const response = await Axios.get('http://localhost:3333/user/'+id+'/average-sessions')


    return response.data.data
}

async function getActivity(id) {
    const response = await Axios.get('http://localhost:3333/user/'+id+"/activity")

    return response.data.data
}

async function getPerf(id) {
    const response = await Axios.get('http://localhost:3333/user/'+id+"/performance")

    return response.data.data
}



export {
    findID,
    getAvarageSession,
    getActivity,
    getPerf
}