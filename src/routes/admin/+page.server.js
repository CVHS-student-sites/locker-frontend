import { redirect } from '@sveltejs/kit';

export async function load({ request }) {
    const authToken = request.headers.get('Authorization');

    console.log(authToken)
    try {
        console.log("hello")
        const response = await fetch('http://mysql-container/auth/checkAuth', {
            headers: {
                'Authorization': authToken
            }
        });
        console.log(response.ok)
        if (!response.ok) {
            throw redirect(302, '/login');
        }

        // Continue loading the route as usual
        return { props: {} };

    } catch (error) {
        console.error("Error checking authentication:", error);
        throw redirect(302, '/login');
    }
}