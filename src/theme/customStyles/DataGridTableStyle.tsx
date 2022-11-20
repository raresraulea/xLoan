import { useTheme } from '@mui/material';

const DataGridTableStyle = () => {
  const theme = useTheme();
  return {
    '& .MuiDataGrid-columnHeaderTitle': {
      ...theme.typography.h5,
      fontWeight: 500,
      color: theme.palette.primary.main,
      opacity: '50%'
    },
    '& .MuiDataGrid-cellContent': {
      ...theme.typography.h5,
      color: theme.palette.primary.main,
      paddingRight: '3rem',
      maxWidth: '100%'
    },
    '& .MuiTablePagination-selectLabel': {
      ...theme.typography.h6,
      fontWeight: 400,
      color: theme.palette.text.secondary
    },
    '& .MuiSelect-icon': {
      color: theme.palette.text.secondary
    },
    '& .MuiTablePagination-select': {
      marginTop: '0.3rem'
    }
  };
};

export default DataGridTableStyle;
