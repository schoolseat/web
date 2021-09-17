import './styles.css';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import { useApi } from '../../hooks/auth';
import { CalendarCard } from '../../components';

dayjs.extend(dayOfYear);

export default function Calendar() {
  const [showLate, setShowLate] = useState(false);
  const [showWeekly, setShowWeekly] = useState(false);
  const [showMissing, setShowMissing] = useState(false);
  const [late, setLate] = useState(false);
  const [weekly, setWeekly] = useState(false);
  const [missing, setMissing] = useState(false);

  const { t } = useTranslation();
  const { loading, lessons, content } = useApi();

  const date = new Date();
  function formatData() {
    const lessonsByDays = new Map();
    lessonsByDays.set('missing', lessons.map((lesson) => dayjs(Date(lesson.deadline)).isBefore(dayjs()) && lesson));
    lessonsByDays.set('late', lessons.map((lesson) => dayjs(Date(lesson.deadline)).isAfter(dayjs()) && lesson));
    lessonsByDays.set('weekly', lessons.map((lesson) => dayjs(Date(lesson.deadline)).dayOfYear() === dayjs().dayOfYear() && lesson));

    setLate(lessonsByDays.get('late'));
    setWeekly(lessonsByDays.get('weekly'));
    setMissing(lessonsByDays.get('missing'));
  }
  function greeting() {
    const hour = date.getHours();

    if (hour > 6 && hour < 12) return t('pageCalendar:greetings.morning');
    if (hour >= 12 && hour < 18) return t('pageCalendar:greetings.afternoon');
    return t('pageCalendar:greetings.evening');
  }
  useEffect(() => (
    formatData()
  ), []);
  console.log(late, weekly, missing);

  if (loading || lessons) return <p>Carregano</p>;
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
            {t('pageCalendar:header', { greeting: greeting(), activity: lessons.length, content: content.length })}
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
