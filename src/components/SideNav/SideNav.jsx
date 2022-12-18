import { memo } from 'react';
import {
	Flex,
	Avatar,
	Heading,
	Button,
	IconButton,
	DrawerOverlay,
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	useDisclosure,
	chakra,
} from '@chakra-ui/react';
import { Link } from 'react-scroll';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';

import { useColors, NAV_ITEMS } from './index';

export const SideNav = ({ name, last_name }) => {
	const { THEME } = useColors();
	const mobileNav = useDisclosure();

	const getMenuMobileItems = () =>
		NAV_ITEMS.map(props => (
			<Link
				key={props.id}
				activeClass={'active'}
				to={props.id}
				spy={true}
				smooth={true}
				offset={30}
				duration={800}
			>
				<Button
					fontSize={'3xl'}
					w={'full'}
					variant={'ghost'}
					leftIcon={props.icon}
					transition={'all 0.5s ease-in-out'}
					color={THEME.SIDE_NAV_BTN_COLORS}
					_hover={{
						boxShadow: 'dark-lg',
					}}
					onClick={mobileNav.onClose}
				>
					{props.name}
				</Button>
			</Link>
		));

	return (
		<section>
			<IconButton
				display={{
					base: 'flex',
					md: 'flex',
					lg: 'none',
					xl: 'none',
				}}
				aria-label={'Open menu'}
				fontSize={'2.5rem'}
				variant={'ghost'}
				color={THEME.BUTTON_ICON_MOBILE}
				icon={<AiOutlineMenu />}
				onClick={mobileNav.onOpen}
			/>
			<Drawer
				placement={'top'}
				onClose={mobileNav.onClose}
				isOpen={mobileNav.isOpen}
				size={'sm'}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader bg={THEME.SIDE_NAV_BG} borderBottomWidth={'0.2rem'}>
						<Flex justify={'center'} alignItems={'center'} gap={3}>
							<Avatar bg={'transparent'} name={'Logo Icon'} src={'/favicon.png'} />{' '}
							<Heading>
								{name} <chakra.span>{last_name}</chakra.span>
							</Heading>
							<IconButton
								aria-label={'Close menu'}
								fontSize={'2.5rem'}
								variant={'ghost'}
								color={THEME.BUTTON_ICON_MOBILE}
								icon={<IoClose />}
								onClick={mobileNav.onClose}
							/>
						</Flex>
					</DrawerHeader>
					<DrawerBody
						color={THEME.SIDE_NAV_COLOR}
						bgGradient={'linear(to-b, cyan.100, cyan.300, white.100)'}
						_dark={{
							bgGradient: 'linear(to-b, blue.900, blue.500, cyan.800)',
						}}
					>
						<Flex direction={'column'} py={50} spacing={20} gap={20}>
							{getMenuMobileItems()}
						</Flex>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</section>
	);
};

export default memo(SideNav);
