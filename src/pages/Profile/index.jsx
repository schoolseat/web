import React from 'react';
import './styles.css';

export default function Profile() {
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
        <img className="profile-pfp" src="https://cdn.discordapp.com/attachments/854896678233702431/880413907095789648/868091706644512820.png" alt="an profilepic" />
        <div className="profile-user-div">
          <div className="profile-user-name-div">
            <h1 className="profile-user-name">Jorge Henrique</h1>
            { stars(3) }
          </div>
          <p className="profile-user-bio">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas commodi, quo error earum beatae architecto adipisci? Corporis,
            qui ad? Laborum, architecto odio porro repellat pariatur velit nemo ratione
            dolorem perspiciatis.
          </p>

        </div>
      </div>
    </div>
  );
}
