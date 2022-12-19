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

export const About = ({ title }) => {
	const [isNotSmallerScreen] = useMediaQuery('min-width:(600px)');
	const [data, setData] = useState();

	const { THEME } = useColors();

	useEffect(() => {
		axios
			.get('http://localhost:3333/about')
			.then(response => response.data)
			.then(data => setData(data));
	}, []);

	return (
		<Container maxW={'1545px'}>
			<Flex id={'about'} direction={isNotSmallerScreen ? 'row' : 'column'} py={'3rem'}>
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
								name={data ? data?.content.name : ABOUT_PROPS.name}
								image={'/images/paulo-wes.jpg'}
								description={data ? data?.content.description : ABOUT_PROPS.description}
								description2={data ? data?.content.description2 : ABOUT_PROPS.description2}
								description3={data ? data?.content.description3 : ABOUT_PROPS.description3}
							/>

							<AboutProfile
								image={'/images/avatar_profile.jpg'}
								title={data ? data?.content.label : ABOUT_PROPS.title}
								work={data ? data?.content.work : ABOUT_PROPS.job}
							/>
						</Flex>
					</ScrollReveal>
				</Wrapper>
			</Flex>
		</Container>
	);
};

export default memo(About);
