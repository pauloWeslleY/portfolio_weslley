import { Divider } from '@chakra-ui/react';

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
	return (
		<main>
			<header>
				<ScrollReveal>
					<NavMenu title={CONTENT_PROPS.title} />
				</ScrollReveal>
				<Head
					title={CONTENT_PROPS.name_title}
					name={CONTENT_PROPS.name}
					description={CONTENT_PROPS.description}
					button_title={CONTENT_PROPS.btn_title}
				/>
			</header>

			<Divider
				h={'0.1rem'}
				my={{ base: '1rem', xs: '10rem' }}
				bgGradient={'linear(to-r, blue.10, blue.30, blue.100)'}
			/>

			<section>
				<Social />
				<Portfolio title={CONTENT_PROPS.project} subtitle={CONTENT_PROPS.projects_recent} />
				<Skills title={CONTENT_PROPS.skills} />
				<About title={CONTENT_PROPS.about} />
				<Contact title={CONTENT_PROPS.contact} />
			</section>

			<Divider
				h={'0.1rem'}
				my={{ base: '1.2rem', xs: '1rem' }}
				bgGradient={'linear(to-r, blue.10, blue.30, blue.100)'}
			/>

			<footer>
				<Footer
					name={FOOTER_PROPS.name}
					label={FOOTER_PROPS.label}
					sub_label={FOOTER_PROPS.copyright}
					link={FOOTER_PROPS.link}
				/>
			</footer>
			<ButtonTop />
		</main>
	);
}
