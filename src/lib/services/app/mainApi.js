export async function fetchLocker(username) {
    return await fetch(`https://locker-api.cvapps.net/public/lookup-user/${username}`, {
            method: 'get',
    });
}

export async function validateIDs(data){
    return await fetch(`https://locker-api.cvapps.net/public/validate-IDs`, {
        method: "get",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}