import React from 'react';
import { styled } from 'styled-components';

const ServiceDetailsArea = ({ service }) => {
	return (
		<>
			<div className="service-details-area">
				<Container className="container">
					<LeftSection>
						<h3 className="tp-title-sm service-details-space">
							Notre service:
						</h3>
					</LeftSection>
					<RightSection>
						<p className="pb-15">{service.text_1}</p>
						<p className="pb-10">{service.text_2}</p>
					</RightSection>
				</Container>
			</div>
		</>
	);
};
const Container = styled.div`
	display: flex;
	flex-direction: row;
	gap: 100px;
	padding: 50px 0;
`;
const LeftSection = styled.div`
	min-width: 40%;
`;
const RightSection = styled.div``;
export default ServiceDetailsArea;
