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

import { CONTENT_PROPS, FOOTER_PROPS } from '../../data/content_[prop]';

export default function Home() {
	const [isData, setData] = useState();

	useEffect(() => {
		axios
			.get('http://localhost:3333/')
			.then(response => response.data)
			.then(data => setData(data));
	}, []);

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
		label: isData?.footer.label,
		name: isData?.footer.name,
		sub_label: isData?.footer.sub_label,
		link: isData?.footer.link,
	};

	return (
		<main>
			<header>
				<ScrollReveal>
					<NavMenu title={isData ? content.title : CONTENT_PROPS.title} />
				</ScrollReveal>
				<Head
					title={isData ? content.name_title : CONTENT_PROPS.name_title}
					name={isData ? content.name : CONTENT_PROPS.name}
					description={isData ? content.description : CONTENT_PROPS.description}
					button_title={isData ? content.btn_title : CONTENT_PROPS.btn_title}
				/>
			</header>

			<Divider
				h={'0.1rem'}
				my={{ base: '1rem', xs: '10rem' }}
				bgGradient={'linear(to-r, blue.10, blue.30, blue.100)'}
			/>

			<section>
				<Social />
				<Portfolio
					title={isData ? content.portfolio : CONTENT_PROPS.portfolio}
					subtitle={isData ? content.projects_recent : CONTENT_PROPS.projects_recent}
				/>
				<Skills title={isData ? content.skills : CONTENT_PROPS.skills} />
				<About title={isData ? content.about : CONTENT_PROPS.about} />
				<Contact title={isData ? content.contact : CONTENT_PROPS.contact} />
			</section>

			<Divider
				h={'0.1rem'}
				my={{ base: '1.2rem', xs: '1rem' }}
				bgGradient={'linear(to-r, blue.10, blue.30, blue.100)'}
			/>

			<footer>
				<Footer
					name={isData ? footer.name : FOOTER_PROPS.name}
					label={isData ? footer.label : FOOTER_PROPS.label}
					sub_label={isData ? footer.sub_label : FOOTER_PROPS.sub_label}
					link={isData ? footer.link : FOOTER_PROPS.link}
				/>
			</footer>
			<ButtonTop />
		</main>
	);
}
