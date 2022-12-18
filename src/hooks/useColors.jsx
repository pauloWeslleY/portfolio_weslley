import { useColorModeValue } from '@chakra-ui/react';

export const useColors = () => {
	const THEME = {
		//[] BUTTON ICON MOBILE
		BUTTON_ICON_MOBILE: useColorModeValue('blue.800', 'white.200'),
		//[] SIDE_NAV BTN COLORS:
		SIDE_NAV_BTN_COLORS: useColorModeValue('blue.800', 'white.200'),
		//[] SIDE_NAV COLORS:
		SIDE_NAV_BG: useColorModeValue('cyan.100', 'blue.900'),
		SIDE_NAV_COLOR: 'blue.800',

		//! PAGE TITLE COLORS
		PAGE_TITLE_COLORS: useColorModeValue('gray.900', 'blue.100'),
		PAGE_SUBTITLE_COLORS: useColorModeValue('blue.800', 'gray.400'),

		//! BG PAGE SECTION
		BG_PAGE_SECTION: useColorModeValue('white.50', 'blue.70'),
		//! BUTTON HEADER COLORS
		BTN_HEAD_BG: useColorModeValue('cyan.600', 'white.50'),
		BTN_HEAD_BG_HOVER: useColorModeValue('cyan.700', 'white.400'),
		BTN_HEAD_COLORS: useColorModeValue('white.150', 'cyan.400'),
		BTN_HEAD_COLORS_HOVER: useColorModeValue('blue.700', 'gray.900'),

		//! BG BLOB BANNER SECTION
		BLOB_BANNER_BG_SECTION: useColorModeValue('blue.100', 'cyan.300'),
		//! NAV_MENU TITLE COLORS
		NAV_MENU_TITLE_COLOR_DARK: 'blue.100',
		NAV_MENU_TITLE_COLOR_LIGHT: 'blue.600',

		//FIXME NAV_ITEM COLORS
		NAV_ITEM_DARK_COLOR: 'gray.500',
		NAV_ITEM_DARK_COLOR_HOVER: 'blue.800',
		NAV_ITEM_DARK_BG_HOVER: 'blue.100',

		NAV_ITEM_LIGHT_COLOR: 'gray.900',
		NAV_ITEM_LIGHT_COLOR_HOVER: 'blue.600',
		NAV_ITEM_LIGHT_BG_HOVER: 'cyan.600',

		//! BTN ICON SOCIAL COLORS
		BTN_ICON_SOCIAL_BG: 'transparent',
		BTN_ICON_SOCIAL_COLOR_DARK: 'gray.200',
		BTN_ICON_SOCIAL_COLOR_DARK_HOVER: 'blue.100',
		BTN_ICON_SOCIAL_COLOR_LIGHT: 'gray.900',
		BTN_ICON_SOCIAL_COLOR_LIGHT_HOVER: 'cyan.500',

		HEADER_DESCRIPTION_COLORS: useColorModeValue('gray.600', 'gray.400'),

		//FIXME THEME COMPONENT PORTFOLIO
		PORTFOLIO_BG_CARDS_CONTAINER: useColorModeValue('white.400', 'blue.40'),
		PORTFOLIO_BG_CARDS: useColorModeValue('white.200', 'blue.60'),
		PORTFOLIO_TITLE_COLOR: useColorModeValue('gray.900', 'white.100'),
		PORTFOLIO_PARAGRAPH_COLOR: useColorModeValue('gray.600', 'gray.400'),
		PORTFOLIO_SPAN_COLOR: useColorModeValue('blue.100', 'cyan.400'),
		PORTFOLIO_BG_MODAL: useColorModeValue('white.200', 'blue.70'),

		//! ABOUT SECTION COLORS
		ABOUT_CONTENT_BG: useColorModeValue('white.50', 'blue.70'),
		ABOUT_CONTENT_BORDER_COLOR_LIGHT: 'blue.600',
		ABOUT_CONTENT_BORDER_COLOR_DARK: 'blue.100',
		ABOUT_CONTENT_TITLE_COLOR_DARK: 'white.100',
		ABOUT_CONTENT_TITLE_COLOR_LIGHT: 'gray.900',
		ABOUT_CONTENT_TEXT_COLORS: useColorModeValue('gray.600', 'gray.200'),
		ABOUT_PROFILE_BG: useColorModeValue('white.400', 'blue.70'),
		ABOUT_PROFILE_TITLES_COLORS: useColorModeValue('gray.800', 'white.100'),
		ABOUT_PROFILE_BG_CONTAINER_TITLES: useColorModeValue('whiteAlpha.500', 'blue.60'),

		//? FOOTER COLORS
		FOOTER_TEXT_COLOR_LIGHT: 'gray.900',
		FOOTER_TEXT_COLOR_DARK: 'whiteAlpha.900',
		FOOTER_LINK_COLOR_LIGHT: 'red.10',
		FOOTER_LINK_COLOR_DARK: 'red.700',
		FOOTER_LINK_COLOR_DARK_HOVER: 'red.100',
		FOOTER_LINE_COLORS: useColorModeValue('gray.900', 'white.50'),

		//! BUTTON THEME COLORS PORTFOLIO LIST
		BTN_BG_PORTFOLIO: useColorModeValue('white.200', 'blue.60'),
		//[] PORTFOLIO BG LIGHT COLOR
		BTN_COLORS_LIGHT: 'gray.900',
		BTN_COLORS_LIGHT_HOVER: 'cyan.600',
		BTN_BG_LIGHT_HOVER: 'white.200',
		//[] PORTFOLIO BG DARK COLOR
		BTN_COLORS_DARK: 'gray.200',
		BTN_COLORS_DARK_HOVER: 'blue.100',
		BTN_BG_DARK_HOVER: 'blue.70',

		//* BTN CONTACT LIST COLORS
		BTN_CONTACT_COLOR_DARK: 'gray.100',
		BTN_CONTACT_COLOR_LIGHT: 'gray.300',

		BTN_CONTACT_BG_LIGHT_HOVER: 'whiteAlpha.900',
		BTN_CONTACT_BG_HOVER: useColorModeValue('white.50', 'blue.7'),

		//* BTN ICON FOOTER COLORS
		BTN_ICON_FOOTER_COLOR: useColorModeValue('gray.900', 'white.400'),
		BTN_ICON_FOOTER_BG_HOVER_DARK: 'bg_dark',
		BTN_ICON_FOOTER_BG_HOVER_LIGHT: 'bg_light',

		//* BTN MODAL
		BTN_MODAL_COLORS: useColorModeValue('blackAlpha.800', 'whiteAlpha.800'),
	};

	return { THEME };
};
