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

// import React, { useState, useEffect } from "react";
// import Creatable from "react-select/creatable";
// import { withAsyncPaginate } from "react-select-async-paginate";
// import styles from './ActivityTracker.module.scss';
// import loadOptions from "../../data/loadOptions";
// import axios from 'axios';

// const CreatableAsyncPaginate = withAsyncPaginate(Creatable);

// const App = () => {
//   const [value, onChange] = useState(null);

//   const [fetchedData, setFetchedData] = useState([]);
//   useEffect(() => {
//         const getData = async () => {
//             const data = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
//             setFetchedData(data);
//         };
//         getData();
//     }, []);

//   return (
//     <div className={styles.container}>
//       <div className={styles.box}>
//         <div className={styles.header}>
//             Last 30 Days Activities
//             <CreatableAsyncPaginate
//                 value={value}
//                 loadOptions={loadOptions}
//                 onChange={onChange}
//             />
//         </div>
//         <div className={styles.content}>
//             <p>Current value is {JSON.stringify(value)}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { Component } from "react";
import AsyncSelect from "react-select/async";
import styles from './ActivityTracker.module.scss';

class ActivityTracker extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedOption: {},
      normalSelectOption: null,
    };
  }

  fetchData = (inputValue, callback) => {
    setTimeout(() => {
      fetch(
        "https://my-json-server.typicode.com/typicode/demo/comments/" +
          inputValue,
        {
          method: "GET",
        }
      )
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          const tempArray = [];
          if (data) {
            if (data.length) {
              data.forEach((element) => {
                tempArray.push({
                  label: `${element.body}`,
                  value: element.id,
                });
              });
            } else {
              tempArray.push({
                label: `${data.body}`,
                value: data.id,
              });
            }
          }
          callback(tempArray);
        })
        .catch((error) => {
          console.log(error, "catch the hoop");
        });
    }, 1000);
  };

  onSearchChange = (selectedOption) => {
    if (selectedOption) {
      this.setState({
        selectedOption,
      });
    }
  };
  handleChange = (normalSelectOption) => {
    this.setState({ normalSelectOption });
  };
  render() {
    return (
      <div className={styles.container}>
        <div>
          <p>Remote data</p>
          <AsyncSelect
            value={this.state.selectedOption}
            loadOptions={this.fetchData}
            placeholder="Admin Name"
            onChange={(e) => {
              this.onSearchChange(e);
            }}
            defaultOptions={true}
          />
        </div>
      </div>
    );
  }
}

export default ActivityTracker;