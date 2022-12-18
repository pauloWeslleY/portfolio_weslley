import { memo } from 'react';
import { Box, Center, chakra } from '@chakra-ui/react';

import styles from './styles.module.scss';

export const Loader = () => {
	return (
		<Box m={'15rem'} alignItems={'center'}>
			<Center py={'1.5rem'}>
				<div className={styles.main__spinner}></div>

				<chakra.h1 px={'1rem'} fontSize={'4.5rem'} color={'gray.500'}>
					Loading...
				</chakra.h1>
			</Center>
		</Box>
	);
};

export default memo(Loader);
