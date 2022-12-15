import { memo } from 'react';
import { Button } from '@chakra-ui/react';
import { useColors } from './../../hooks/useColors';

export const BtnHead = ({ name }) => {
	const { THEME } = useColors();

	return (
		<Button
			arial-label={'Botão que leva para sessão de projetos'}
			role={'button'}
			borderRadius={'2rem'}
			size={'lg'}
			height={'4.8rem'}
			fontSize={'1.5rem'}
			fontWeight={'semibold'}
			px={'6rem'}
			transition={'all 0.4s ease-in'}
			bg={THEME.BTN_HEAD_BG}
			color={THEME.BTN_HEAD_COLORS}
			_hover={{
				bg: THEME.BTN_HEAD_BG_HOVER,
				color: THEME.BTN_HEAD_COLORS_HOVER,
				transform: 'translateY(-2px)',
				boxShadow:
					'0px 1px 25px -5px rgb(11 196 235 / 48%), 0 10px 10px -5px rgb(11 196 235 / 43%)',
			}}
		>
			{name}
		</Button>
	);
};

export default memo(BtnHead);
