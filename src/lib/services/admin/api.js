export async function fetchOverviewData() {
    try {
        const response = await fetch('https://locker-api.cvapps.net/admin/management/area-restrictions', {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        const data = await response.json(); // Assuming the response is JSON data
        console.log(data);
    } catch (error) {
        console.error('Error fetching overview data:', error);
    }
}