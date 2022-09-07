// import React, { useState, useEffect } from "react";
// import styles from './ActivityTracker.module.scss';
// import axios from 'axios';

// export default function ActivityTracker() {
//     const [fetchedData, setFetchedData] = useState([]);

//     useEffect(() => {
//         const getData = async () => {
//             const data = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
//             setFetchedData(data);
//         };
//         getData();
//     }, []);

//   return (
//     <div className={styles.container}>
//         <div className={styles.box}>
//             <div className={styles.header}>
//                 Last 30 Days Activities
//             </div>
//             <div className={styles.content}>
//                 { fetchedData.data ? <div>{fetchedData.data.title}</div> : null }
//             </div>
//         </div>
//     </div>
//   )
// }

import React, { useState, useEffect } from "react";
import Creatable from "react-select/creatable";
import { withAsyncPaginate } from "react-select-async-paginate";
import styles from './ActivityTracker.module.scss';
import loadOptions from "../../data/loadOptions";
import axios from 'axios';

import dayjs from 'dayjs';
// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// const CreatableAsyncPaginate = withAsyncPaginate(Creatable);

const App = () => {
  const [value, setValue] = React.useState(dayjs());

  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
        const getData = async () => {
            const data = await axios
            .get("https://my-json-server.typicode.com/iyabc/mockend/posts");
            setFetchedData(data);
        };
        getData();
    }, []);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.header}>
            Last 30 Days 
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DatePicker
                  views={['year']}
                  label="Year only"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} helperText={null} />}
                />
                <DatePicker
                  views={['year', 'month']}
                  label="Year and Month"
                  minDate={dayjs('2012-03-01')}
                  maxDate={dayjs('2023-06-01')}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} helperText={null} />}
                />
                <DatePicker
                  openTo="year"
                  views={['year', 'month', 'day']}
                  label="Year, month and date"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} helperText={null} />}
                />
                <DatePicker
                  views={['day', 'month', 'year']}
                  label="Invert the order of views"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} helperText={null} />}
                />
                <DatePicker
                  views={['day']}
                  label="Just date"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} helperText={null} />}
                />
              </Stack>
            </LocalizationProvider> */}
        </div>
        <div className={styles.content}>
          {fetchedData.data && fetchedData.data.slice(0,30).map((item) => {
            return (
              <div className={styles.row} key={item.userId}>
                <div className={styles.header}>{item.userId}</div>
                <div className={styles.header}>{item.id}</div>
                <div className={styles.content}>{item.title}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
