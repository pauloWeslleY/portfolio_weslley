import { memo } from 'react';
import { Link } from 'react-scroll';
import { Stack, Flex, Container } from '@chakra-ui/react';

import { BtnHead, Banner, Header, ScrollReveal } from './index';

export const Head = props => {
	const { title, name, description, button_title } = props;

	return (
		<Container maxW={'container.xl'}>
			<Stack
				h={'87vh'}
				id={'home'}
				align={'center'}
				spacing={{ base: '8rem', md: '15rem' }}
				py={{ base: '2rem', xs: '2rem', md: '10rem' }}
				px={{ base: '1rem', xs: '4rem', md: '2rem' }}
				direction={{ base: 'column', md: 'row' }}
			>
				<Stack flex={1} spacing={{ base: 5, md: 10 }}>
					<Header name={name} title={title} description={description} />
					<Stack
						spacing={{ base: 4, sm: 6 }}
						direction={{ base: 'column', sm: 'row' }}
						width={'10rem'}
					>
						<Link
							activeClass={'active'}
							to={'project'}
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
						>
							<ScrollReveal>
								<BtnHead name={button_title} />
							</ScrollReveal>
						</Link>
					</Stack>
				</Stack>
				<Flex flex={1} justify={'center'} align={'center'} position={'relative'}>
					<Banner />
				</Flex>
			</Stack>
		</Container>
	);
};

export default memo(Head);
