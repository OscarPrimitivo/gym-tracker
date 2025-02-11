import type LayoutProps from '~/interfaces/layoutProps';
import NavBar from './navbar';

const Layout: React.FC<LayoutProps> = ({ sessionData, children }) => {
	return (
		<>
			<NavBar sessionData={sessionData ? sessionData : null}></NavBar>
			<main className="fit-h-screen flex flex-col items-center justify-center bg-white">
				{children}
			</main>
		</>
	);
};

export default Layout;
