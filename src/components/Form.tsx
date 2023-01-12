import { useForm, Controller } from "react-hook-form";
import Stack from "@mui/material/Stack";
import { countries } from "./countries";
import "./Form.css";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MenuItem, Select, TextField } from "@mui/material";
import { ITrip, FormProps } from "../Interfaces";

const Form: React.FC<FormProps> = (props) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ITrip>();

  const watchStartDate = watch("startDate")

  const generateSelectOptions = () => {
    return countries.map((option) => {
      return (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      );
    });}
  
  function onSubmit(data:any) {
    props.addTrip(data)
  }
  
  return (
    <div className="form__background">
      <form onSubmit={handleSubmit(onSubmit)}>
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
              rules={{ required: true}}
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
              defaultValue={watchStartDate}
              control={control}
              rules={{ required: true}}
              render={({ field: { onChange, value } }) => (
                <DesktopDatePicker
                  label="End Date"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={onChange}
                  InputProps={{ className: "textfield__label" }}
                  renderInput={(params) => <TextField {...params} />}
                  minDate={watchStartDate}
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

export {Form};
