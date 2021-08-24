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

  async function getApiData({ login }) {
    if (!user) {
      const { data: userReq } = await api.post('auth', login);
      setUser(userReq);
    }
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
  }
  async function postApiData({ data, path, isCreateAccount }) {
    if (isCreateAccount) {
      const { data: userReq } = await api.post('users', data);

      setLoading(false);
      setUser(userReq);
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
  return (
    <ApiContext.Provider
      value={{
        user,
        classes,
        lessons,
        content,
        getApiData,
        postApiData,
        getDataById,
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
