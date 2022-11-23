import { memo } from 'react';
import { Flex, Stack, SimpleGrid, useMediaQuery, Container } from '@chakra-ui/react';
import { ContactBox, HeadTitle, Wrapper, getButtonsList, ScrollReveal, useColors } from './index';

export const Contact = ({ title }) => {
	const [isNotSmallerScreen] = useMediaQuery('min-width:(600px)');
	const { THEME } = useColors();

	return (
		<Container maxW={'1545px'}>
			<Flex id={'contact'} py={'11rem'} direction={isNotSmallerScreen ? 'row' : 'column'}>
				<ScrollReveal>
					<HeadTitle title={title} />
				</ScrollReveal>
				<Wrapper>
					<ScrollReveal>
						<Flex
							bg={THEME.BG_PAGE_SECTION}
							shadow={'xl'}
							rounded={'xl'}
							alignItems={'center'}
							justify={'center'}
							flexWrap={'wrap'}
						>
							<ContactBox />

							<Stack pb={5}>
								<SimpleGrid minChildWidth={'4rem'} spacing={'0.5rem'}>
									<Flex
										p={2}
										gap={2}
										direction={'row'}
										wrap={'wrap'}
										align={'center'}
										justify={'center'}
									>
										{getButtonsList()}
									</Flex>
								</SimpleGrid>
							</Stack>
						</Flex>
					</ScrollReveal>
				</Wrapper>
			</Flex>
		</Container>
	);
};

export default memo(Contact);
