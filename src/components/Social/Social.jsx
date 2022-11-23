import { memo } from 'react';
import { Flex, HStack, IconButton } from '@chakra-ui/react';
import { SOCIAL_ICONS, ScrollReveal, useColors } from './index';

const showIcons = () =>
	SOCIAL_ICONS.map(item => {
		const { THEME } = useColors();
		return (
			<IconButton
				key={item.id}
				icon={item.icons}
				aria-label={item.name}
				isRound={true}
				size={'7rem'}
				fontSize={'20rem'}
				boxSize={'50'}
				transition={'all 0.4s ease-in-out'}
				color={THEME.BTN_ICON_SOCIAL_COLOR_LIGHT}
				bg={THEME.BTN_ICON_SOCIAL_BG}
				_dark={{
					color: THEME.BTN_ICON_SOCIAL_COLOR_DARK,
					_hover: {
						color: THEME.BTN_ICON_SOCIAL_COLOR_DARK_HOVER,
					},
				}}
				_hover={{
					color: THEME.BTN_ICON_SOCIAL_COLOR_LIGHT_HOVER,
					transform: 'scale(110%)',
				}}
				onClick={() => window.open(item.link)}
			/>
		);
	});

export const Social = () => {
	return (
		<ScrollReveal>
			<Flex
				mt={{
					base: '5rem',
					lg: '10rem',
				}}
				alignItems={'center'}
				justifyContent={'center'}
			>
				<HStack spacing={[10, 10, 20, 20]}>{showIcons()}</HStack>
			</Flex>
		</ScrollReveal>
	);
};

export default memo(Social);
