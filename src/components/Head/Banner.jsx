import { memo } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { BlobIcon, LogoBanner, useColors, ScrollReveal } from './index';

export const Banner = () => {
	const { THEME } = useColors();

	return (
		<section>
			<BlobIcon
				w={'150%'}
				h={'150%'}
				position={'absolute'}
				top={'-20%'}
				left={0}
				opacity={'0.1'}
				zIndex={-1}
				color={THEME.BLOB_BANNER_BG_SECTION}
			/>
			<Box
				borderRadius={'full'}
				backgroundColor={'transparent'}
				boxShadow={'xl'}
				boxSize={'30rem'}
				overflow={'hidden'}
			>
				<ScrollReveal>
					<Image alt={'Hero Image'} fit={'cover'} align={'center'} src={LogoBanner} />
				</ScrollReveal>
			</Box>
		</section>
	);
};

export default memo(Banner);
