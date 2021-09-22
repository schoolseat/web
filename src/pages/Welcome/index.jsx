import './styles.css';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useApi } from '../../hooks/auth';
import { Button } from '../../components';

import box1 from '../../assets/box1.svg';
import box2 from '../../assets/box2.png';
import box3 from '../../assets/box3.svg';
import box4 from '../../assets/box4.svg';
import Layer1 from '../../assets/Layer1.svg';
import Layer2 from '../../assets/Layer2.svg';

function App() {
  const { getUser } = useApi();
  const { t } = useTranslation();
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="App">
      <div className="PageLanding-first-div">
        <div className="PageLanding-first-div-div">
          <h2 className="PageLanding-first-div-title">
            {t('pageLanding:firstText.title')}
            <br />
            {t('pageLanding:firstText.title_')}
          </h2>
          <p className="PageLanding-first-div-paragraph">
            {t('pageLanding:firstText.paragraph')}
          </p>
          <Button name={`${t('pageLanding:firstText.button')}`} />
        </div>
        <img
          className="PageLanding-first-img"
          src={Layer1}
          alt="two persons ahead a computer"
        />
      </div>
      <div className="PageLanding-second-div">
        <img
          src={Layer2}
          className="PageLanding-second-img"
          alt="a girl with some books"
        />
        <div className="PageLanding-second-div-div">
          <h2 className="PageLanding-second-div-title">
            {t('pageLanding:secondText.title')}
            <br />
            {t('pageLanding:secondText._title')}
            <br />
            {t('pageLanding:secondText.title_')}
          </h2>
          <p className="PageLanding-second-div-paragraph">
            {t('pageLanding:secondText.paragraph')}
          </p>
        </div>
      </div>
      <div className="PageLanding-third-div">
        <h2 className="PageLanding-third-div-title">
          {t('pageLanding:diferential.title')}
        </h2>
        <p className="PageLanding-third-div-paragraph">
          {t('pageLanding:diferential.paragraph')}
        </p>
      </div>
      <div className="PageLanding-box">
        <div className="PageLanding-boxes">
          <img
            src={box1}
            className="PageLanding-box-img"
            alt="A guy searching for something in a document"
          />
          <div className="PageLanding-box-green">
            <p className="PageLanding-box-title">
              {t('pageLanding:firstBox.title')}
            </p>
            <p className="PageLanding-box-paragraph">
              {t('pageLanding:firstBox.paragraph')}
            </p>
          </div>
          <img
            src={box2}
            className="PageLanding-box-img"
            alt="A girl using a laptop"
          />
          <div className="PageLanding-box-purple">
            <p className="PageLanding-box-title">
              {t('pageLanding:secondBox.title')}
            </p>
            <p className="PageLanding-box-paragraph">
              {t('pageLanding:secondBox.paragraph')}
            </p>
          </div>
        </div>
        <div className="PageLanding-boxes">
          <img
            src={box3}
            className="PageLanding-box-img-down"
            alt="A printer"
          />
          <div className="PageLanding-box-purple">
            <p className="PageLanding-box-title">
              {t('pageLanding:thirdBox.title')}
            </p>
            <p className="PageLanding-box-paragraph">
              {t('pageLanding:thirdBox.paragraph')}
            </p>
          </div>
          <img src={box4} className="PageLanding-box-img-down" alt="A locker" />
          <div className="PageLanding-box-green">
            <p className="PageLanding-box-title">
              {t('pageLanding:fourthBox.title')}
            </p>
            <p className="PageLanding-box-paragraph">
              {t('pageLanding:fourthBox.paragraph')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
