import { memo } from 'react';
import { Flex, chakra, Text, Container } from '@chakra-ui/react';

import { FooterIcon, useColors } from './index';

import styles from './styles.module.scss';

export const Footer = props => {
	const { name, label, sub_label, link } = props;
	const { THEME } = useColors();

	return (
		<footer className={styles.footer__hero}>
			<Container maxW={'container.xl'}>
				<Flex
					as={'footer'}
					flexDir={{
						base: 'column',
						sm: 'row',
					}}
					alignItems={'center'}
					justify={'space-around'}
				>
					<Flex basis={'7rem'} flexGrow={1} flexShrink={1} align={'center'} justify={'center'}>
						<chakra.p
							fontSize={'xl'}
							fontWeight={'extrabold'}
							letterSpacing={'0.03rem'}
							color={THEME.FOOTER_TEXT_COLOR_LIGHT}
							_dark={{
								color: THEME.FOOTER_TEXT_COLOR_DARK,
							}}
						>
							{label}{' '}
							<chakra.a
								p={'0.3rem'}
								href={link}
								color={THEME.FOOTER_LINK_COLOR_LIGHT}
								_dark={{
									color: THEME.FOOTER_LINK_COLOR_DARK,
									_hover: {
										color: THEME.FOOTER_LINK_COLOR_DARK_HOVER,
									},
								}}
								transition={'all 0.5s ease-in-out'}
								_hover={{
									color: THEME.FOOTER_LINK_COLOR_DARK,
									transform: 'translateY(-2px)',
									boxShadow: 'dark-lg',
								}}
							>
								{name}
							</chakra.a>
						</chakra.p>
					</Flex>
					<Flex
						basis={'7rem'}
						flexGrow={1}
						flexShrink={1}
						align={'center'}
						justify={'center'}
						p={4}
					>
						<FooterIcon />
					</Flex>
					<Flex basis={'7rem'} flexGrow={1} flexShrink={1} align={'center'} justify={'center'}>
						<Text
							as={'span'}
							textAlign={'center'}
							fontSize={{ base: 'smaller', sm: '1.3rem' }}
						>
							{sub_label}
						</Text>
					</Flex>
				</Flex>
			</Container>
		</footer>
	);
};

export default memo(Footer);
