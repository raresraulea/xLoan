import { Box, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';

export const MainTable = styled(DataGrid)(() => ({
  '&&&': {
    borderRadius: '10px',
    border: 'none',
    '& .MuiDataGrid-columnSeparator': {
      display: 'none'
    },
    '& .MuiDataGrid-columnHeader': {
      padding: '5px 0 0 20px'
    },
    '& .MuiDataGrid-row:hover': {
      '& .MuiButton-root': {
        opacity: '1'
      }
    },
    '& p': {
      margin: 0
    },
    '& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus-visible, & .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus-visible':
      {
        outline: 'transparent'
      },
    '& .MuiTablePagination-select': {
      paddingTop: 0,
      paddingBottom: 0
    },
    '& .MuiInputBase-root': {
      margin: '0 8px'
    },
    '& .MuiTablePagination-actions': {
      marginLeft: '15px'
    }
  }
}));

export const StakingSearchBar = styled(TextField)`
  &&& {
    width: 100%;
    & .MuiFilledInput-root {
      background-color: transparent;
    }
    & .MuiFilledInput-input {
      padding: 1rem 0;
    }
  }
`;

export const CenteredBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
