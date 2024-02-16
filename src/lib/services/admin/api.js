export async function fetchOverviewData() {
    const response = await fetch('https://locker-api.cvapps.net/admin/management/area-restrictions', {
        method: 'get',
        credentials: 'include'
    });


     // Assuming the response is JSON data
    return await response.json();
}
