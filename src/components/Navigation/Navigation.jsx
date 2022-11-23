import { useEffect, useRef, useState, memo } from 'react';
import { Flex, HStack, Heading, Avatar, chakra, Container } from '@chakra-ui/react';
import { useScroll } from 'framer-motion';
import { SideNav, getMenuItems } from './index';

export const Navigation = () => {
	const ref = useRef();
	const [y, setY] = useState(300);
	const { height = 300 } = ref.current ? ref.current.getBoundingClientRect() : 0;
	const { scrollY } = useScroll();

	const TOGGLE_BG = y > height ? 'blue.70' : 'transparent';
	const TOGGLE_TITLE_COLORS = y > height ? 'white.200' : 'gray.500';

	const titles = {
		name: 'Weslley',
		lastName: 'Lima',
	};

	useEffect(() => {
		return scrollY.onChange(() => setY(scrollY.get()));
	}, [scrollY]);

	return (
		<chakra.header
			ref={ref}
			shadow={y < height ? 'none' : 'dark-lg'}
			bg={y > height ? 'white.200' : 'transparent'}
			transition={'all 0.5s ease-in-out'}
			_dark={{
				color: TOGGLE_TITLE_COLORS,
				bg: TOGGLE_BG,
			}}
			borderTop={'0.1rem solid var(--blue-100)'}
			w={'full'}
			overflowY={'hidden'}
			position={'sticky'}
			top={'0'}
			zIndex={3}
		>
			<Container maxW={'container.xl'}>
				<chakra.div h={'6.5rem'} mx={'auto'} w={'100%'}>
					<Flex
						w={'full'}
						h={'full'}
						px={'6'}
						alignItems={'center'}
						justifyContent={'space-between'}
					>
						<Flex gap={2} align={'center'}>
							<Avatar name={'Logotipo da Página'} bg={'transparent'} src={'./favicon.png'} />{' '}
							<Heading as={'h3'}>
								{titles.name} <chakra.span>{titles.lastName}</chakra.span>
							</Heading>
						</Flex>
						<Flex gap={4}>
							<HStack
								spacing={'5'}
								display={{
									base: 'none',
									sm: 'none',
									md: 'none',
									lg: 'flex',
								}}
							>
								{getMenuItems()}
							</HStack>
							<SideNav name={titles.name} lastName={titles.lastName} />
						</Flex>
					</Flex>
				</chakra.div>
			</Container>
		</chakra.header>
	);
};

export default memo(Navigation);
