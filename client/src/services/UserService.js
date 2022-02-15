import Axios from "axios"

const mockee = true

async function findID(id) {

    let userData = {}
    
    if (mockee === true) {
        console.log("MOCKEE");
        const response = await fetch('../../user/12.json')
        const data = await response.json()
        userData = data.data
    } else {
        const response = await Axios.get('http://localhost:3333/user/'+id)
        userData = response.data.data
    }

    console.log("USER : ", userData);

    return userData
}

async function getAvarageSession(id) {

    let userData = {}
    
    if (mockee === true) {
        console.log("MOCKEE");
        const response = await fetch('../../user/12/average-sessions.json')
        const data = await response.json()
        userData = data.data
    } else {
        const response = await Axios.get('http://localhost:3333/user/'+id+'/average-sessions')
        userData = response.data.data
    }

    return userData
}

async function getActivity(id) {

    let userData = {}
    
    if (mockee === true) {
        console.log("MOCKEE");
        const response = await fetch('../../user/12/activity.json')
        const data = await response.json()
        userData = data.data
    } else {
        const response = await Axios.get('http://localhost:3333/user/'+id+'/activity')
        userData = response.data.data
    }

    return userData
}

async function getPerf(id) {

    let userData = {}
    
    if (mockee === true) {
        console.log("MOCKEE");
        const response = await fetch('../../user/12/performance.json')
        const data = await response.json()
        userData = data.data
    } else {
        const response = await Axios.get('http://localhost:3333/user/'+id+'/performance')
        userData = response.data.data
    }
    

    return userData
}



export {
    findID,
    getAvarageSession,
    getActivity,
    getPerf
}