export async function fetchOverviewData() {
    const response = await fetch('https://locker-api.cvapps.net/admin/management/area-restrictions', {
        method: 'get',
        credentials: 'include'
    });

    const data = await response.json(); // Assuming the response is JSON data
    console.log(data);
}
