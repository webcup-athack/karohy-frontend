import Link from 'next/link';
import React from 'react';
import { styled } from 'styled-components';

const ServiceCard = ({ service, border }) => {
	return (
		<Card className="col-lg-8 col-md-12 col-12">
			{/* <div
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
			</div> */}
			<div
				className="tp-sv-box wow"
				data-wow-duration=".5s"
				data-wow-delay=".8s"
			>
				<div
					className={`tp-service-item ${border ? border : ''} mb-30`}
					style={{
						minHeight: '700px',
						borderTopWidth: 6,
						borderBottomWidth: 6,
						borderTopColor: '#ED254E',
						borderBottomColor: '#ED254E',
						borderRadius: '10px',
						padding: '32px',
						boxShadow: '0px 0px 15px 0px rgba(100, 100, 100, 0.50)',
					}}
				>
					<div className="accordion accordion-items" id="details">
						<div className="d-flex">
							<div className="tp-sv-content" style={{ flex: 1 }}>
								<CardImage
									className="tp-sv-img text-center"
									src={service?.logo?.lien}
									alt={service?.logo?.alt}
								/>
								<p
									className="pt-35"
									style={{ fontSize: 25, padding: '50px 0 25px' }}
								>
									<i
										className="fas fa-star"
										style={{
											color: service?.note >= 1 ? '#ffe936' : '',
											margin: 2,
										}}
									></i>
									<i
										className="fas fa-star"
										style={{
											color: service?.note >= 2 ? '#ffe936' : '',
											margin: 2,
										}}
									></i>
									<i
										className="fas fa-star"
										style={{
											color: service?.note >= 3 ? '#ffe936' : '',
											margin: 2,
										}}
									></i>
									<i
										className="fas fa-star"
										style={{
											color: service?.note >= 4 ? '#ffe936' : '',
											margin: 2,
										}}
									></i>
									<i
										className="fas fa-star"
										style={{
											color: service?.note >= 5 ? '#ffe936' : '',
											margin: 2,
										}}
									></i>
									&nbsp;<span>({service?.note})</span>
								</p>
								<h3 className=" tp-sv-title pt-20" style={{ padding: 0 }}>
									<Link href={`/service-details/${service?._id}`}>
										<a>{service?.nom}</a>
									</Link>
									{/* <p>
                    <b
                      className="mb-10"
                      style={{
                        backgroundColor: "#ecedef",
                        padding: 5,
                        borderRadius: 5,
                        color: "#878787",
                        fontSize: 15,
                      }}
                    >
                      {service.categorie}
                    </b>
                    &nbsp;&nbsp;
                    <b
                      className="mb-10"
                      style={{
                        backgroundColor: "#ecedef",
                        padding: 5,
                        borderRadius: 5,
                        color: "#878787",
                        fontSize: 15,
                      }}
                    >
                      {service.sous_categorie}
                    </b>
                  </p> */}
								</h3>
								<div
									style={{
										background: '#ED254E',
										width: 100,
										height: 3,
										marginTop: -20,
									}}
								/>
								<div id={`before-${service?._id}`}>
									<br />
									<p style={{ padding: '0 0 10px' }}>
										{service?.description.length +
											(service?.description || []).length <=
										100
											? service?.description
											: service?.description.substring(0, 100) + ' ...'}
									</p>
								</div>
								<div
									id={`details-${service?._id}`}
									className={'accordion-collapse collapse'}
									aria-labelledby={`heading-${service?._id}`}
									data-bs-parent="#details"
								>
									<br />
									<p>{service?.description}</p>
									<p style={{ padding: '0 0 10px' }}>{service?.description}</p>
								</div>
								<div
									id={`heading-${service._id}`}
									onClick={() => {
										document.getElementById(
											`before-${service?._id}`,
										).style.display =
											document.getElementById(`before-${service._id}`).style
												.display != 'none'
												? 'none'
												: 'block';

										document.getElementById(
											`voir-plus-moins-${service?._id}`,
										).innerHTML =
											document.getElementById(`voir-plus-moins-${service?._id}`)
												.innerHTML != '(voir plus)'
												? '(voir plus)'
												: '(voir moins)';
									}}
									style={{
										marginTop: -15,
										display:
											(service?.description || []).length +
												(service?.description || []).length <=
											100
												? 'none'
												: 'block',
										padding: '0 0 32px',
									}}
								>
									<div
										data-bs-toggle="collapse"
										data-bs-target={`#details-${service?._id}`}
										aria-controls={`details-${service?._id}`}
									>
										<div className="tp-sv-link">
											<Link href={''}>
												<a
													id={`voir-plus-moins-${service?._id}`}
													style={{ fontWeight: 'normal', color: '#a2a2a2' }}
												>
													(voir plus)
												</a>
											</Link>
										</div>
									</div>
								</div>
								<div className="text-center pt-20">
									<Link
										className="pt-35"
										href={`/service-details/${service?._id}`}
									>
										<button
											type="submit"
											className="tp-btn-yellow"
											style={{
												backgroundColor: '#ED254E',
												color: '#F4FFFD',
												fontSize: 20,
											}}
										>
											Détails
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Card>
	);
};
const Card = styled.div`
	width: 48%;
	@media (max-width: 768px) {
		width: 100%;
	}
	min-height: 800px;
`;
const CardImage = styled.div`
	height: 200px;
	background-image: ${(p) => `url(${p.src})`};
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
`;
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
