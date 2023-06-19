import React from 'react';
import { styled } from 'styled-components';

const ServiceDetailsArea = ({ service }) => {
	return (
		<>
			<div className="service-details-area">
				<Container className="container">
					<LeftSection>
						<H3 className="tp-title-sm service-details-space">
							Notre service:
						</H3>
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
const H3 = styled.h3`
	margin: 0 !important;
`;
const Container = styled.div`
	display: flex;
	flex-direction: row;
	gap: 100px;
	padding: 50px 0;
	@media (max-width: 992px) {
		flex-direction: column;
		gap: 20px;
		padding: 50px 24px;
	}
`;
const LeftSection = styled.div`
	min-width: 40%;
`;
const RightSection = styled.div``;
export default ServiceDetailsArea;
