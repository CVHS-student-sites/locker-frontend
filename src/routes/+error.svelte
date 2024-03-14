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
</svelte:head>

<div class="main">
    <div class="sub">
        <h1>{$page.status}</h1>
        <a href="/"><img alt="cv logo" class="logo" loading="eager" rel="preload" src="/CVHS-logo.png"/></a>
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
    
    h1{
        margin: 0;
        font-size: 36px;
    }

    .logo{
        width: 10vw;
    }

    .main {
        font-family: "Montserrat", sans-serif;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100vw;
        flex: 1;
        align-items: center;
        justify-content: center;
        background-color: var(--background);
    }

	.sub{
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: center;
		justify-content: center;
		flex: 1;
		color: var(--text);
	}
</style>
