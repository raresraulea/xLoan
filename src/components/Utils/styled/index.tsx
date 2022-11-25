import { Box, Box, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';

export const MainTable = styled(DataGrid)(({ theme: _ }) => ({
  '&&&': {
    borderRadius: '10px',
    backgroundColor: _.palette.background.secondary,
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
      margin: 0,
      color: _.palette.black.reducedOpacity
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
      marginLeft: '15px',
      '& button svg': {
        color: _.palette.secondary.main
      }
    }
  }
}));

export const StakingSearchBar = styled(TextField)`
  &&& {
    width: 100%;
    & .MuiFilledInput-root {
      background-color: transparent;
      color: ${(props) => props.theme.palette.text.primary} !important;
    }
    & .MuiFilledInput-root:before {
      border-bottom: 1px solid
        ${(props) => props.theme.palette.divider.secondary};
    }
    & .MuiFilledInput-root:after {
      border-color: ${(props) => props.theme.palette.borders.active};
    }
    & .MuiFilledInput-input {
      padding: 1rem 0;
    }
    & .MuiSvgIcon-root {
      color: ${(props) => props.theme.palette.text.primary};
    }
    &:hover {
      & .MuiFilledInput-root:before {
        border-color: ${(props) => props.theme.palette.borders.active};
      }
    }
  }
`;

export const CenteredBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
