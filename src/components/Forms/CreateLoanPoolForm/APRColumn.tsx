import React from 'react';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import PercentageWithIcon from 'components/Utils/PercentageWithIcon';
import { IAPRColumn } from 'interfaces/columns';

interface Props {
  columnData?: IAPRColumn;
}

const APRColumn = ({ columnData: { apr } = { apr: 0 } }: Props) => {
  return (
    <PercentageWithIcon
      icon={<MonetizationOnRoundedIcon />}
      percentage={apr?.toString()}
    />
  );
};

export default APRColumn;
