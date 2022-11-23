import React, { useRef, useEffect } from 'react';
import scrollReveal from 'scrollreveal';

export const ScrollReveal = ({ children }) => {
	const sectionRef = useRef(null);
	useEffect(() => {
		if (sectionRef.current)
			scrollReveal().reveal(sectionRef.current, {
				reset: true,
				delay: 500,
				distance: '15px',
				origin: 'bottom',
				rotate: {
					x: 15,
					y: 20,
				},
			});
	}, []);

	return (
		<section ref={sectionRef} className="container scroll-section" data-testid="section">
			{children}
		</section>
	);
};

export default ScrollReveal;
