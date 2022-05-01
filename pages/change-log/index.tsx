import { FC, useEffect } from 'react';
import { BookmarkIcon } from '@heroicons/react/solid';

const versions = [
	{
		versionString: '1.0.3',
		desc: 'Implement report button. You now can report users with inappropriate actions.',
		date: 'May 1',
		datetime: '2022-05-01',
	},
	{
		versionString: '1.0.2',
		desc: 'Minor user interface changes.',
		date: 'April 25',
		datetime: '2022-04-25',
	},
	{
		versionString: '1.0.1',
		desc: 'Minor bug fixes.',
		date: 'April 23',
		datetime: '2022-04-23',
	},
	{
		versionString: '1.0.0',
		desc: 'Initial release.',
		date: 'April 20',
		datetime: '2022-04-20',
	},
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}
const ChangeLog: FC = () => {
	return (
		<main>
			<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
				<div className="text-center">
					<h2 className="text-base font-semibold text-denison-red tracking-wide uppercase">
						DeerX
					</h2>
					<p className="mt-1 text-4xl font-extrabold text-denison-red sm:text-5xl sm:tracking-tight lg:text-6xl">
						Change Log
					</p>
				</div>
				<div className="flow-root w-3/4 mx-auto mt-12 pt-12 border-t border-pink">
					<ul role="list" className="-mb-8">
						{versions.map((version, id) => (
							<li key={id}>
								<div className="relative pb-8">
									{id !== versions.length - 1 ? (
										<span
											className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-denison-red"
											aria-hidden="true"
										/>
									) : null}
									<div className="relative flex space-x-3">
										<div>
											<span
												className={classNames(
													'bg-pink h-8 w-8 rounded-full flex items-center justify-center'
												)}
											>
												<BookmarkIcon
													className="h-5 w-5 text-gray"
													aria-hidden="true"
												/>
											</span>
										</div>
										<div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4 text-md">
											<div>
												<p className="text-denison-red">
													{version.versionString}
												</p>
												<p className="text-pink">{version.desc}</p>
											</div>
											<div className="text-right text-sm whitespace-nowrap text-denison-red">
												<time dateTime={version.datetime}>{version.date}</time>
											</div>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</main>
	);
};

export default ChangeLog;
