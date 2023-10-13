import { redirect } from '@sveltejs/kit';

// export async function load({ request }) {
//     const authToken = request.headers.get('Authorization');

//     console.log(request)
//     try {
//         console.log("hello")
//         const response = await fetch('http://locker-backend:3000/auth/checkAuth', {
//             headers: {
//                 'Authorization': authToken
//             }
//         });
//         console.log(response.ok)
//         if (!response.ok) {
//             throw redirect(302, '/login');
//         }

//         // Continue loading the route as usual
//         return { props: {} };

//     } catch (error) {
//         console.error("Error checking authentication:", error);
//         throw redirect(302, '/login');
//     }
// }

export function load({ cookies }) {
	const visited = cookies.get('connect.sid');

	// cookies.set('visited', 'true', { path: '/' });

	console.log(visited)
}