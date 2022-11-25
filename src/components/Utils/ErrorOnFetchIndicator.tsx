import { Box } from '@mui/system';
import { CenteredBox } from 'src/components/StyledComponents/StyledComponents';

type Props = {
  dataName: string;
};

const ErrorOnFetchIndicator = ({ dataName }: Props) => {
  return (
    <CenteredBox
      sx={{ justifyContent: 'start !important', marginTop: '1.5rem' }}
    >
      <Box sx={{ marginLeft: '10px' }}>{`Error fetching ${dataName}s`}.</Box>
    </CenteredBox>
  );
};

export default ErrorOnFetchIndicator;
