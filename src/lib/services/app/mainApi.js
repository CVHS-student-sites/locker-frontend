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

export async function sendVerification(data){
    return await fetch(`https://locker-api.cvapps.net/public/send-verify-student/${data}`, {
        method: "post",
    });
}

export async function checkVerification(data){
    return await fetch(`https://locker-api.cvapps.net/public/check-verification/${data}`, {
        method: "get",
    });
}