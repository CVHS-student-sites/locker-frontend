<script>
    // src/routes/admin.svelte (or layout.svelte)
    import { redirect } from '@sveltejs/kit';
    import { goto } from '$app/navigation';



    async function logo() {
        try {
            // Make a GET request to the server's /checkauth endpoint
            const response = await fetch('https://locker-api.cvapps.net/auth/logout', {
                method: 'POST',
                credentials: 'include', // Include cookies in the request
            });



            if (response.ok) {
                // User is authenticated
                // await goto('/login');
                return true;
            } else {
                // User is not authenticated, handle accordingly

                return false;
            }
        } catch (error) {
            // Handle any network or other errors here
            console.error('Error checking authentication:', error);
            return false;
        }
    }



    // Check authentication status when the component loads
    let isAuthenticated = false;

    // You might want to use the onMount lifecycle function

    // The rest of your component logic for the protected route

</script>

<button class="submit" on:click={logo}>Sign in</button>
