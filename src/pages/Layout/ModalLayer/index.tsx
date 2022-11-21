import React from 'react';
import { useSelector } from 'react-redux';
import { BaseModal } from 'components/Layout/Modals/BaseModal';
import { globalModalSelector } from 'redux/selectors/modalsSelector';
import { getModalContent } from './getModalContent';
import { getModalTitle } from './getModalTitle';

const ModalLayer = () => {
  const { selectedOption } = useSelector(globalModalSelector);

  return (
    selectedOption && (
      <BaseModal
        title={getModalTitle(selectedOption)}
        content={getModalContent(selectedOption)}
      />
    )
  );
};

export default ModalLayer;
