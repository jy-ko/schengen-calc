import React, {useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {countries} from "./countries";
import "./Form.css"
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

type Inputs = {
  example: string,
  exampleRequired: string,
};

export default function Form() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  const [startDate, setStartDate] = useState<Dayjs | null>(
    dayjs(),
  );
  const [endDate, setEndDate] = useState<Dayjs | null>(
    dayjs(),
  );

  const handleStartDateChange = (newValue: Dayjs | null) => {
    setStartDate(newValue)
  };
  const handleEndDateChange = (newValue: Dayjs | null) => {
    setEndDate(newValue)
  };

  console.log(watch("example")) // watch input value by passing the name of it

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
     <Stack spacing={3} sx={{ width: 300 }}>
     <Autocomplete
      disablePortal
      id="country-form"
      options={countries}
      sx={{ width: 300, border: '1px solid white', color : "white" }}
      renderInput={(params) => <TextField sx={{ input: { color: 'red' } }}  {...params} label="Country" />}
    />
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
            label="Start Date"
            inputFormat="MM/DD/YYYY"
            value={startDate}
            onChange={handleStartDateChange}
            renderInput={(params) => <TextField {...params} />}
            />
        <DesktopDatePicker
        label="End Date"
        inputFormat="MM/DD/YYYY"
        value={endDate}
        onChange={handleEndDateChange}
        renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      </Stack>
      <input type="submit" />
    </form>
  );
}

