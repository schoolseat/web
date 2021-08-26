import React from 'react';
import './styles.css';

export default function CalendarCard() {
  return (
    <div className="calendar-card">
      <div className="calendar-card-title-div">
        <p className="calendar-card-title">
          data.title
        </p>
        <p className="calendar-card-title">
          para hoje
        </p>
      </div>
      <p className="calendar-card-content">data.content</p>
      <div className="calendar-card-data-div">
        <ion-icon name="location-outline" />
        <p className="calendar-card-texts">
          data.school
        </p>
      </div>
      <div className="calendar-card-data-div">
        <img className="calendar-card-teacher-pfp" src="https://cdn.discordapp.com/attachments/854896678233702431/880413907095789648/868091706644512820.png" alt="an profilepic" />
        <p className="calendar-card-texts"> data.class.teacher.name</p>
      </div>
    </div>
  );
}
