import { memo, useEffect, useState } from 'react';
import { Container, Flex, useMediaQuery } from '@chakra-ui/react';
import axios from 'axios';
import {
	AboutContent,
	AboutProfile,
	HeadTitle,
	Wrapper,
	ScrollReveal,
	useColors,
	ABOUT_PROPS,
} from './index';

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
								name={data ? about.name : ABOUT_PROPS.name}
								img={'/images/paulo-wes.jpg'}
								description={data ? about.description : ABOUT_PROPS.description}
								description2={data ? about.description2 : ABOUT_PROPS.description2}
								description3={data ? about.description3 : ABOUT_PROPS.description3}
							/>

							<AboutProfile
								name={data ? about.name : ABOUT_PROPS.name}
								title={data ? about.title : ABOUT_PROPS.title}
								img={'/images/avatar_profile.jpg'}
								job={data ? about.jog : ABOUT_PROPS.job}
							/>
						</Flex>
					</ScrollReveal>
				</Wrapper>
			</Flex>
		</Container>
	);
};

export default memo(About);
