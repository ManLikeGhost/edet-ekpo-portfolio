import React from 'react';
import superpow from '../assets/projects-file/superpow.png';
import getwelp from '../assets/projects-file/getwelp.png';
import afrimart from '../assets/projects-file/Afrimart.png';
import aiikiiMobile from '../assets/projects-file/aiikii-mobile.png';
import aiikiiMarketplace from '../assets/projects-file/aiikii-marketplace.png';
import keeway from '../assets/projects-file/keeway.png';
import filtergithub from '../assets/projects-file/filtergithub.png';
import starbucks from '../assets/projects-file/smart-contract-starbucks.png';
import DCLDI from '../assets/projects-file/DCLDIcontract.png';

const Projects = () => {
	const projects = [
		{
			title: 'Superpow',
			description:
				'Accessible Online Therapy: Find Your Ideal Therapist Easily and Affordably.',
			photo: superpow,
			link: 'https://www.superpow.ro/',
		},
		{
			title: 'Getwelp',
			description: 'An all in one place for your dog training business.',
			photo: getwelp,
			link: 'https://www.getwelp.com/',
		},
		{
			title: 'Afrimart',
			description:
				"Africa's First B2B Trade Platform: Boosting SME Growth with Scalable Solutions.",
			photo: afrimart,
			link: 'https://afrimart.com/en',
		},
	];
	const moreRecent = [
		{
			title: 'Aiikii Mobile app',
			description:
				'Instant Connection to Top-Rated Services. From plumbers to babysitters, get things done with ease.',
			photo: aiikiiMobile,
			link: 'http://aiikii.com/',
		},
		{
			title: 'Aiikii Marketplace',
			description:
				'E-commerce app for Top-Rated Service providers to buy materials.',
			photo: aiikiiMarketplace,
			// link: '',
		},
		{
			title: 'Keeway: Co-founder',
			description:
				'Borderless Transactions, Universal payment using any crypto-currency.',
			photo: keeway,
			link: 'https://keeway-waitlist.vercel.app/',
		},
	];
	const funStuff = [
		{
			title: 'Filter Github User',
			description: 'A simple App to fetch and find github users.',
			photo: filtergithub,
			link: 'https://filtergithubuser32456789.netlify.app/',
		},
		{
			title: 'Smart contract to buy beverages',
			description: 'A parody online starbucks to buy beverages using crypto',
			photo: starbucks,
			link: 'https://github.com/ManLikeGhost/starbucks-shop',
		},
		{
			title: 'DCLDI contract with doliacats',
			description:
				'Dolia Cats Digital Identity allows you to store your digital assets in a safe way.',
			photo: DCLDI,
			// link: '',
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
								{project.link && (
									<a href={project.link} target='_blank' rel='noreferrer'>
										<button className='btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary w-full'>
											Link
										</button>
									</a>
								)}
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
								{project.link && (
									<a href={project.link} target='_blank' rel='noreferrer'>
										<button className='btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary w-full'>
											Link
										</button>
									</a>
								)}
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
								{project.link && (
									<a href={project.link} target='_blank' rel='noreferrer'>
										<button className='btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary w-full'>
											Link
										</button>
									</a>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
