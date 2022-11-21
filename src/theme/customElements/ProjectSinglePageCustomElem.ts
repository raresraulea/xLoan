import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import colors from '../customColors';
import { flexCentered } from '../utility';

export const HeaderProject = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  padding: '0.9rem 0 1.5rem 0',
  borderBottom: `1px solid ${theme.palette.secondary.light}`,
  marginTop: '1rem',
  minHeight: '102px'
}));

export const ProjectDetails = styled(Box)(({ theme }) => ({
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
    gridTemplateColumns: 'repeat(2,1fr)',
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

export const ProjectDetailsCard = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.secondary.main}`,
  border: `1px solid ${theme.palette.secondary.light}`,
  borderRadius: '4px',
  padding: '1rem',
  height: '125px'
}));

export const ProjectTable = styled(Box)(({ theme }) => ({
  display: 'flex',
  backgroundColor: `${theme.palette.secondary.main}`,
  border: `1px solid ${theme.palette.secondary.light}`,
  borderRadius: '6px 6px 6px 0',
  marginTop: '1.5rem'
}));

export const ProjectOverview = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.secondary.main}`,
  border: `1px solid ${theme.palette.secondary.light}`,
  borderRadius: '6px 6px 6px 6px',
  marginTop: '1.5rem',
  padding: '1rem',
  paddingTop: '1.5rem'
}));

export const WrapperContainer = styled(ProjectOverview)(() => ({
  padding: '1rem'
}));

export const ProjectOverviewSidebar = styled(Box)(() => ({
  marginTop: '3.5rem',
  paddingInline: '1.5rem',
  display: 'flex',
  gap: '1rem',
  flexDirection: 'column'
}));

export const Separator = styled('div')(({ theme }) => ({
  width: '100%',
  height: '1px',
  backgroundColor: theme.palette.secondary.light
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  marginBottom: '0.8rem'
}));

export const OverviewTitle = styled(Typography)(() => ({
  fontSize: '28px',
  fontWeight: 700
}));

export const OverviewSubTitle = styled(Typography)(() => ({
  fontSize: '15px',
  fontWeight: 500,
  color: colors.orange
}));

export const StatusBtn = styled(Button)(({ theme }) => ({
  height: '25px',
  borderRadius: '4px',
  backgroundColor: theme.palette.success.main,
  color: colors.darkGreenText,
  marginBottom: '1rem',
  marginTop: '0.1rem'
}));

export const ClaimBtn = styled(Button)(({ theme }) => ({
  ...theme.typography.h6,
  fontWeight: 700,
  padding: '0.55rem'
}));

export const SeeAllListingsBtn = styled(Button)(({ theme }) => ({
  fontWeight: 500,
  borderRadius: '0 0 6px 6px',
  border: `1px solid ${theme.palette.secondary.light}`,
  borderTop: 'none',
  backgroundColor: `${theme.palette.secondary.main}`,
  paddingBlock: '0.85rem'
}));

export const ProjectTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h2,
  fontWeight: 700,
  marginLeft: '0.5rem'
}));

export const SecoundProjectTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h2,
  fontWeight: 400,
  marginLeft: '0.5rem',
  opacity: 0.5
}));

export const ProjectTeamCardContainer = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gap: '0.5rem'
}));

export const ProjectTeamCard = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.secondary.main}`,
  border: `1px solid ${theme.palette.secondary.light}`,
  borderRadius: '4px',
  padding: '1rem'
}));

export const ProjectTeamCardText = styled(Typography)(({ theme }) => ({
  ...theme.typography.h4,
  fontWeight: 400,
  opacity: 0.7,
  lineHeight: '150%'
}));

export const ProjectPartnersContainer = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gap: '0.5rem'
}));

export const ProjectPartnersCard = styled(ProjectOverview)(() => ({
  ...flexCentered,
  margin: '0',
  padding: '2rem'
}));

export const ProjectSocialCardContainer = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(7,1fr)',
  gap: '0.5rem'
}));

export const ProjectSocialCard = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.secondary.main}`,
  border: `1px solid ${theme.palette.secondary.light}`,
  borderRadius: '4px',
  padding: '3rem',
  ...flexCentered
}));
