import Link from 'next/link';
import React from 'react';
import { styled } from 'styled-components';

const Breadcrumb = ({ service, back_home = false }) => {
	return (
		<section
			className="breadcrumb__area  breadcrumb__pt-310 include-bg p-relative"
			style={{ backgroundImage: 'url(/assets/img/breadcrum/ab-1.1.jpg)' }}
		>
			<div className="ac-about-shape-img z-index-1">
				<img src="/assets/img/breadcrum/ab-shape-1.1.jpg" alt="" />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-xxl-12">
						<div className="breadcrumb__content p-relative z-index-1">
							<h3 className="breadcrumb__title">
								{service?.title || 'Service details'}
								{!!service && (
									<>
										<StarWrapper>
											{[...new Array(5)].map((e, i) => (
												<i
													className="fas fa-star"
													style={{
														color: service.reputation >= i + 1 ? '#ffe936' : '',
													}}
												></i>
											))}{' '}
											<span>({service.stars})</span>
										</StarWrapper>
										<CategorieWrapper>
											<Categorie className="mb-10">
												{' '}
												{service.categorie}
											</Categorie>
											<SousCategorie className="mb-10">
												{service.sous_categorie}
											</SousCategorie>
										</CategorieWrapper>
									</>
								)}
							</h3>
							{!back_home && (
								<Link href="/contact">
									<a className="tp-btn-white-border">
										Nous contacter <i className="far fa-arrow-right"></i>
									</a>
								</Link>
							)}
							{back_home && (
								<Link href="/">
									<a className="tp-btn-white-border">
										Back to home <i className="far fa-arrow-right"></i>
									</a>
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
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
export default Breadcrumb;
