import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { FC } from "react";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

type InputProps = {
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  half?: boolean;
  autoFocus?: boolean;
  type?: string;
  handleShowPassword?: () => void;
};

export const Input: FC<InputProps> = ({
  name,
  handleChange,
  label,
  half,
  autoFocus,
  type,
  handleShowPassword,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        // InputProps={name === 'password' ? {
        //     endAdornment: (
        //       <InputAdornment position="end">
        //         <IconButton onClick={handleShowPassword}>
        //           {type === 'password' ? <Visibility /> : <VisibilityOff />}
        //         </IconButton>
        //       </InputAdornment>
        //     ),
        //   } : null}
      />
    </Grid>
  );
};
