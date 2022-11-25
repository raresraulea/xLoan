import React from 'react';
import MultistepForm from 'components/Utils/MultistepForm';
import StakingFormStepOne from './StakingFormStepOne';
import StakingFormStepTwo from './StakingFormStepTwo';

const CreateLoanPoolForm = () => {
  const steps = [
    <StakingFormStepOne key='step-one' />,
    <StakingFormStepTwo key='step-two' />
  ];
  return <MultistepForm steps={steps} finalActionText='Create new Pool' />;
};

export default CreateLoanPoolForm;
