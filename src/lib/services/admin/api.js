export async function fetchOverviewData(){
    const response = await fetch('https://locker-api.cvapps.net/admin/management/area-restrictions', {
        method: 'get',
    });

    console.log(response)
}