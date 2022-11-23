import { memo } from 'react';
import { Flex, Center, Heading, Box, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { ModalCard } from '../Modal';

export const SkillsItem = ({ name, color, icons, description, experience }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const THEME = {
		CARDS_BG: useColorModeValue('white.400', 'blue.70'),
		CARDS_BG_HOVER: useColorModeValue(color, 'blue.70'),
		CARDS_COLORS: useColorModeValue('gray.900', color),
		CARDS_COLORS_HOVER: useColorModeValue('white.200', color),
		CARDS_BORDER_COLORS_HOVER: useColorModeValue(color, color),
		COLORS: {
			CARDS_BORDER_COLORS: useColorModeValue('var(--gray-900)', 'var(--gray-1000)'),
		},
	};

	return (
		<Flex
			basis={'15rem'}
			grow={1}
			shrink={1}
			rounded={'xl'}
			shadow={'xl'}
			direction={'column'}
			justify={'center'}
			h={'20rem'}
			m={3}
			color={THEME.CARDS_COLORS}
			bg={THEME.CARDS_BG}
			border={`0.2rem solid ${THEME.COLORS.CARDS_BORDER_COLORS}`}
			transition={'all 0.5s ease-in-out'}
			_hover={{
				transform: 'translateY(-6px)',
				bg: THEME.CARDS_BG_HOVER,
				border: `0.2rem solid ${THEME.CARDS_BORDER_COLORS_HOVER}`,
				color: THEME.CARDS_COLORS_HOVER,
				boxShadow: `0px 1px 25px -5px ${color}, 0 10px 10px -5px ${color}`,
			}}
			onClick={onOpen}
			cursor={'pointer'}
		>
			<Box>
				<Center fontSize={'6xl'}>{icons}</Center>
				<Center>
					<Heading as={'h3'} fontSize={'3xl'}>
						{name}
					</Heading>
				</Center>{' '}
			</Box>
			<ModalCard
				isOpen={isOpen}
				onClose={onClose}
				name={name}
				icon={icons}
				description={description}
				bgColor={color}
				exp={experience}
			/>
		</Flex>
	);
};

export default memo(SkillsItem);
