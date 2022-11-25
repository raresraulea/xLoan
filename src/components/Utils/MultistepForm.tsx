import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react';
import { Box, Button, Typography } from '@mui/material';

interface IMultistepFormProps {
  steps: React.ReactElement[];
  emitStepChange?: React.Dispatch<React.SetStateAction<number>>;
  finalActionText?: string;
  hasFinalActionButton?: boolean;
  autoForwardSteps?: number[];
  noBackwardsSteps?: number[];
}

interface IMultistepFormContextType {
  setBuiltFinalActionHandler: any;
  activeStepNumber: number;
  proceedToPreviousStep: () => void;
  proceedToNextStep: () => void;
  setIsFinalStepButtonActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const MultistepFormContext = createContext<IMultistepFormContextType>(
  {} as IMultistepFormContextType
);

export const useMultistepFormContext = () => useContext(MultistepFormContext);

const MultistepForm = ({
  steps,
  finalActionText = 'Proceed',
  hasFinalActionButton = true,
  autoForwardSteps = [],
  noBackwardsSteps = [],
  emitStepChange = () => null
}: IMultistepFormProps) => {
  const [activeStepNumber, setActiveStepNumber] = useState(1);
  const [isNextButtonActive, setIsNextButtonActive] = useState(true);
  const [isFinalStepButtonActive, setIsFinalStepButtonActive] = useState(false);

  const finalStep = steps.length;

  const activeStepJSX = useMemo(
    () =>
      React.cloneElement(steps[activeStepNumber - 1], {
        stepNumber: activeStepNumber,
        enableNextStep: setIsNextButtonActive
      }),
    [activeStepNumber, steps]
  );

  const proceedToNextStep = useCallback(() => {
    if (activeStepNumber < finalStep) {
      setActiveStepNumber((activeStepNumber) => activeStepNumber + 1);
      emitStepChange((activeStepNumber) => activeStepNumber + 1);
    }
  }, [activeStepNumber, emitStepChange, finalStep]);

  const proceedToPreviousStep = useCallback(() => {
    setActiveStepNumber((activeStepNumber) => activeStepNumber - 1);
    emitStepChange((activeStepNumber) => activeStepNumber - 1);
  }, [emitStepChange]);

  const [builtFinalActionHandler, setBuiltFinalActionHandler] = useState(
    () => () => null
  );

  const isFinalActionButtonVisible =
    hasFinalActionButton && activeStepNumber === finalStep;
  const isBackButtonVisible =
    activeStepNumber > 1 && !noBackwardsSteps.includes(activeStepNumber);
  const isNextButtonVisible =
    activeStepNumber < finalStep &&
    !autoForwardSteps.includes(activeStepNumber);

  return (
    <MultistepFormContext.Provider
      value={useMemo(
        () => ({
          proceedToPreviousStep,
          proceedToNextStep,
          activeStepNumber,
          setIsFinalStepButtonActive,
          setBuiltFinalActionHandler
        }),
        [activeStepNumber, proceedToNextStep, proceedToPreviousStep]
      )}
    >
      <Box>
        <Box>
          <Typography>{activeStepJSX}</Typography>
        </Box>
        {(isNextButtonVisible ||
          isBackButtonVisible ||
          isFinalActionButtonVisible) && (
          <Box display={'flex'} gap={2} py={2}>
            {isBackButtonVisible && (
              <Button
                variant='contained'
                color='secondary'
                size='small'
                sx={{ width: '50%' }}
                onClick={proceedToPreviousStep}
              >
                <Typography>Back</Typography>
              </Button>
            )}
            {isNextButtonVisible ? (
              <Button
                disabled={!isNextButtonActive}
                variant='contained'
                fullWidth={!isBackButtonVisible}
                size='small'
                onClick={proceedToNextStep}
              >
                <Typography>Next</Typography>
              </Button>
            ) : (
              isFinalActionButtonVisible && (
                <Button
                  variant='contained'
                  size='small'
                  sx={{ width: '50%' }}
                  disabled={!isFinalStepButtonActive}
                  onClick={builtFinalActionHandler}
                >
                  <Typography>{finalActionText}</Typography>
                </Button>
              )
            )}
          </Box>
        )}
      </Box>
    </MultistepFormContext.Provider>
  );
};

export default MultistepForm;
