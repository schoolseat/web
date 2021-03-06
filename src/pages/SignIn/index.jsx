/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './style.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ImageUploading from 'react-images-uploading';

import ilustration from '../../assets/signinImg.svg';
import googleIcon from '../../assets/google-icon.svg';

import { useApi } from '../../hooks/auth';
import { BackButton } from '../../components';

export default function App() {
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [password1, setPassword1] = useState(false);
  const [bornDate, setBornDate] = useState(false);
  const [nickname, setNickname] = useState(false);
  const [profilePic, setProfilePic] = useState(false);

  const { postApiData } = useApi();
  const navigate = useHistory();

  const onChange = (imageList, addUpdateIndex) => {
    setProfilePic(imageList[0].data_url);
  };
  async function handleSingIn() {
    if (!name) return alert('Você precisa inserir o seu nome');
    if (!email) return alert('Você precisa inserir o seu email');
    if (password1 !== password) return alert('As senhas precisam ser iguais');
    if (!bornDate) return alert('Você precisa inserir o sua data de nascimento');

    const data = {
      name,
      email,
      bornDate,
      nickname,
      password,
      profilePic,
    };

    await postApiData({ data, isCreateAccount: true });
    navigate.push('/');
  }
  return (
    <div id="page-signin">
      <aside>
        <BackButton />
        <img
          src={ilustration}
          className="image"
          alt="Illustration of a boy writing"
        />
      </aside>
      <main>
        <div className="main-content">
          <h1>Create your account </h1>
          <form>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              onChange={(data) => setName(data.target.value)}
              placeholder="John Doe"
            />
            <label htmlFor="nickname">NickName</label>
            <input
              type="text"
              name="nickname"
              onChange={(data) => setNickname(data.target.value)}
              placeholder="john.doe"
            />
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              onChange={(data) => setEmail(data.target.value)}
              placeholder="john.doe@email.com"
            />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              onChange={(data) => setPassword(data.target.value)}
              placeholder="*********"
            />
            <label htmlFor="password">Password Again</label>
            <input
              name="password"
              type="password"
              onChange={(data) => setPassword1(data.target.value)}
              placeholder="*********"
            />
            <label htmlFor="bornDate">Born Date</label>
            <input
              type="date"
              name="borndate"
              placeholder="dd-mm-yyyy"
              value={bornDate}
              min={`${new Date().getFullYear() - 80}-01-01`}
              max={`${new Date().getFullYear() - 5}-01-01`}
              onChange={(data) => setBornDate(data.target.value)}
            />
            <ImageUploading
              value={profilePic}
              onChange={onChange}
              dataURLKey="data_url"
            >
              {({
                dragProps,
                imageList,
                onImageUpload,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <label htmlFor="profilePic">Profile Pic</label>
                  <input
                    type="button"
                    {...dragProps}
                    onClick={onImageUpload}
                    value={imageList ? 'Selecionar outra foto' : 'Arraste ou Selecione uma foto'}
                  />
                  { imageList && <img src={imageList} alt="" width="100" />}
                </div>
              )}
            </ImageUploading>
            <button
              type="button"
              onClick={handleSingIn}
              className="button button-login"
            >
              Sing In
            </button>
          </form>
          <div className="separator">or</div>
          <button type="button" className="button button-google">
            <img src={googleIcon} alt="google logo" />
            Login with Google
          </button>
        </div>
      </main>
    </div>
  );
}
