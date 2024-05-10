import axios from "axios";
import {throwErrorToast} from "./throwToast.js";

export async function fetchOverviewData() {
    const response = await fetch('https://locker-api.cvapps.net/admin/management/get-statistics', {
        method: 'get', credentials: 'include'
    });

    return await response.json();
}

export async function fetchEnabledGrades() {
    const response = await fetch('https://locker-api.cvapps.net/admin/management/grade-restrictions', {
        method: 'get', credentials: 'include'
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

export async function fetchAreaRestrictions() {
    try {
        const response = await axios.get('https://locker-api.cvapps.net/admin/management/area-restrictions', {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw error; // Rethrow the error to handle it elsewhere if needed
    }
}

export async function postAreaRestrictions(data) {
    try {
        const response = await axios.post('https://locker-api.cvapps.net/admin/management/area-restrictions',
            data
            , {
                withCredentials: true
            }
        );
        return response.data;
    } catch (error) {
        throw error; // Rethrow the error to handle it elsewhere if needed
    }
}

//todo make this into one
export async function fetchGradeRestrictions() {
    try {
        const response = await axios.get('https://locker-api.cvapps.net/admin/management/grade-restrictions', {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw error; // Rethrow the error to handle it elsewhere if needed
    }
}

export async function postEnabledGrades(data) {
    try {
        return await axios.post('https://locker-api.cvapps.net/admin/management/grade-restrictions',
            data
            , {
                withCredentials: true
            }
        );
    } catch (error) {
        throw error; // Rethrow the error to handle it elsewhere if needed
    }
}


export async function getUserEditData(user) {
    try {
        const response = await axios.get(`https://locker-api.cvapps.net/admin/edit/user-edit/${user}`,
           {
                withCredentials: true
            }
        );
        return response.data;
    } catch (error) {
        throw error; // Rethrow the error to handle it elsewhere if needed
    }
}

export async function updateUserEditData(user, data) {
    try {
        return await axios.post(`https://locker-api.cvapps.net/admin/edit/user-edit/${user}`,
            data
            , {
                withCredentials: true
            }
        );
    } catch (error) {
        throw error;
    }
}


export async function postRemoveUsersLocker(user) {
    try {
        return await axios.post(`https://locker-api.cvapps.net/admin/edit/remove-users-locker/${user}`,
            null,
            {
                withCredentials: true
            }
        );
    } catch (error) {
        throw error;
    }
}

export async function postDeleteUser(user) {
    try {
        return await axios.post(`https://locker-api.cvapps.net/admin/edit/delete-user/${user}`,
            null,
            {
                withCredentials: true
            }
        );
    } catch (error) {
        throwErrorToast("error");
        throw error;
    }
}