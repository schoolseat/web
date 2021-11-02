import React from 'react';
import { useHistory } from 'react-router-dom';

export default function BackButton() {
  const navigation = useHistory();

  function handleGoBack() {
    navigation.goBack();
  }
  const styles = {
    button: {
      border: 0,
      backgroundColor: 'transparent',
    },
  };
  return (
    <button type="button" onClick={handleGoBack} style={styles.button}>
      <i
        data-feather="arrow-left"
        style={{
          top: 25,
          left: 25,
          position: 'absolute',
        }}
        color="white"
        width={35}
        height={35}
      />
    </button>
  );
}
