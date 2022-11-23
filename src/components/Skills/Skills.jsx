import { memo } from 'react';
import { Container, Flex, useMediaQuery } from '@chakra-ui/react';
import { SkillsItem, HeadTitle, Wrapper, SKILLS, ScrollReveal, useColors } from './index';

import styles from './Skills.module.scss';

export const Skills = ({ title }) => {
	const [isNotSmallerScreen] = useMediaQuery('min-width:(600px)');
	const { THEME } = useColors();

	const SkillsList = () =>
		SKILLS.map(props => (
			<SkillsItem
				key={props.name}
				name={props.name}
				icons={props.icons}
				color={props.color}
				description={props.description}
				experience={props.experience}
			/>
		));

	return (
		<Container maxW={'1545px'}>
			<Flex
				id={'skills'}
				className={styles.hero__skills_container}
				direction={isNotSmallerScreen ? 'row' : 'column'}
			>
				<ScrollReveal>
					<HeadTitle title={title} />
				</ScrollReveal>
				<Wrapper>
					<ScrollReveal>
						<Flex bg={THEME.BG_PAGE_SECTION} shadow={'xl'} rounded={'lg'} flexWrap={'wrap'}>
							{SkillsList()}
						</Flex>
					</ScrollReveal>
				</Wrapper>
			</Flex>
		</Container>
	);
};

export default memo(Skills);
