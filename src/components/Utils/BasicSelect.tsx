import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const menuItems = ['EGLD', 'RIDE', 'ITHEUM'];
  const [token, setToken] = React.useState(menuItems[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setToken(event.target.value as string);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel>Token</InputLabel>
        <Select
          size='medium'
          value={token}
          label='Token'
          onChange={handleChange}
        >
          {menuItems.map((menuItem) => (
            <MenuItem key={menuItem} value={menuItem}>
              {menuItem}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
