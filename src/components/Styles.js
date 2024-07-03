import { styled } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';

export const inputStyles = {
    background: '#fff',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    '& .MuiOutlinedInput-notchedOutline': {
      borderWidth: 0
    },
    '& .MuiInputBase-input': {
      height: 30
    },
    '& .MuiInputBase-root': {
      height: 48
    },
    '&:focus-within fieldset, &:focus-visible fieldset': {
      borderWidth: '1px!important',
      borderRadius: '0.5rem'
    }
  }
  
  export const StyledAutocomplete = styled(Autocomplete)({
    '& .MuiAutocomplete-popupIndicator': {
      transform: 'none',
    },
    '& .MuiAutocomplete-popupIndicatorOpen': {
      transform: 'none',
    },
  });