import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const MaterialUIPickers = (props) => {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
        value={props.dateValue}
        name={props.dateName}
        disableToolbar
        variant="inline"
        format="MM/dd/yy"
        margin="normal"
        onChange={props.dateOnChange}
        required
        KeyboardButtonProps={{
          "aria-label": "change date"
          }}
        />
     
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default MaterialUIPickers;
                    








