import { useFormik } from 'formik';
import React, { useState, useRef } from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { contactSchema } from '../../../utils/validation-schema';
import ServiceCard from '../../common/service-card';

import { services_data } from '../../../data';
import SendIcon from '../../../imports/core/ui/SendIcon';
import ErrorMsg from './error-msg';

function getRandomIndexes(n, size) {
	const numbers = [];
	for (let i = 0; i < size; i++) {
		numbers.push(i);
	}
	for (let i = numbers.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[numbers[i], numbers[j]] = [numbers[j], numbers[i]];
	}
	return numbers.slice(0, n);
}
const SearchForm = ({ stateSearch, setStateSearch }) => {
	// user
	// const { user } = useSelector(state => state.auth);
	// console.log(user)
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

	const getSearchResult = (number) => {
		buttonRef.current.scrollIntoView({ behavior: 'smooth' });
		setLoading(true);
		const randomIndexes = getRandomIndexes(number, services_data.length);
		const randomServices = [];
		for (let i = 0; i < randomIndexes.length; i++) {
			randomServices.push(services_data[randomIndexes[i]]);
		}
		setSearchResult(randomServices);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};
	const handleSearchSubmit = (e) => {
		handleSubmit(e);
		// if (!errors?.msg && values?.msg) {
		// 	getSearchResult(3);
		// }
		getSearchResult(3);
		setStateSearch(true);
	};

	return (
		<>
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
						{loading ? <ReactLoading type="bars" color="red" /> : <SendIcon />}
					</IconButton>
				</InputGroup>
			</form>

			{searchResult.length > 0 && (
				<ResultWrapper>
					{loading ? (
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
					)}
				</ResultWrapper>
			)}
		</>
	);
};

const IconButton = styled.button``;
const InputGroup = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;
	@media (max-width: 496px) {
		flex-direction: column;
	}
`;
const InputWrapper = styled.div`
	width: 75%;
	max-height: 70px;
	border-radius: 15px;
	border-bottom: 4px solid #ed254e;
	background: #fff;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
`;
const StyledInput = styled.input`
	width: 40%;
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
