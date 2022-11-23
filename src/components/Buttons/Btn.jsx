import { Button } from '@chakra-ui/react';
import { memo } from 'react';
import { useColors } from './../../hooks/useColors';

export const Btn = ({ name, link, icon }) => {
	const { THEME } = useColors();

	return (
		<Button
			aria-label={'Button'}
			role={'button'}
			leftIcon={icon}
			p={1}
			borderRadius={'2rem'}
			size={{
				base: 'lg',
				sm: 'md',
			}}
			fontSize={{
				base: '2rem',
				sm: '1.4rem',
			}}
			fontWeight={'regular'}
			transition={'all 0.5s ease-in'}
			bg={THEME.BTN_BG_PORTFOLIO}
			color={THEME.BTN_COLORS_LIGHT}
			_hover={{
				bg: THEME.BTN_BG_LIGHT_HOVER,
				color: THEME.BTN_COLORS_LIGHT_HOVER,
				transform: 'translateY(-2px)',
				boxShadow: 'dark-lg',
			}}
			_dark={{
				color: THEME.BTN_COLORS_DARK,
				_hover: {
					bg: THEME.BTN_BG_DARK_HOVER,
					color: THEME.BTN_COLORS_DARK_HOVER,
				},
			}}
			onClick={() => window.open(link)}
		>
			{name}
		</Button>
	);
};

export default memo(Btn);
