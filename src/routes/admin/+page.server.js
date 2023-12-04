import { redirect } from '@sveltejs/kit';
import.meta.env.MODE

export async function load({ cookies }) {
    console.log(process.env.NODE_ENV);
    console.log(meta.env.MODE);
    
    const auth = cookies.get('connect.sid');
    

    try {
        const response = await fetch('http://locker-backend:3000/auth/checkAuth', {
            credentials: 'include', // Include credentials (cookies) with the request
            headers: {
                'Cookie': `connect.sid=${auth}`, // Set the Cookie header with the cookie value
            },
        });

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
