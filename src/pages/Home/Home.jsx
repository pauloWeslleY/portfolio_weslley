import { useState, useEffect } from 'react';
import { Divider } from '@chakra-ui/react';
import axios from 'axios';

import { Head, NavMenu } from '../../components/Head';
import { Social } from '../../components/Social';
import { Portfolio } from '../../components/Portfolio';
import { Skills } from '../../components/Skills';
import { About } from '../../components/About';
import { Contact } from '../../components/Contact';
import { Footer } from '../../components/Footer';
import { ButtonTop } from '../../components/ButtonToTop';

import { ScrollReveal } from '../../hooks/useScrollReveal';

export default function Home() {
	const [data, setData] = useState();

	useEffect(() => {
		axios
			.get('http://localhost:3333/')
			.then(response => response.data)
			.then(data => setData(data));
	}, []);

	console.log('home:', data);

	const content = {
		title: data?.content.title,
		name_title: data?.content.name_title,
		name: data?.content.name,
		description: data?.content.description,
		btn_title: data?.content.btn_title,
		portfolio: data?.content.project,
		projects_recent: data?.content.projects_recent,
		subtitle: data?.content.subtitle,
		skills: data?.content.skills,
		about: data?.content.about,
		contact: data?.content.contact,
	};

	const footer = {
		title: data?.footer.title,
		label: data?.footer.label,
		subtitle: data?.footer.subtitle,
	};

	return (
		<main>
			<header>
				<ScrollReveal>
					<NavMenu title={content.title} />
				</ScrollReveal>
				<Head
					title={content.name_title}
					name={content.name}
					description={content.description}
					button_title={content.btn_title}
				/>
			</header>

			<Divider
				h={'0.1rem'}
				my={{ base: '1rem', xs: '10rem' }}
				bgGradient={'linear(to-r, blue.10, blue.30, blue.100)'}
			/>

			<section>
				<Social />
				<Portfolio title={content.portfolio} subtitle={content.projects_recent} />
				<Skills title={content.skills} />
				<About title={content.about} />
				<Contact title={content.contact} />
			</section>

			<Divider
				h={'0.1rem'}
				my={{ base: '1.2rem', xs: '1rem' }}
				bgGradient={'linear(to-r, blue.10, blue.30, blue.100)'}
			/>

			<footer>
				<Footer
					title_footer={footer.title}
					name_link={footer.label}
					subtitle_footer={footer.subtitle}
				/>
			</footer>
			<ButtonTop />
		</main>
	);
}
