import React from 'react'
import { StyledContainer, StyledMain, StyledCard } from '../Styles'

import { Card } from './index'

const MainContent = () => {
	return (
		<StyledContainer>
			<StyledMain>
				<section>
					<div className='cards'>
					<Card className/>
						{/* <div className='card'>
							<div className='card1 card-flex'>
								<div className='card1 card2'>2</div>
								<div className='card1 card2'>3</div>
							</div>
							<div className='card1'>4</div>
						</div>
						<div className='card card-full card-flex'>
							<div className='card1'>5</div>
							<div className='card1'>6</div>
						</div> */}
					</div>
				</section>
			</StyledMain>
		</StyledContainer>
	)
}

export default MainContent
