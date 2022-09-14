import React, { useState, useEffect } from "react";
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
  const { control, handleSubmit, getValues } = useForm<IFormValues>();
  const [data, setData] = useState<string>("");
  const [urlErrorStatus, setUrlErrorStatus] = useState<boolean>(true);
  const [urlCheckResult, setUrlCheckResult] = useState<string>("");
  const onSubmit: SubmitHandler<IFormValues> = (data) =>
    setData(JSON.stringify(data));

  const urlStr = getValues("url");

  useEffect(() => {
    if (urlStr !== "") {
      checkUrl();
    }
  }, [urlStr]);

  const checkUrl = () => {
    if (urlStr === "" || urlStr == undefined) {
      setUrlErrorStatus(false);
      setUrlCheckResult("");
    } else {
      try {
        const url = new URL(urlStr);
        const jobKey = url.searchParams.get("jk");
        if (jobKey !== null) {
          fetch(`/jobhunter-app/add/check?jk=${jobKey}`)
            .then((response) => response.json())
            .then((result) => {
              console.log(result);
              if (result.posting_is_new) {
                setUrlErrorStatus(false);
                setUrlCheckResult("Posting is new");
              } else {
                setUrlErrorStatus(true);
                setUrlCheckResult("Posting already exists");
              }
            })
            .catch((error) => console.log("Error: ", error));
        } else {
          setUrlErrorStatus(true);
          setUrlCheckResult(
            "Couldn't find job key in query parameters (jk=...)"
          );
        }
      } catch (error) {
        console.log("Error: ", error);
        setUrlErrorStatus(true);
        setUrlCheckResult("Invalid URL");
      }
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name="url"
            control={control}
            render={({ field }) => (
              <TextField
                error={urlErrorStatus}
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
        {/*
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
        */}
        {data ? <Grid item>{data}</Grid> : null}
        <Grid item>
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
