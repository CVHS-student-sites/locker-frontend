<script>
    import Topnav from "$lib/components/Topnav.svelte";
    import Botnav from "$lib/components/Botnav.svelte";

</script>

<svelte:head>
    <title>CVHS Locker</title>

    <meta
        name="description"
        content="Manage your locker at Crescenta Valley High School (CVHS) with our locker system tool. Easily locate and register your locker and get organized for the school year."
    />
    <meta
        name="keywords"
        content="Crescenta Valley High School, CVHS, locker app, locker system, locker site, school locker, locker manager"
    />
    <meta name="author" content="cvapps.net" />
</svelte:head>

<div class="main">
<!--    <Topnav />-->
    <div class="sub">
        <img alt="CVHS falcon logo" class="big-logo" src="/CVHS-logo.png">
        <ul class="list">
            <li><p>You must have a locker partner to register for a locker at CV.</p></li>
            <li><p>The only exception to this is if you are opting for one of the single lockers on the 3rd floor of the 1000 building.</p></li>
            <li><p>If you forget your locker number, you can use the "lookup" feature to find it.</p></li>
            <li><p>Locks are available to purhcase at the student store.</p></li>
            <li><p>You and your partner are responsible for all items in the locker.</p></li>
            <li><p>CV is not responsible for lost or stolen items from lockers.</p></li>
        </ul>
    </div>
<!--    <Botnav pageId={0}/>-->
</div>

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
        height: 100%;
        width: 100vw;
        flex: 1;
    }
    .list{
        padding:2vw;
    }
    .big-logo{
        display: block;
        max-height: 20vh;
        margin-left: auto;
        margin-right: auto;
    }
    p{
        font-size: 20px;
        font-family: 'Montserrat', sans-serif;
        color: #d6d6d6;
        text-align: center;
        padding:1vh
    }
    .sub{
    }
</style>
