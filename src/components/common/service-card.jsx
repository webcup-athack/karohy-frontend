import Link from 'next/link';
import React from 'react';
import { styled } from 'styled-components';

const ServiceCard = ({ service, border }) => {
	return (
		<div className="col-lg-12 col-md-12 col-12">
			<div
				className="tp-sv-box wow tpfadeUp"
				data-wow-duration={'2s'}
				data-wow-delay={'2s'}
			>
				<div className={`tp-service-item ${border ? border : ''} d-flex mb-30`}>
					<div className="tp-sv-img">
						<img src={service.img} alt="" />
					</div>
					<div className="tp-sv-content pl-60">
						<h3 className=" tp-sv-title mb-35">
							<Link href={`/service-details/${service.id}`}>
								<a>{service.title}</a>
							</Link>
							<StarWrapper>
								{[...new Array(5)].map((e, i) => (
									<i
										key={i}
										className="fas fa-star"
										style={{
											color: service.reputation >= i + 1 ? '#ffe936' : '',
										}}
									></i>
								))}{' '}
								<span>({service.stars})</span>
							</StarWrapper>
							<CategorieWrapper>
								<Categorie className="mb-10"> {service.categorie}</Categorie>
								<SousCategorie className="mb-10">
									{service.sous_categorie}
								</SousCategorie>
							</CategorieWrapper>
						</h3>
						<div className="tp-sv-link mt-35">
							<Link href={`/service-details/${service.id}`}>
								<a>
									<i className="far fa-arrow-right"></i> Détails
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
const StarWrapper = styled.p`
	padding: 0 !important;
`;
const CategorieWrapper = styled.p`
	padding: 0 !important;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 10px;
`;
const Categorie = styled.span`
	background-color: #ecedef;
	padding: 5;
	border-radius: 5;
	color: #878787;
	font-size: 15;
`;
const SousCategorie = styled.span`
	background-color: #ecedef;
	padding: 5;
	border-radius: 5;
	color: #878787;
	font-size: 15;
`;

export default ServiceCard;
