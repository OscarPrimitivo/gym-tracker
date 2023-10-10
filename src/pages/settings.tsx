import { type NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NavBar from '~/components/navbar';

const Settings: NextPage = () => {
	const { data: sessionData, status } = useSession();
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		if (status === 'unauthenticated') {
			void router.push('/');
		} else if (status === 'loading') {
			setIsLoading(true);
		} else {
			setIsLoading(false);
		}
	}, [status, router]);

	if (isLoading) {
		return <></>;
	} else {
		return (
			<>
				<NavBar sessionData={sessionData}></NavBar>
				{/* create a account settings page with inputs for first name, last name, username, and password*/}
				<div className="flex flex-col items-center justify-center">
					<h1 className="text-2xl font-bold">Account Settings</h1>
					{/* create inputs that match the rest of the inputs of white and black and grey with routines, sessions, workouts */}
					<input
						className="mt-4 rounded-md bg-black px-4 py-2 text-white"
						placeholder="First Name"
					></input>
					<input
						className="mt-4 rounded-md bg-black px-4 py-2 text-white"
						placeholder="Last Name"
					></input>
					<input
						className="mt-4 rounded-md bg-black px-4 py-2 text-white"
						placeholder="Username"
					></input>
					<input
						className="mt-4 rounded-md bg-black px-4 py-2 text-white"
						placeholder="Password"
					></input>
				</div>
			</>
		);
	}
};

export default Settings;
