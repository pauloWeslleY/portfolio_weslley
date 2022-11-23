import { memo } from 'react';
import { Flex, IconButton } from '@chakra-ui/react';
import { useColors, FOOTER_ICONS } from './index';

export const FooterIcon = () => {
	const { THEME } = useColors();

	return (
		<Flex gap={2}>
			{FOOTER_ICONS.map(props => (
				<IconButton
					key={props.id}
					arial-label={props.name}
					bg={'transparent'}
					icon={props.icons}
					isRound={true}
					boxSize={'3.4rem'}
					size={'lg'}
					fontSize={'2rem'}
					transition={'all 0.5s ease-in'}
					color={THEME.BTN_ICON_FOOTER_COLOR}
					_hover={{
						background: props.back_ground,
						color: 'whiteAlpha.900',
						transform: 'translateY(-2px)',
						boxShadow: 'dark-lg',
					}}
					onClick={() => window.open(props.link)}
				/>
			))}
		</Flex>
	);
};

export default memo(FooterIcon);
