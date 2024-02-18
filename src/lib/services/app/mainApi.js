export async function fetchLocker(username) {
    return await fetch(`https://locker-api.cvapps.net/public/lookup-user/${username}`, {
        method: 'get',
    });
}