import './styles.css';
import React from 'react';
// import { useTranslation } from 'react-i18next';
import { FiChevronsDown } from 'react-icons/fi';

import { Header } from '../../components';

export default function Calendar() {
  // const { t } = useTranslation();
  const date = new Date();

  const activities = [];
  const content = [];

  function greeting() {
    const hour = date.getHours();

    if (hour > 6 && hour < 12) return 'Bom dia';
    if (hour >= 12 && hour < 18) return 'Boa tarde';
    return 'Boa noite';
  }

  return (
    <div className="calendar">
      <Header />
      <body className="calendar-body">
        <div className="calendar-body-header">
          <h1 className="calendar-body-header-day-number">
            24
          </h1>
          <div className="calendar-body-header-date-div">
            <h2 className="calendar-body-header-day-name">
              Quarta
            </h2>
            <p className="calendar-body-header-month-year">
              Jan 2022
            </p>
          </div>
          <p className="calendar-body-header-text">
            {greeting()}
            , para hoje há
            {' '}
            {activities.length}
            {' '}
            atividades e
            {' '}
            {content.length}
            {' '}
            conteudos novos!
          </p>
        </div>
        <div className="calendar-selectors-div">
          <div className="calendar-selectors">
            <p className="calendar-selectors-titles">Atrasadas</p>
            <FiChevronsDown />
          </div>
          <div className="calendar-selectors">
            <p className="calendar-selectors-titles">Para essa semana</p>
            <FiChevronsDown />
          </div>
          <div className="calendar-selectors">
            <p className="calendar-selectors-titles">Para depois</p>
            <FiChevronsDown />
          </div>
        </div>
      </body>
    </div>
  );
}
