import { memo } from 'react';
import { Box, Flex, Image, chakra } from '@chakra-ui/react';
import { AboutParagraph, useColors } from './index';

export const AboutContent = props => {
	const { name, image, description, description2, description3 } = props;
	const paragraphs = [description, description2, description3];

	const { THEME } = useColors();

	return (
		<Flex
			flexDir={'column'}
			flexBasis={'60px'}
			flexGrow={6}
			flexShrink={1}
			py={4}
			px={8}
			bg={THEME.ABOUT_CONTENT_BG}
			shadow={'lg'}
			rounded={'lg'}
		>
			<Flex
				justifyContent={{
					base: 'center',
					md: 'end',
				}}
				mt={-16}
			>
				<Image
					alt={'Foto do Desenvolvedor deste Site'}
					src={image}
					w={20}
					h={20}
					fit={'cover'}
					align={'center'}
					rounded={'full'}
					borderColor={THEME.ABOUT_CONTENT_BORDER_COLOR_LIGHT}
					borderStyle={'solid'}
					borderWidth={2}
					_dark={{
						borderColor: THEME.ABOUT_CONTENT_BORDER_COLOR_DARK,
						borderWidth: '0.2rem',
						borderStyle: 'solid',
					}}
				/>
			</Flex>
			<chakra.h2
				color={THEME.ABOUT_CONTENT_TITLE_COLOR_LIGHT}
				_dark={{
					color: THEME.ABOUT_CONTENT_TITLE_COLOR_DARK,
				}}
				fontSize={{
					base: '2xl',
					md: '2.5rem',
				}}
				mt={{
					base: 2,
					md: 0,
				}}
				fontWeight={'bold'}
			>
				{name}
			</chakra.h2>
			<Box py={'2rem'} lineHeight={'3.3rem'} textAlign={'justify'}>
				{paragraphs.map((item, index) => (
					<AboutParagraph key={index} content={item} />
				))}
			</Box>
		</Flex>
	);
};

export default memo(AboutContent);
