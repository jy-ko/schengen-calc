import { useForm, Controller } from "react-hook-form";
import Stack from "@mui/material/Stack";
import { countries } from "./countries";
import "./Form.css";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MenuItem, Select, TextField } from "@mui/material";

type FormValues = {
  country: string;
  startDate: string;
  endDate: string;
};

export default function Form() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const generateSelectOptions = () => {
    return countries.map((option) => {
      return (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      );
    });}
  
  return (
    <div className="form__background">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Stack spacing={3} sx={{ width: 300 }}>
          <Controller
            name="country"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <Select onChange={onChange} value={value}>
              {generateSelectOptions()}
            </Select>
            )}

          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              name="startDate"
              defaultValue={`${dayjs()}`}
              control={control}
              render={({ field: { onChange, value } }) => (
                <DesktopDatePicker
                  label="Start Date"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={onChange}
                  InputProps={{ className: "textfield__label" }}
                  renderInput={(params) => <TextField {...params} />}
                />
              )}
            />
            <Controller
              name="endDate"
              defaultValue={`${dayjs()}`}
              control={control}
              render={({ field: { onChange, value } }) => (
                <DesktopDatePicker
                  label="End Date"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={onChange}
                  InputProps={{ className: "textfield__label" }}
                  renderInput={(params) => <TextField {...params} />}
                />
              )}
            />
          </LocalizationProvider>
          {/* errors will return when field validation fails  */}
          {errors.startDate && <span>This field is required</span>}
        </Stack>
        <input type="submit" value="Add Trip" className="submitButton" />
      </form>
    </div>
  );
}
