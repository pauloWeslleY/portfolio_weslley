import { memo } from 'react';
import { Container, Flex, useMediaQuery } from '@chakra-ui/react';
import { HeadTitle, Wrapper, PortfolioCardItem, PORTFOLIO, ScrollReveal } from './index';

export const Portfolio = ({ title, subtitle }) => {
	const [isNotSmallerScreen] = useMediaQuery('min-width:(600px)');

	return (
		<Container maxW={'1545px'}>
			<Flex id={'project'} direction={isNotSmallerScreen ? 'row' : 'column'} py={'3rem'}>
				<ScrollReveal>
					<HeadTitle title={title} subtitle={subtitle} />
				</ScrollReveal>
				<Wrapper>
					<ScrollReveal>
						<Flex flexWrap={'wrap'} gap={'2rem'} shadow={'xl'} rounded={'lg'}>
							{PORTFOLIO.map((items, index) => (
								<PortfolioCardItem
									key={index}
									image={items.image}
									title={items.title}
									name={items.name}
									tech={items.tech}
									techlist={items.techlist}
									git={items.git}
									github={items.github}
									livePreview={items.live}
									link={items.link}
								/>
							))}
						</Flex>
					</ScrollReveal>
				</Wrapper>
			</Flex>
		</Container>
	);
};

export default memo(Portfolio);
