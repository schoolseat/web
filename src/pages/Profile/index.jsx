import React from 'react';
import './styles.css';

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile-data-div">
        <img className="profile-pfp" src="https://cdn.discordapp.com/attachments/854896678233702431/880413907095789648/868091706644512820.png" alt="an profilepic" />
        <div className="profile-user-div">
          <h1 className="profile-user-name">Jorge Henrique</h1>
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
