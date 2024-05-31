import axios from "axios";

export async function fetchLocker(username) {
    return await fetch(`https://locker-api.cvapps.net/public/lookup-user/${username}`, {
            method: 'get',
    });
}

export async function validateID(data){
    return await fetch(`https://locker-api.cvapps.net/public/validate-ID/${data}`, {
        method: "get",
    });
}

export async function fetchEnabledGrades() {
    const response = await fetch('https://locker-api.cvapps.net/public/available-grades', {
        method: 'get',
    });

    return await response.json();
}

// export async function sendVerification(data, token){
//     return await fetch(`https://locker-api.cvapps.net/public/send-verify-student/${data}/${token}`, {
//         method: "post",
//     });
// }


export async function sendVerification(data, token) {
    return await axios.post(`https://locker-api.cvapps.net/public/send-verify-student/${token}`,
        data
    );
}


export async function checkVerification(data){
    return await fetch(`https://locker-api.cvapps.net/public/check-verification/${data}`, {
        method: "get",
    });
}

export async function fetchAvailableLockers(){
    let response = await fetch(`https://locker-api.cvapps.net/public/available-lockers`, {
        method: "get",
    });

    return await response.json();
}


export async function submitLockers(data){
    return await fetch('https://locker-api.cvapps.net/public/register-locker', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
}
