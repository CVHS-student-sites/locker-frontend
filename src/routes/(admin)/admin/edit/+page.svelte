<script>
    import LockerEdit from "./views/LockerEdit.svelte";
    import UserEdit from "./views/UserEdit.svelte";
    import CreateUser from "./views/CreateUser.svelte";

    import {pageView} from "./store.js";

    let selected;
    pageView.set(0);

    $: if ($pageView === 0) selected = UserEdit;
    $: if ($pageView === 1) selected = LockerEdit;
    $: if ($pageView === 2) selected = CreateUser;



</script>

<svelte:head>
    <title>Locker - Manage</title>
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
        /* height: 30%; */
        /* position: relative; */


    }

    .top-menu {
        display: flex;
        align-items: center;
        justify-content: right;
        width: 100%;
        height: 60px;
        gap: 10px;
        /* background-color:green; */
    }

    .dataselect-button {
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

    .dataselect-button:hover {
        /* background-color: ; */
        cursor: pointer;
    }

    .data-active-button {
        background-color: #003566;
    }

    .sub-scroll {
        flex: 1;
        overflow-y: scroll;
        scrollbar-width: none;
    }
</style>


<div class="main">
    <div class="top-menu">
        <div class="dataselect-button" on:click={() => (pageView.set(0))}
             class:data-active-button={$pageView === 0}>Users
        </div>
        <div class="dataselect-button" on:click={() => (pageView.set(1))}
             class:data-active-button={$pageView === 1}>Lockers
        </div>
        <div class="dataselect-button" on:click={() => (pageView.set(2))}
             class:data-active-button={$pageView === 2}>Create
        </div>
    </div>
    <div class="sub-scroll">
        <svelte:component this={selected}/>
    </div>
</div>
