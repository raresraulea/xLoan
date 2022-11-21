import React from 'react';
import DeployNewPoolModal from 'components/Layout/Modals/BaseModalExtensions/DeployNewPoolModal';
import { ModalTypes } from 'components/Layout/Modals/types';

export const getModalContent = (selectedModal: ModalTypes) => {
  switch (selectedModal) {
    case ModalTypes.CreatePool:
      return <DeployNewPoolModal />;
    default:
      return <div>Default</div>;
  }
};
