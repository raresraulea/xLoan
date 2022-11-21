import { ModalTypes } from 'components/Layout/Modals/types';

export const getModalTitle = (selectedModal: ModalTypes): string => {
  switch (selectedModal) {
    case ModalTypes.CreatePool:
      return 'Create new Loan Pool';
    default:
      return 'Title';
  }
};
