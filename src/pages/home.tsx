import { type NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CurrentWorkoutDisplay from '~/components/currentWorkoutDisplay';
import NavBar from '~/components/navbar';

const Home: NextPage = () => {
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

	// Render
	if (isLoading) {
		return <></>;
	} else {
		return (
			<>
				<NavBar sessionData={sessionData ? sessionData : null}></NavBar>
				<main className="fit-h-screen flex flex-col items-center justify-center bg-white">
					Welcome, {sessionData?.user?.firstName}
					<CurrentWorkoutDisplay></CurrentWorkoutDisplay>
				</main>
			</>
		);
	}
};

export default Home;
