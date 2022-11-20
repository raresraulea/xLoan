import React from 'react';
import { useSelector } from 'react-redux';
import { globalModalSelector } from 'redux/selectors/modalsSelector';

const ModalLayer = () => {
  const globalModal = useSelector(globalModalSelector);

  console.log({ globalModal });
  return <div></div>;
};

export default ModalLayer;
