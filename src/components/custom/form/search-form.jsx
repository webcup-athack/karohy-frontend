import { useFormik } from 'formik';
import React, { useState, useRef } from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';
import { getAccessToken } from '/src/utils/utils';
import { toast } from 'react-toastify';
import { contactSchema } from '../../../utils/validation-schema';
import ServiceCard from '../../common/service-card';

import { services_data } from '../../../data';
import SendIcon from '../../../imports/core/ui/SendIcon';
import ErrorMsg from './error-msg';

const SearchForm = ({ stateSearch, setStateSearch }) => {
	const [searchResult, setSearchResult] = useState([]);
	const [loading, setLoading] = useState(false);
	const buttonRef = useRef(null);
	const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
		useFormik({
			initialValues: { name: '', email: '', msg: '' },
			validationSchema: contactSchema,
			onSubmit: (values, { resetForm }) => {
				console.log('on submit');
				toast.success(`${values.name} your message sent successfully`, {
					position: 'top-left',
				});
				resetForm();
			},
		});

	const showServiceSearchResult = (services) => {
		buttonRef.current.scrollIntoView({ behavior: 'smooth' });
		setSearchResult(services);
		setTimeout(() => {
			// setLoading(false);
			if (buttonRef.current) {
				buttonRef.current.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
					inline: 'nearest',
				});
			}
		}, 2000);
	};
	const handleSearchSubmit = async (e) => {
		handleSubmit(e);
		// if (!errors?.msg && values?.msg) {
		// 	getSearchResult(3);
		// }
		setLoading(true);
		const sousCategoriesCorrespondantes =
			await getSousCategoriesCorrespondantes();
		const servicesCorrespondantes = await getServicesByIdSousCategorie(
			sousCategoriesCorrespondantes,
		);
		showServiceSearchResult(servicesCorrespondantes);
		setLoading(false);
		setStateSearch(true);
	};
	const getSousCategoriesCorrespondantes = async () => {
		let array = [];
		const apiUrl = 'https://api.openai.com/v1/chat/completions';
		const sousCategoriesTemp = await getAllSousCategorie();
		const noms = sousCategoriesTemp
			.map((sousCategorie) => sousCategorie.nom)
			.join(', ');
		const data = {
			model: 'gpt-4',
			messages: [
				{
					role: 'user',
					content: `Avec les catégories suivantes (${noms}), lesquelles d'entre elles correspondent avec ce texte (${
						values.msg
					})? Je veux qu'à partir du tableau que je vais te donner, tu réécris uniquement les catégories correspondantes en respectant la sensibilité à la casse et en respectant le format suivant: ${JSON.stringify(
						sousCategoriesTemp,
					)}. S i aucune catégorie ne correspond au texte, renvoies uniquement un tableau vide sans écrire autre chose.`,
				},
			],
		};

		try {
			const response = await fetch(apiUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
				},
				body: JSON.stringify(data),
			});

			const result = await response.json();
			const resultArray = JSON.parse(result.choices[0].message.content);
			array = resultArray.map((e) => e._id);
		} catch (error) {
			console.error('Error:', error);
		}
		return array;
	};

	const getAllSousCategorie = async () => {
		const access_token = await getAccessToken();
		let array = [];
		const url =
			'https://data.mongodb-api.com/app/data-otnel/endpoint/data/v1/action/find';
		const body = {
			collection: 'sous_categories',
			database: 'karohy',
			dataSource: 'Cluster0',
			projection: {},
		};
		await fetch(url, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${access_token}`,
			},
			body: JSON.stringify(body),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.documents) {
					array = data.documents;
				}
			})
			.catch((error) => console.error('Error:', error));
		return array;
	};
	const getServicesByIdSousCategorie = async (idSousCategorieArray) => {
		const access_token = await getAccessToken();
		let array = [];
		const url =
			'https://data.mongodb-api.com/app/data-otnel/endpoint/data/v1/action/find';
		const body = {
			collection: 'services',
			database: 'karohy',
			dataSource: 'Cluster0',
			filter: {
				sous_categories: idSousCategorieArray,
			},
		};
		await fetch(url, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${access_token}`,
			},
			body: JSON.stringify(body),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.documents) {
					array = data.documents;
				}
			})
			.catch((error) => console.error('Error:', error));
		return array;
	};

	return (
		<>
			<div className="col-xl-8 col-lg-8" style={{ margin: 'auto' }}>
				<form id="contact-form" onSubmit={handleSearchSubmit}>
					<InputGroup>
						<InputWrapper>
							<StyledInput
								value={values.msg}
								onChange={handleChange}
								onBlur={handleBlur}
								name="msg"
								placeholder="Que recherchez-vous ?"
							/>
						</InputWrapper>
						{/* {touched.msg && <ErrorMsg error={errors.msg} />} */}
						<IconButton type="submit" ref={buttonRef}>
							{loading ? (
								<ReactLoading type="bars" color="red" />
							) : (
								<SendIcon />
							)}
						</IconButton>
					</InputGroup>
				</form>
				<StyledP
					className={`${stateSearch && 'show'}`}
					style={{ margin: '24px 0 0', padding: 0, width: '80%' }}
				>
					<small>
						Karohy, l{"'"}espace numérique dynamique où vous pouvez
						instantanément dénicher le prestataire de service idéal qui donnera
						vie à vos projets avec brio!
					</small>
				</StyledP>
			</div>
			{searchResult.length > 0 && (
				<ResultWrapper>
					{!loading && (
						<>
							<StyledH1>Résultats</StyledH1>
							<ResultFlex>
								{searchResult.map((elem, i) => (
									<ServiceCard key={i} service={elem} border={'sv-2-border'} />
								))}
							</ResultFlex>
						</>
					)}
					{/* {loading ? (
						<LoaderWrapper>
							<ReactLoading type="spinningBubbles" color="#0bbfdc" />
						</LoaderWrapper>
					) : (
						<>
							<StyledH1>Résultats</StyledH1>
							<ResultFlex>
								{searchResult.map((elem, i) => (
									<ServiceCard key={i} service={elem} border={'sv-2-border'} />
								))}
							</ResultFlex>
						</>
					)} */}
				</ResultWrapper>
			)}
			{stateSearch && !loading && searchResult.length === 0 && (
				<div className="col-xl-8 col-lg-8" style={{ margin: 'auto' }}>
					<NoResultText>
						Aucun service n'est actuellement disponible ou ne correspond à votre
						description
					</NoResultText>
				</div>
			)}
		</>
	);
};

const NoResultText = styled.p`
	margin-top: 100px;
`;
const StyledP = styled.p`
	opacity: 0;
	transition: opacity 2.5s ease;
	&.show {
		opacity: 1;
	}
`;
const IconButton = styled.button``;
const InputGroup = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;
	@media (max-width: 496px) {
	}
`;
const InputWrapper = styled.div`
	width: 60%;
	max-height: 70px;
	border-radius: 15px;
	border-bottom: 4px solid #ed254e;
	background: #fff;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
	@media (max-width: 496px) {
		width: 100%;
	}
`;
const StyledInput = styled.input`
	flex-shrink: 0;
	height: 70px;
`;
const ResultWrapper = styled.div`
	margin-top: 50px;
`;
const ResultFlex = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	// align-items: stretch;
	flex-wrap: wrap;
	gap: 20px;
	padding: 50px 0;
`;
const LoaderWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 75px;
`;
const StyledH1 = styled.h1`
	margin: 20px 0;
	padding: 0 0 10px;
	border-bottom: 3px #ed254e solid;
	// width: 100%;
	display: inline-block;
`;
export default SearchForm;
