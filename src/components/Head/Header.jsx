import { memo } from 'react';
import { Heading, Text, chakra, Flex } from '@chakra-ui/react';
import { ScrollReveal, useColors } from './index';

export const Header = ({ title, name, description }) => {
	const { THEME } = useColors();

	return (
		<Flex direction={'column'}>
			<ScrollReveal>
				<Heading
					lineHeight={1.1}
					fontWeight={'extrabold'}
					fontSize={{
						base: '3.5rem',
						sm: '6rem',
					}}
					as={'h2'}
				>
					<Text
						as={'span'}
						position={'relative'}
						_after={{
							content: "''",
							width: 'full',
							height: '30%',
							position: 'absolute',
							bottom: 1,
							left: 0,
							bg: 'cyan.400',
							zIndex: -1,
							marginBottom: '0.11rem',
						}}
					>
						{title}
					</Text>
					<br />
					<chakra.p
						as={'span'}
						fontWeight={'semibold'}
						bgGradient={'linear(to-r, blue.20, blue.30, red.10)'}
						bgClip={'text'}
					>
						{name}
					</chakra.p>
				</Heading>
			</ScrollReveal>
			<ScrollReveal>
				<Text as={'span'} color={THEME.HEADER_DESCRIPTION_COLORS}>
					{description}
				</Text>
			</ScrollReveal>
		</Flex>
	);
};

export default memo(Header);
