import { memo } from 'react';
import { Flex, Box, Image, chakra, useDisclosure, ButtonGroup } from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';

import { Btn, PortfolioModal, useColors } from './index';

export const PortfolioItems = props => {
	const { image, title, name, tech, techlist, git, github, livePreview, link } = props;

	const { isOpen, onOpen, onClose } = useDisclosure();
	const { THEME } = useColors();

	return (
		<Flex
			direction={'column'}
			basis={'23rem'}
			grow={1}
			shrink={1}
			bg={THEME.PORTFOLIO_BG_CARDS}
			h={'auto'}
			m={2}
			shadow={'lg'}
			rounded={'lg'}
			transition={'all 0.6s ease-in-out'}
			_hover={{
				transform: 'translateY(-7px) scale(101%)',
			}}
		>
			<Flex flexDir={'column'} p={3} gap={2} textAlign={'center'}>
				<chakra.h1 color={THEME.PORTFOLIO_TITLE_COLOR} fontWeight={'bold'} fontSize={'2.1rem'}>
					{title} <chakra.span color={THEME.PORTFOLIO_SPAN_COLOR}>{name}</chakra.span>
				</chakra.h1>
				<chakra.p
					mt={1}
					fontSize={'1.8rem'}
					color={THEME.PORTFOLIO_PARAGRAPH_COLOR}
					fontWeight={'light'}
				>
					{tech}
				</chakra.p>
				<Box
					my={2}
					fontSize={'1.6rem'}
					display={'flex'}
					alignItems={'center'}
					justifyContent={'center'}
				>
					{techlist}
				</Box>
			</Flex>
			<Flex align={'center'} justify={'center'}>
				<Image
					w={'100%'}
					h={'20rem'}
					fit={'cover'}
					mt={2}
					src={image}
					alt={name}
					onClick={onOpen}
					cursor={'pointer'}
				/>
			</Flex>
			<Flex alignItems={'center'} justifyContent={'center'} px={4} py={2} roundedBottom={'lg'}>
				<ButtonGroup gap={1}>
					<Btn name={livePreview} link={link} icon={<BiLinkExternal />} />
					<Btn name={git} link={github} icon={<BsGithub />} />
				</ButtonGroup>
			</Flex>
			<PortfolioModal
				title="Pré visualização do Site."
				image={<Image w={'full'} fit={'cover'} my={2} src={image} alt={name} />}
				modal_theme={THEME.PORTFOLIO_BG_MODAL}
				isOpen={isOpen}
				onClose={onClose}
			/>
		</Flex>
	);
};

export default memo(PortfolioItems);
