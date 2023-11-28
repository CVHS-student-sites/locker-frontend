<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Upload</title>
</head>
<body>
<form action="https://locker-api.cvapps.net/admin/upload" method="post" enctype="multipart/form-data">
    <input type="file" name="csvFile" accept=".csv" required>
    <button type="submit">Upload</button>
</form>
</body>
</html>
