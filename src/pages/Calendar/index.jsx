import './styles.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CalendarCard } from '../../components';

export default function Calendar() {
  const [showLate, setShowLate] = useState(false);
  const [showWeekly, setShowWeekly] = useState(false);
  const [showMissing, setShowMissing] = useState(false);

  const { t } = useTranslation();
  const date = new Date();

  const activities = [];
  const content = [];

  function greeting() {
    const hour = date.getHours();

    if (hour > 6 && hour < 12) return t('pageCalendar:greetings.morning');
    if (hour >= 12 && hour < 18) return t('pageCalendar:greetings.afternoon');
    return t('pageCalendar:greetings.evening');
  }

  return (
    <div className="calendar">
      <body className="calendar-body">
        <div className="calendar-body-header">
          <h1 className="calendar-body-header-day-number">
            {date.getDate()}
          </h1>
          <div className="calendar-body-header-date-div">
            <h2 className="calendar-body-header-day-name">
              {t(`days:${date.getDay()}`)}
            </h2>
            <p className="calendar-body-header-month-year">
              {t(`months:${date.getMonth()}`)}
              {' '}
              {date.getFullYear()}
            </p>
          </div>
          <p className="calendar-body-header-text">
            {t('pageCalendar:header', { greeting: greeting(), activity: activities.length, content: content.length })}
          </p>
        </div>
        <div className="calendar-selectors-div">
          <div className="calendar-selectors">
            <p className="calendar-selectors-titles">{t('pageCalendar:selectors.missing')}</p>
            <button className="calendar-invisible-buttons" type="button" onClick={() => setShowMissing(!showMissing)}>
              <i data-feather="chevrons-down" />
            </button>
          </div>
          {
            showMissing && <CalendarCard />
          }
          <div className="calendar-selectors">
            <p className="calendar-selectors-titles">{t('pageCalendar:selectors.weekly')}</p>
            <button className="calendar-invisible-buttons" type="button" onClick={() => setShowWeekly(!showWeekly)}>
              <i data-feather="chevrons-down" />
            </button>
          </div>
          {
            showWeekly && <CalendarCard />
          }
          <div className="calendar-selectors">
            <p className="calendar-selectors-titles">{t('pageCalendar:selectors.later')}</p>
            <button className="calendar-invisible-buttons" type="button" onClick={() => setShowLate(!showLate)}>
              <i data-feather="chevrons-down" />
            </button>
          </div>
          {
            showLate && <CalendarCard />
          }
        </div>
      </body>
    </div>
  );
}
