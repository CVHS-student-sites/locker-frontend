<script>
    import {fetchOverviewData} from "$lib/services/admin/api.js";
    import {onMount} from "svelte";

    onMount(async () => {
        const response = await fetch("https://locker-api.cvapps.net/admin/management/area-restrictions", {
            method: 'get',
            credentials: 'include'
        });

        const data = await response.json(); // Assuming the response is JSON data
        console.log(data);
    });

</script>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Upload</title>
</head>
<body>
<form action="https://locker-api.cvapps.net/admin/lockerUpload" method="post" enctype="multipart/form-data">
    <input type="file" name="csvFile" accept=".csv" required>
    <button type="submit">Upload Locker</button>
</form>
<br>

<form action="https://locker-api.cvapps.net/admin/userUpload" method="post" enctype="multipart/form-data">
    <input type="file" name="csvFile" accept=".csv" required>
    <button type="submit">Upload User</button>
</form>

</body>
</html>
