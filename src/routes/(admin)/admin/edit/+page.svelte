<script>
    import LockerEdit from "./views/LockerEdit.svelte";
    import UserEdit from "./views/UserEdit.svelte";

    let selected = UserEdit;


</script>

<svelte:head>
    <title>Locker - Manage</title>
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
    <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            rel="stylesheet"
    />
</svelte:head>
<style>
    :root {
        --text: #d6d6d6;
        --background: #101014;
        --primary: #0084ff;
        --secondary: #1b2c42;
        --accent: #577db2;
    }

    .main {
        display: flex;
        flex-direction: column;
        background-color: var(--background);
        flex: 1;
    }

    .top-menu{
        display: flex;
        align-items: center;
        justify-content: right;
        width: 100%;
        height: 60px;
        gap: 10px;
        /* background-color:green; */
    }

    .dataselect-button{
        /* width: 80px; */
        color: #d6d6d6;
        height: 50px;
        padding: 16px;
        box-sizing: border-box;
        border-radius: 50px;
        transition: background-color 0.1s ease;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 16px;
        background-color: #1b2c42;
    }

    .dataselect-button:hover{
        /* background-color: ; */
        cursor: pointer;
    }

    .data-active-button{
        background-color: #003566;
    }
</style>


<div class="main">
    <div class="top-menu">
        <div class="dataselect-button" on:click={selected = UserEdit} class:data-active-button={selected === UserEdit}>Users</div>
        <div class="dataselect-button" on:click={selected = LockerEdit} class:data-active-button={selected === LockerEdit}>Lockers</div>
    </div>
    <svelte:component this={selected}/>
</div>
