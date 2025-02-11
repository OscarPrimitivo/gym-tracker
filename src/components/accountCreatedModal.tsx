import Link from 'next/link';
import React from 'react';

const AccountCreatedModal: React.FC = () => {
	return (
		<>
			<div className="fixed inset-0 flex items-center justify-center">
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="z-10 max-w-[23rem] rounded-lg bg-white p-8">
					<h1 className="text-center text-2xl text-black">
						Account Created!
					</h1>
					<p className="mb-4 text-center text-black">
						Your account has been created. You can now sign in.
					</p>
					<div className="flex flex-col items-center justify-center gap-4">
						<Link
							href="/auth/signin"
							className="rounded-full bg-black/10 px-10 py-3 font-semibold text-black no-underline transition hover:bg-black/20"
						>
							Sign In
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default AccountCreatedModal;
