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

export async function fetchUserData() {
    try {
        const response = await axios.get('https://locker-api.cvapps.net/admin/data/user-data', {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw error; // Rethrow the error to handle it elsewhere if needed
    }
}

export async function fetchLockerData() {
    try {
        const response = await axios.get('https://locker-api.cvapps.net/admin/data/locker-data', {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw error; // Rethrow the error to handle it elsewhere if needed
    }
}