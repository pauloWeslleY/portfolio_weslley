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

	return (
		<main>
			<header>
				<ScrollReveal>
					<NavMenu title={'Portfolio'} />
				</ScrollReveal>
				<Head
					title={'Olá, Eu sou'}
					name={'Weslley de Lima'}
					description={
						'Desenvolvedor Web Front End Jr - HTML5 - CSS3 - SCSS - JavaScript - TypeScript - Bootstrap - ReactJs - Chakra-UI'
					}
					button_title={'Saiba Mais'}
				/>
			</header>

			<Divider
				h={'0.1rem'}
				my={{ base: '1rem', xs: '10rem' }}
				bgGradient={'linear(to-r, blue.10, blue.30, blue.100)'}
			/>

			<section>
				<Social />
				<Portfolio title={'Projetos'} subtitle={'Recentes'} />
				<Skills title={'Minhas Skills'} />
				<About title={'Sobre Mim'} />
				<Contact title={'Entre em Contatos'} />
			</section>

			<Divider
				h={'0.1rem'}
				my={{ base: '1.2rem', xs: '1rem' }}
				bgGradient={'linear(to-r, blue.10, blue.30, blue.100)'}
			/>

			<footer>
				<Footer
					title_footer={'Created by'}
					name_link={'Weslley Lima'}
					subtitle_footer={
						'© copyright 2022. Paulo Weslley de Lima Firmino - Todos os Direitos Reservados.'
					}
				/>
			</footer>
			<ButtonTop />
		</main>
	);
}
