import React from 'react';
import ContrastRoundedIcon from '@mui/icons-material/ContrastRounded';
import PercentageWithIcon from 'components/Utils/PercentageWithIcon';
import { IFilledColumn } from 'interfaces/columns';

interface Props {
  columnData?: IFilledColumn;
}

const FilledColumn = ({
  columnData: { filledPercentage } = { filledPercentage: 100 }
}: Props) => {
  return (
    <PercentageWithIcon
      icon={<ContrastRoundedIcon />}
      percentage={
        filledPercentage === Infinity ? 'Uncapped' : filledPercentage.toString()
      }
    />
  );
};

export default FilledColumn;
