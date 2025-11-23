/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const WorksItems = ({ item }) => {
	const [showTooltip, setShowTooltip] = useState(false);

	const handleDemoClick = (e) => {
		e.preventDefault();
		if (item.status === 'development') {
			setShowTooltip(true);
		} else if (item.demoUrl && item.demoUrl !== '#') {
			window.open(item.demoUrl, '_blank');
		}
	};

	const handleSourceClick = (e) => {
		e.preventDefault();
		if (item.sourceUrl && item.sourceUrl !== '#') {
			window.open(item.sourceUrl, '_blank');
		}
	};

	const handleMouseEnter = () => {
		if (item.status === 'development') {
			setShowTooltip(true);
		}
	};

	const handleMouseLeave = () => {
		setShowTooltip(false);
	};

	return (
		<div 
			className='work__card' 
			key={item.id}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<img src={item.image} alt='' className='work__img' />
			<h3 className='work__title'>{item.title}</h3>
            
            <span className='work__stack'>{item.stack}</span>
			
			<div className='work__button-container'>
				<a
					href='#'
					className='work__button'
					onClick={handleDemoClick}
					onMouseEnter={() =>
						item.status === 'development' && setShowTooltip(true)
					}
					onMouseLeave={() => setShowTooltip(false)}
				>
                    {/* Updated Logic: Check category to display 'App' or 'Website' */}
                    {item.category === 'app' ? (
                        <>
                            <i className='bx bx-window-alt work__button-icon' /> App
                        </>
                    ) : (
                        <>
                            <i className='bx bx-globe work__button-icon' /> Website
                        </>
                    )}
				</a>
				{showTooltip && item.status === 'development' && (
					<div className='work__tooltip'>Under Development</div>
				)}
				<a
					href='#'
					className='work__button'
					onClick={handleSourceClick}
				>
					<i className='bx bxl-github work__button-icon' /> Source
				</a>
			</div>
		</div>
	);
};

export default WorksItems;