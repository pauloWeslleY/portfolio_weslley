import { memo } from 'react';
import {
	Box,
	Center,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Button,
	Flex,
} from '@chakra-ui/react';

export const ModalCard = props => {
	const { isOpen, onClose, bgColor, name, icon, description, exp } = props;

	return (
		<Modal
			blockScrollOnMount={false}
			isOpen={isOpen}
			onClose={onClose}
			motionPreset={'slideInBottom'}
		>
			<ModalOverlay />
			<ModalContent bg={bgColor} maxW={'4xl'}>
				<ModalHeader fontSize="2.5rem">{name}</ModalHeader>

				<ModalBody>
					<Box
						display={'flex'}
						flexDir={'column'}
						gap={'1.7rem'}
						fontSize={'2rem'}
						textAlign={'center'}
						py={'2rem'}
					>
						<Center fontSize={'10rem'}>{icon}</Center>
						{description}
					</Box>
				</ModalBody>
				<ModalFooter>{exp}</ModalFooter>
				<Flex flex={1} justify={'center'} my={6}>
					<Button
						px={8}
						bg={bgColor}
						color={'blackAlpha.800'}
						rounded={'md'}
						fontSize={'1.6rem'}
						letterSpacing={1.5}
						transition={'all 0.4s ease-in'}
						_hover={{
							transform: 'translateY(-2px)',
							boxShadow: 'lg',
							bg: 'blackAlpha.600',
							color: 'whiteAlpha.800',
						}}
						onClick={onClose}
					>
						Fechar
					</Button>
				</Flex>
			</ModalContent>
		</Modal>
	);
};

export default memo(ModalCard);
