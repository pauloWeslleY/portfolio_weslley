import { memo } from 'react';
import {
	Flex,
	Heading,
	IconButton,
	Spacer,
	Switch,
	VStack,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const NavMenu = ({ title }) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === 'dark';
	const TITLE_MODE_COLORS = useColorModeValue('blue.600', 'blue.100');

	const ICON_PROPS = [
		{
			id: 1,
			name: 'Ícone do LinkedIn',
			color: 'blue.300',
			icon: <FaLinkedin />,
			link: 'https://www.linkedin.com/in/paulo-weslley-de-lima-firmino-17851a17b/',
		},
		{
			id: 2,
			name: 'Ícone do Instagram',
			color: 'red.200',
			icon: <FaInstagram />,
			link: 'https://www.instagram.com/weslley.lima_13/',
		},
		{
			id: 3,
			name: 'Ícone do GitHub',
			color: 'gray.600',
			icon: <FaGithub />,
			link: 'https://github.com/pauloWeslleY/',
		},
	];

	const NavIcon = () =>
		ICON_PROPS.map(({ id, name, color, link, icon }) => {
			return (
				<IconButton
					key={id}
					textAlign={'center'}
					role={'button'}
					arial-label={name}
					color={color}
					icon={icon}
					isRound={true}
					onClick={() => window.open(link)}
					mx={1}
					fontSize={16}
					variant={'ghost'}
					size={'lg'}
					transition={'all 0.5s ease-in'}
					_hover={{
						transform: 'translateY(-2px)',
						boxShadow: 'dark-lg',
					}}
				/>
			);
		});

	return (
		<VStack p={5}>
			<Flex w={'100%'} alignItems={'center'}>
				<Heading
					ml={8}
					size={'md'}
					fontWeight={'semibold'}
					color={TITLE_MODE_COLORS}
					_dark={{
						color: 'blue.100',
					}}
				>
					{title}
				</Heading>
				<Spacer></Spacer>
				{NavIcon()}
				<Switch
					aria-label={'Botão que alterna o tema deste site.'}
					label={'button'}
					size={'lg'}
					colorScheme={'cyan'}
					isChecked={isDark}
					onChange={toggleColorMode}
				/>
			</Flex>
		</VStack>
	);
};

export default memo(NavMenu);
