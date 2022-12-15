import { memo } from 'react';
import { Box, Flex, Button, Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { HeadTitle, useColors } from './index';

export const PortfolioModal = ({ title, image, isOpen, onClose, modal_theme }) => {
	const { THEME } = useColors();

	return (
		<Modal
			blockScrollOnMount={false}
			isOpen={isOpen}
			onClose={onClose}
			motionPreset={'slideInBottom'}
		>
			<ModalOverlay />
			<ModalContent bg={modal_theme} maxW={'7xl'}>
				<ModalBody>
					<Flex flex={1} justify={'center'}>
						<HeadTitle title={title} />
					</Flex>
					<Box my={8}>{image}</Box>

					<Flex justify={'center'} my={4}>
						<Button
							aria-label={'Button'}
							role={'button'}
							borderRadius={'2rem'}
							p={1}
							size={{
								base: 'lg',
								sm: 'md',
							}}
							fontSize={{
								base: '2rem',
								sm: '1.7rem',
							}}
							fontWeight={'regular'}
							transition={'all 0.5s ease-in'}
							bg={THEME.BTN_BG_PORTFOLIO}
							color={THEME.BTN_COLORS_LIGHT}
							_hover={{
								bg: THEME.BTN_BG_LIGHT_HOVER,
								color: THEME.BTN_COLORS_LIGHT_HOVER,
								transform: 'translateY(-2px)',
								boxShadow: 'dark-lg',
							}}
							_dark={{
								color: THEME.BTN_COLORS_DARK,
								_hover: {
									bg: THEME.BTN_BG_DARK_HOVER,
									color: THEME.BTN_COLORS_DARK_HOVER,
								},
							}}
							onClick={onClose}
						>
							Fechar
						</Button>
					</Flex>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default memo(PortfolioModal);
