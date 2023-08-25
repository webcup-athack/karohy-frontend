import * as Yup from 'yup';

export const aboutSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  msg: Yup.string().required().min(20).label("Message"),
});

export const reviewSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  review: Yup.string().required().min(20).label("Review"),
});

export const registerSchema = Yup.object().shape({
  nom: Yup.string().required().label("Nom"),
  prenom: Yup.string().required().label("Prenom"),
  email: Yup.string().required().email().label("Email"),
  numeroTelephone:Yup.string().required().label("Numero de telephone"),
  numeroMobileMoney:Yup.string().required().label("Numero mobile money"),
  adresse:Yup.string().required().label("Adresse"),
  motDePasse: Yup.string().required().min(6).label("Mot de passe"),
  confirmerMotDePasse: Yup.string().required().min(6).label("Confirmer votre mot de passe")
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password")
});

export const contactSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  msg: Yup.string().required().min(20).label("Message"),
});

export const blogSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  number: Yup.string().required().min(11).label("Number"),
  msg: Yup.string().required().min(20).label("Message"),
  terms:Yup.bool().oneOf([true,'You need to accept the terms and conditions']),
});
