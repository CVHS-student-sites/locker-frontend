<script>
    import {page} from '$app/stores';

    console.log($page.url.pathname)

    let selectPage;
    $: if ($page.url.pathname === '/admin') selectPage = 0;


    $: if ($page.url.pathname === '/admin/edit') selectPage = 1;
    $: if ($page.url.pathname === '/admin/manage') selectPage = 2;
    $: if ($page.url.pathname === '/admin/settings') selectPage = 3;

</script>

<svelte:head>
    <title>Login</title>
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
    <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            rel="stylesheet"
    />
</svelte:head>

<style>
    .material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
        color: #577db2;
        user-select: none;
        cursor: pointer;
        width: 24px;

    }

    .sidebar {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 20%;
        background-color: #18181b;
        border-radius: 10px;
        padding: 16px;
        box-sizing: border-box;
        gap: 5px;
    }

    .active-button {
        background-color: #003566;
    }

    .button-text {
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        color: #d6d6d6;
    }

    .side-element-1 {
        width: 100%;
        height: 60px;
        padding: 16px;
        box-sizing: border-box;
        border-radius: 5px;
        transition: background-color 0.1s ease;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 16px;
    }

    .side-element-1:hover {
        filter: brightness(125%);
        cursor: pointer;
    }

    .user-text {
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        color: #d6d6d6;
    }


    .side-element-2 {
        width: 100%;
        height: 50px;
        padding: 16px;
        box-sizing: border-box;
        border-radius: 50px;
        transition: background-color 0.1s ease;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 16px;
    }

    .side-element-2:hover {
        filter: brightness(125%);
        cursor: pointer;
    }

    .sidebar a {
        width: 100%;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
    }

    a:link {
        text-decoration: none;
        user-select: none;
    }

    a:visited {
        text-decoration: none;
        user-select: none;
    }

    a:hover {
        text-decoration: none;
        user-select: none;
    }

    a:active {
        text-decoration: none;
        user-select: none;
    }
</style>


<div class="sidebar">
    <div class="side-element-1">
        <div class="material-symbols-outlined">account_circle</div>
        <div class="user-text">birdpump</div>
    </div>

    <a href="/admin">
        <div class="side-element-2" class:active-button={selectPage === 0}>
            <div class="material-symbols-outlined">data_usage</div>
            <div class="button-text">Overview</div>
        </div>
    </a>

    <a href="/admin/edit">
        <div class="side-element-2" class:active-button={selectPage === 1}>
            <div class="material-symbols-outlined">list</div>
            <div class="button-text">Edit</div>
        </div>
    </a>

    <a href="/admin/manage">
        <div class="side-element-2" class:active-button={selectPage === 2}>
            <div class="material-symbols-outlined">tune</div>
            <div class="button-text">Management</div>
        </div>
    </a>

    <a href="/admin/settings">
        <div class="side-element-2" class:active-button={selectPage === 3}>
            <div class="material-symbols-outlined">settings</div>
            <div class="button-text">Settings</div>
        </div>
    </a>
</div>