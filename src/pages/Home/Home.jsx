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
	const [isData, setData] = useState();

	useEffect(() => {
		axios
			.get('http://localhost:3333/')
			.then(response => response.data)
			.then(data => setData(data));
	}, []);

	console.log(isData);

	const content = {
		title: isData?.content.title,
		name_title: isData?.content.name_title,
		name: isData?.content.name,
		description: isData?.content.description,
		btn_title: isData?.content.btn_title,
		portfolio: isData?.content.project,
		projects_recent: isData?.content.projects_recent,
		subtitle: isData?.content.subtitle,
		skills: isData?.content.skills,
		about: isData?.content.about,
		contact: isData?.content.contact,
	};

	const footer = {
		title: isData?.footer.title,
		label: isData?.footer.label,
		subtitle: isData?.footer.subtitle,
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
