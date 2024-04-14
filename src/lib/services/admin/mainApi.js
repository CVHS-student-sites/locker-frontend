import axios from "axios";

export async function fetchOverviewData() {
    const response = await fetch('https://locker-api.cvapps.net/admin/management/get-statistics', {
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

export async function fetchUserData(){
    const response = await fetch('https://locker-api.cvapps.net/admin/data/user-data?page=1&pageSize=10', {
        method: 'get',
        credentials: 'include'
    });

    return await response.json();
}

async function fetchLockerData() {
    try {
        const response = await axios.get('https://locker-api.cvapps.net/admin/data/locker-data?page=1&pageSize=3');
        return response.data;
    } catch (error) {
        throw error; // Rethrow the error to handle it elsewhere if needed
    }
}