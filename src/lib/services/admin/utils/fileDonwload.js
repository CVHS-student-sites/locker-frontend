import axios from 'axios';
import pkg from 'file-saver';
const {saveAs} = pkg;

export async function downloadFile(filename, route) {
    try {
        const response = await axios({
            url: route,
            method: 'GET',
            responseType: 'blob', // Important
            withCredentials: true
        });

        // Use FileSaver to save the file
        saveAs(response.data, filename);
    } catch (error) {
        console.error('Error downloading file:', error);
    }
}
