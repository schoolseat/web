import React from 'react';
import './styles.css';

import { useApi } from '../../hooks/auth';

export default function Profile() {
  const { user } = useApi();

  function stars(total) {
    const yellow = '#FEF51F';
    const heading = '#7B859D';

    return (
      <div className="profile-stars">
        <ion-icon name={total >= 1 ? 'star' : 'star-outline'} style={total >= 1 ? { color: yellow } : { color: heading }} />
        <ion-icon name={total >= 2 ? 'star' : 'star-outline'} style={total >= 2 ? { color: yellow } : { color: heading }} />
        <ion-icon name={total >= 3 ? 'star' : 'star-outline'} style={total >= 3 ? { color: yellow } : { color: heading }} />
        <ion-icon name={total >= 4 ? 'star' : 'star-outline'} style={total >= 4 ? { color: yellow } : { color: heading }} />
        <ion-icon name={total >= 5 ? 'star' : 'star-outline'} style={total >= 5 ? { color: yellow } : { color: heading }} />
      </div>
    );
  }
  return (
    <div className="profile">
      <div className="profile-data-div">
        <img className="profile-pfp" src={user.profilePic} alt="an profilepic" />
        <div className="profile-user-div">
          <div className="profile-user-name-div">
            <h1 className="profile-user-name">{user.name}</h1>
            { stars(user.stars) }
          </div>
          <p className="profile-user-bio">
            {user.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
