<script>
	import { page } from '$app/stores';

</script>

<svelte:head>
    <title>Lookup</title>

    <meta
        name="description"
        content="Find your locker at Crescenta Valley High School (CVHS) with our locker lookup tool. Easily locate your locker and get organized for the school year."
    />
    <meta
        name="keywords"
        content="Crescenta Valley High School, CVHS, locker lookup, locker search, school locker"
    />
    <meta name="author" content="cvapps.net" />

    <link href="https://fonts.googleapis.com" rel="preconnect" />
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect" />
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div class="main">
    <div class="sub">
		<h1>Error:</h1>
		<h1>{$page.error.message}</h1>
	</div>
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
	.sub{
		display: flex;
		/* flex-direction: column; */
		gap: 15px;
		align-items: center;
		justify-content: center;
		flex: 1;
		color: var(--text);
	}
</style>
