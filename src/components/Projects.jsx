import React from 'react';
// https://www.superpow.ro/
// https://www.getwelp.com/
// https://afrimart.com/en

// http://aiikii.com/
// http://marketplace.aiikii.com/
// https://keeway-waitlist.vercel.app/

const Projects = () => {
	const projects = [
		{
			title: 'Superpow',
			description:
				'Accessible Online Therapy: Find Your Ideal Therapist Easily and Affordably.',
			photo: '/src/assets/projects/superpow.png',
			link: 'https://www.superpow.ro/',
		},
		{
			title: 'Getwelp',
			description: 'An all in one place for your dog training business.',
			photo: '/src/assets/projects/getwelp.png',
			link: 'https://www.getwelp.com/',
		},
		{
			title: 'Afrimart',
			description:
				'Africas First B2B Trade Platform: Boosting SME Growth with Scalable Solutions.',
			photo: '/src/assets/projects/Afrimart.png',
			link: 'https://afrimart.com/en',
		},
	];
	const moreRecent = [
		{
			title: 'Aiikii-Mobile',
			description:
				'Instant Connection to Top-Rated Services. From plumbers to babysitters, get things done with ease.',
			photo: '/src/assets/projects/aiikii-mobile.png',
			link: 'http://aiikii.com/',
		},
		{
			title: 'Aiikii-Marketplace',
			description:
				'E-commerce app for Top-Rated Service providers to buy materials.',
			photo: '/src/assets/projects/aiikii-marketplace.png',
			link: 'http://marketplace.aiikii.com/',
		},
		{
			title: 'Co-founder:Keeway',
			description:
				'Borderless Transactions, Universal payment using any crypto-currency.',
			photo: '/src/assets/projects/keeway.png',
			link: 'https://keeway-waitlist.vercel.app/',
		},
	];
	const funStuff = [
		{
			title: 'Filter-Github-User',
			description: 'A simple App to fetch and find github users.',
			photo: '/src/assets/projects/filtergithub.png',
			link: 'https://filtergithubuser32456789.netlify.app/',
		},
		{
			title: 'Smart-contract-to-buy-beverages',
			description: 'A parody online starbucks to buy beverages using crypto',
			photo: '/src/assets/projects/smart-contract-starbucks.png',
			link: 'https://github.com/ManLikeGhost/starbucks-shop',
		},
		{
			title: 'DCLDIcontract-with-doliacats',
			description:
				'Dolia Cats Digital Identity allows you to store your digital assets in a safe way.',
			photo: '/src/assets/projects/DCLDIcontract.png',
			link: 'https://github.com/Crypto-Nautilus/DCLDIcontract',
		},
	];

	return (
		<div className='md:px-10 px-7 my-8' id='projects'>
			<h1 className='text-primary font-semibold text-3xl mt-16'>
				Featured projects:
			</h1>
			<p className='my-3 text-white md:w-3/4 leading-[2]'>
				I have worked on many projects over the course of being a Web Developer
				and Mobile Developer, here are a few of my live, real-world projects
			</p>
			{/* featured projects */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center'>
				{projects.map((project, index) => {
					return (
						<div
							key={index}
							className='flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded'
						>
							<a
								href={project.photo}
								target='_blank'
								rel='noreferrer'
								className='mb-4'
							>
								<img src={project.photo} alt={project.title} />
							</a>
							<h3 className='text-primary font-semibold text-lg'>
								{project.title}
							</h3>
							<p className=' text-white mt-1'>{project.description}</p>
							<div className='mt-5'>
								<a href={project.link} target='_blank' rel='noreferrer'>
									<button className='btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary w-full'>
										Link
									</button>
								</a>
								{/* <button className='btn outline py-1.5 px-9 rounded border-none ml-5 text-white '>
									Projects
								</button> */}
							</div>
						</div>
					);
				})}
			</div>
			<h4 className='text-primary font-semibold text-2xl mt-4'>Others:</h4>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center'>
				{moreRecent.map((project, index) => {
					return (
						<div
							key={index}
							className='flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded'
						>
							<a
								href={project.photo}
								target='_blank'
								rel='noreferrer'
								className='mb-4'
							>
								<img src={project.photo} alt={project.title} />
							</a>
							<h3 className='text-primary font-semibold text-lg'>
								{project.title}
							</h3>
							<p className=' text-white mt-1'>{project.description}</p>
							<div className='mt-5'>
								<a href={project.link} target='_blank' rel='noreferrer'>
									<button className='btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary w-full'>
										Link
									</button>
								</a>
								{/* <button className='btn outline py-1.5 px-9 rounded border-none ml-5 text-white '>
									Projects
								</button> */}
							</div>
						</div>
					);
				})}
			</div>
			<h4 className='text-primary font-semibold text-2xl mt-4'>
				Personal Projects:
			</h4>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center'>
				{funStuff.map((project, index) => {
					return (
						<div
							key={index}
							className='flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded'
						>
							<a
								href={project.photo}
								target='_blank'
								rel='noreferrer'
								className='mb-4'
							>
								<img src={project.photo} alt={project.title} />
							</a>
							<h3 className='text-primary font-semibold text-lg'>
								{project.title}
							</h3>
							<p className=' text-white mt-1'>{project.description}</p>
							<div className='mt-5'>
								<a href={project.link} target='_blank' rel='noreferrer'>
									<button className='btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary w-full'>
										Link
									</button>
								</a>
								{/* <button className='btn outline py-1.5 px-9 rounded border-none ml-5 text-white '>
									Projects
								</button> */}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
