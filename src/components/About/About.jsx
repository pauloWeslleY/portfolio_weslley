import { memo, useEffect, useState } from 'react';
import { Container, Flex, useMediaQuery } from '@chakra-ui/react';
import axios from 'axios';
import { AboutContent, AboutProfile, HeadTitle, Wrapper, ScrollReveal, useColors } from './index';

import styles from './About.module.scss';

export const About = ({ title }) => {
	const { THEME } = useColors();
	const [isNotSmallerScreen] = useMediaQuery('min-width:(600px)');
	const [data, setData] = useState();

	useEffect(() => {
		axios
			.get('http://localhost:3333/')
			.then(response => response.data)
			.then(data => setData(data));
	}, []);

	const about = {
		name: data?.about_me.name,
		title: data?.about_me.title,
		job: data?.about_me.job,
		avatar: data?.about_me.avatar,
		image: data?.about_me.imageUrl,
		description: data?.about_me.description,
		description2: data?.about_me.description2,
		description3: data?.about_me.description3,
	};

	return (
		<Container maxW={'1545px'}>
			<Flex
				id={'about'}
				className={styles.hero__about}
				direction={isNotSmallerScreen ? 'row' : 'column'}
			>
				<ScrollReveal>
					<HeadTitle title={title} />
				</ScrollReveal>
				<Wrapper>
					<ScrollReveal>
						<Flex
							bg={THEME.BG_PAGE_SECTION}
							py={4}
							px={4}
							shadow={'xl'}
							rounded={'lg'}
							flexWrap={'wrap'}
							flexDirection={'row'}
						>
							<AboutContent
								name={about.name}
								img={'/images/paulo-wes.jpg'}
								description={about.description}
								description2={about.description2}
								description3={about.description3}
							/>

							<AboutProfile
								name={about.name}
								title={about.title}
								img={'/images/avatar_profile.jpg'}
								job={about.job}
							/>
						</Flex>
					</ScrollReveal>
				</Wrapper>
			</Flex>
		</Container>
	);
};

export default memo(About);
