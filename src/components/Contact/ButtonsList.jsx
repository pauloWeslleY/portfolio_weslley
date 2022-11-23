import { Button } from '@chakra-ui/react';
import { CONTACT_BUTTONS, useColors } from './index';

export const getButtonsList = () =>
	CONTACT_BUTTONS.map(btnProps => (
		<ButtonsList
			key={btnProps.id}
			arial={btnProps.name_label}
			name={btnProps.name}
			icons={btnProps.icon}
			link={btnProps.link}
			btn_color={btnProps.color}
		/>
	));

const ButtonsList = ({ name, icons, link, btn_color, arial }) => {
	const { THEME } = useColors();

	return (
		<Button
			arial-label={'Button'}
			// w={"25rem"}
			role={'button'}
			aria-label={arial}
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
