import { useFormik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { contactSchema } from '../../../utils/validation-schema';
import ErrorMsg from './error-msg';

const SearchForm = () => {
  // user
  // const { user } = useSelector(state => state.auth);
  // console.log(user)

  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', msg: '' },
    validationSchema: contactSchema,
    onSubmit: (values, { resetForm }) => {
      toast.success(`${values.name} your message sent successfully`, {
        position: 'top-left'
      })
      resetForm()
    }
  })

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className='mb-20'>
        <textarea value={values.msg} className='shadow-lg' onChange={handleChange} onBlur={handleBlur} name="msg"
          placeholder="Décrivez ici ce dont vous avez besoin : vos attentes, les détails du service recherché, vos préférences spécifiques, etc. Nous nous efforcerons de trouver le prestataire parfaitement adapté à vos besoins."></textarea>
        {/* {touched.msg && <ErrorMsg error={errors.msg} />} */}
      </div>
      <button type="submit" className="tp-btn-yellow">Rechercher</button>
    </form>
  );
};

export default SearchForm;