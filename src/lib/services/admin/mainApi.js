export async function fetchOverviewData() {
    const response = await fetch('https://locker-api.cvapps.net/admin/management/area-restrictions', {
        method: 'get',
        credentials: 'include'
    });

    return await response.json();
}

export async function fetchEnabledGrades() {
    const response = await fetch('https://locker-api.cvapps.net/admin/management/grade-restrictions', {
        method: 'get',
        credentials: 'include'
    });

    return await response.json();
}
