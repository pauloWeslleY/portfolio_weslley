import { Button } from '@chakra-ui/react';
import { CONTACT_BUTTONS, useColors } from './index';

export const getButtonsList = () =>
	CONTACT_BUTTONS.map(props => (
		<ButtonsList
			key={props.id}
			label={props.label}
			name={props.name}
			icons={props.icon}
			link={props.link}
			btn_color={props.color}
		/>
	));

const ButtonsList = ({ name, icons, link, btn_color, label }) => {
	const { THEME } = useColors();

	return (
		<Button
			role={'button'}
			arial-label={label}
			leftIcon={icons}
			size={'lg'}
			fontSize={'1.6rem'}
			transition={'all 0.6s ease-in'}
			color={btn_color}
			bg={THEME.BTN_CONTACT_BG_HOVER}
			_hover={{
				bg: btn_color,
				color: THEME.BTN_CONTACT_BG_LIGHT_HOVER,
				transform: 'translateY(-2px)',
				boxShadow: 'dark-lg',
			}}
			onClick={() => window.open(link)}
		>
			{name}
		</Button>
	);
};
