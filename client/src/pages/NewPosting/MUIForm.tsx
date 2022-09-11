import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { IFormValues } from "./interfaces";
import { TYPE_OPTIONS, LEVEL_OPTIONS } from "./formSelectOptions";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

export default function MUIForm() {
  const { control, handleSubmit } = useForm<IFormValues>();
  const [data, setData] = useState<string>("");
  const onSubmit: SubmitHandler<IFormValues> = (data) =>
    setData(JSON.stringify(data));

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name="url"
            control={control}
            render={({ field }) => (
              <TextField
                required
                fullWidth
                label="Url"
                type="url"
                variant="filled"
                autoFocus
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controller
            name="position"
            control={control}
            render={({ field }) => (
              <TextField
                required
                fullWidth
                label="Position"
                variant="filled"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controller
            name="company"
            control={control}
            render={({ field }) => (
              <TextField
                required
                fullWidth
                label="Company"
                variant="filled"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <TextField
                required
                fullWidth
                label="Location"
                variant="filled"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="type-select-label">Type</InputLabel>
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <Select labelId="type-select-label" label="TypeAAA" {...field}>
                  {TYPE_OPTIONS.map((option) => (
                    <MenuItem key={option.id} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="level-select-label">Level</InputLabel>
            <Controller
              name="level"
              control={control}
              render={({ field }) => (
                <Select
                  labelId="level-select-label"
                  label="LevelAAA"
                  {...field}
                >
                  {LEVEL_OPTIONS.map((option) => (
                    <MenuItem key={option.id} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controller
            name="due_date"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                required
                label="Due Date"
                variant="filled"
                type="date"
                InputLabelProps={{ shrink: true }}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="responsibilities"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                required
                multiline
                rows={15}
                label="Responsibilities"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="qualifications"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                required
                multiline
                rows={15}
                label="Qualifications"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="other"
            control={control}
            render={({ field }) => (
              <TextField fullWidth label="Other" variant="filled" {...field} />
            )}
          />
        </Grid>
        <Grid item>{data}</Grid>
        <Grid item>
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
