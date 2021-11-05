import React, { useState, useEffect } from 'react';

import './styles.css';

import { useLocation } from 'react-router-dom';

import { useApi } from '../../hooks/auth';

export default function Grade() {
  const [teacher, setTeacher] = useState(false);

  const { state } = useLocation();
  const { getDataById } = useApi();

  async function getTeacher() {
    const teacherReq = await getDataById({ path: 'users', id: state.parsedPostData.teacher });
    setTeacher(teacherReq);
  }
  useEffect(() => (
    getTeacher()
  ), []);
  return (
    <div className="grade">
      <div className="grade-data">
        <p className="grade-discipline">{state.parsedPostData.discipline}</p>
        <div className="grade-teacher">
          <img className="grade-teacher-pfp" src={teacher.profilePic} alt="an profilepic" />
          <p className="grade-teacher-name">{teacher.name}</p>
        </div>
        <p className="grade-school">{state.parsedPostData.school}</p>
      </div>
      <div className="grade-bio-div">
        <p className="grade-bio">{state.parsedPostData.bio}</p>
      </div>
    </div>
  );
}
