import { Button } from '@chakra-ui/react';
import { Link } from 'react-scroll';

import { NAV_ITEMS, useColors } from './index';

export const getMenuItems = () =>
	NAV_ITEMS.map(props => <NavItems key={props.id} to={props.id} name={props.name} />);

const NavItems = ({ name, to }) => {
	const { THEME } = useColors();

	return (
		<Link activeClass={'active'} to={to} spy={true} smooth={true} offset={-10} duration={500}>
			<Button
				arial-label={'Button'}
				role={'button'}
				title={name}
				aria-label={name}
				variant={'ghost'}
				display={'inline-flex'}
				alignItems={'center'}
				fontSize={'4xl'}
				transition={'all 0.5s ease-in'}
				padding={'1.5rem'}
				color={THEME.NAV_ITEM_LIGHT_COLOR}
				_dark={{
					color: THEME.NAV_ITEM_DARK_COLOR,
					_hover: {
						color: THEME.NAV_ITEM_DARK_COLOR_HOVER,
						bg: THEME.NAV_ITEM_DARK_BG_HOVER,
						borderBottom: '0.2rem solid var(--blue-800)',
						padding: '0.5rem',
					},
				}}
				_hover={{
					color: THEME.NAV_ITEM_LIGHT_COLOR_HOVER,
					bg: THEME.NAV_ITEM_LIGHT_BG_HOVER,
					boxShadow: 'xl',
					borderBottom: '0.2rem solid var(--blue-600)',
					padding: '0.5rem',
				}}
				_focus={{ boxShadow: 'none' }}
			>
				{name}
			</Button>
		</Link>
	);
};
