/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';

import api from '../services/api';

export const ApiContext = createContext({});

function ApiProvider({ children }) {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [classes, setClasses] = useState(false);
  const [lessons, setLessons] = useState(false);
  const [content, setContent] = useState(false);

  const authEmail = localStorage.getItem('@SchoolSeat/auth_email');
  const authPassword = localStorage.getItem('@SchoolSeat/auth_password');

  async function getApiData(login) {
    localStorage.setItem('@SchoolSeat/auth_email', login.email);
    localStorage.setItem('@SchoolSeat/auth_password', login.password);

    const userReq = await api.post('auth', login).catch((error) => (error.response ? alert(error.response.data.message) : alert('Aconteçeu um erro, tente novamente mais tarde')));
    setUser(userReq);
    const { data: classesReq } = await api.get('classes', {
      headers: {
        'x-access-token': user.token,
      },
    });
    setClasses(classesReq);

    const { data: lessonsReq } = await api.get('lessons', {
      headers: {
        'x-access-token': user.token,
      },
    });
    setLessons(lessonsReq);

    const { data: contentReq } = await api.get('content', {
      headers: {
        'x-access-token': user.token,
      },
    });
    setContent(contentReq);
    setLoading(false);
    return 0;
  }
  async function postApiData({ data, path, isCreateAccount }) {
    if (isCreateAccount) {
      const createAccountReq = await api.post('users', data).catch((error) => alert(error.response.data.message));

      setLoading(false);
      setUser(createAccountReq.data);
    }
    setLoading(false);
    const contentPost = await api.post(path, data, {
      headers: {
        'x-access-token': user.token,
      },
    });
    setLoading(false);
    return contentPost;
  }
  async function getDataById({ path, id }) {
    const { data: userReq } = await api.get(`${path}/${id}`);

    setLoading(false);
    return userReq;
  }
  function getUser() {
    if (!authEmail === 'false' && !authPassword === 'false') {
      return getApiData({ email: authEmail, password: authPassword });
    }
  }
  return (
    <ApiContext.Provider
      value={{
        user: user.user,
        classes,
        lessons,
        content,
        getApiData,
        postApiData,
        getDataById,
        getUser,
        loading,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
function useApi() {
  const context = useContext(ApiContext);

  return context;
}
export { ApiProvider, useApi };
