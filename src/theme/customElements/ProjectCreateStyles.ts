import {
  Box,
  Button,
  LinearProgress,
  StepConnector,
  stepConnectorClasses,
  TextareaAutosize,
  TextField,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import colors from '../customColors';
import { flexCentered } from '../utility';
import { ProjectOverview } from './ProjectSinglePageCustomElem';

export const StyledFiled = styled(TextField)(() => ({
  borderRadius: '4px',
  border: '1px solid transparent',
  '& .MuiInputLabel-outlined': {
    top: '-10px',
    fontSize: '0.9rem',
    zIndex: 0
  },
  '& .MuiOutlinedInput-input': {
    paddingBlock: '0.3rem',
    '::-webkit-calendar-picker-indicator': {
      filter:
        'invert(100%) sepia(71%) saturate(493%) hue-rotate(175deg) brightness(102%) contrast(91%)',
      cursor: 'pointer'
    }
    // "input::-webkit-inner-spin-button": {
    //   "-webkit-appearance": "none",
    //   margin: 0,
    // },
  }
}));

export const ProjectCreateDetails = styled(Box)(({ theme }) => ({
  paddingBlock: '1.5rem',
  borderBottom: `1px solid ${theme.palette.secondary.light}`,
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateAreas: `
  "div1 div2 div3" 
  "div4 div5 div6"
  `,
  gap: '0.5rem',
  [theme.breakpoints.down('xl')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateAreas: ` 
    "div1 div2"
    "div3 div4"
    "div5 div6"
    `
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gridTemplateAreas: ` 
    "div1" "div2" "div3" "div4" "div5" "div6"`
  }
}));

export const FieldStyle = {
  padding: '0',
  borderRadius: '4px',
  border: '1px solid transparent'
};

export const OverviewWrapper = styled(ProjectOverview)(() => ({
  paddingTop: '1rem'
}));

export const CloseInputBtn = styled(Button)(() => ({
  margin: '0',
  borderRadius: '4px',
  ...flexCentered,
  position: 'absolute',
  right: '-1px',
  top: '0',
  minWidth: 'unset',
  minHeight: 'unset',
  padding: '0.5rem',
  zIndex: 1,
  ':hover': {
    backgroundColor: colors.baliHai
  }
}));

export const LinearProgressStyled = styled(LinearProgress)(() => ({
  height: '10px',
  borderRadius: '4px',
  backgroundColor: 'success',
  '& .MuiLinearProgress-bar': {
    borderRadius: '4px',
    backgroundColor: 'success'
  }
}));

export const DealStatusBtn = styled(Button)(() => ({
  height: '30px',
  marginTop: '0.1rem'
}));

export const TeamContainer = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gap: '0.5rem',
  marginBottom: '2rem'
}));

export const TeamCard = styled(ProjectOverview)(() => ({
  margin: '0',
  padding: 0,
  paddingBottom: '1rem',
  paddingLeft: '1rem',
  display: 'flex',
  flexDirection: 'column'
}));

export const TeamText = styled(Typography)(({ theme }) => ({
  ...theme.typography.h4,
  fontWeight: 400,
  opacity: 0.7,
  lineHeight: '150%',
  paddingRight: '1rem'
}));

export const AddTeamCardStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '0.7rem',
  flexDirection: 'column',
  border: `1px solid ${theme.palette.secondary.light}`,
  padding: '1rem',
  borderRadius: '4px'
}));

export const TextArea = styled(TextareaAutosize)(({ theme }) => ({
  width: '100%',
  maxWidth: '400px',
  minWidth: '200px',
  minHeight: '100px',
  backgroundColor: `${theme.palette.secondary.main}`,
  borderRadius: '4px',
  border: `1px solid ${theme.palette.secondary.light}`,
  outline: 'none',
  color: theme.palette.primary.main,
  padding: '0.5rem'
}));

export const CloseBtn = styled(Button)(({ theme }) => ({
  alignSelf: 'flex-end',
  padding: '0.5rem',
  minWidth: 'unset',
  position: 'absolute',
  top: '-20px',
  right: '3px',
  borderRadius: '4px',
  ':hover': {
    backgroundColor: theme.palette.secondary.light
  }
}));

export const PartnersContainer = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gap: '0.5rem',
  marginBottom: '2rem'
}));

export const AddPartnerBox = styled(ProjectOverview)(() => ({
  ...flexCentered,
  margin: '0',
  padding: '0',
  minHeight: '125px',
  ':hover': {
    backgroundColor: colors.baliHai
  }
}));

export const PartnersCard = styled(ProjectOverview)(() => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0',
  padding: '0',
  paddingBottom: '2.5rem'
}));

export const RoadmapAddBtnStyled = styled(Button)(({ theme }) => ({
  ...flexCentered,
  padding: '1rem',
  border: `1px solid ${theme.palette.secondary.light}`,
  width: 200,
  height: 100,
  borderRadius: '4px',
  ':hover': {
    backgroundColor: theme.palette.secondary.light
  }
}));

export const SocialCard = styled(ProjectOverview)(() => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0',
  padding: '0'
}));

export const AddInputBox = styled(Box)(() => ({
  position: 'relative',
  width: '200px',
  paddingTop: '2rem'
}));

export const StyledConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.root}`]: {
    right: 'calc(50% + 10px)',
    left: 'calc(-50% + 10px)'
  },
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.error.main
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.error.main
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 1,
    border: 0,
    backgroundColor: theme.palette.secondary.light,
    borderRadius: 1
  }
}));
