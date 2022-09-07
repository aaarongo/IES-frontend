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

const CreatableAsyncPaginate = withAsyncPaginate(Creatable);

const App = () => {
//   const [value, onChange] = useState(null);

  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
        const getData = async () => {
            const data = await axios
            .get("https://jsonplaceholder.typicode.com/todos");
            setFetchedData(data);
        };
        getData();
    }, []);

  function showData() {
    const noRepeat =[]
    // {fetchedData.data && fetchedData.data.slice(0,30).map((item) => {
    //   if(noRepeat.includes(item.userId)) {
    //     return (
    //       <div className={styles.row} key={item.userId}>
    //         <div className={styles.header}>{item.id}</div>
    //         <div className={styles.content}>{item.title}</div>
    //       </div>
    //     )
    //   }else {
    //     return (
    //       <div className={styles.row} key={item.userId}>
    //         <div className={styles.header}>{item.userId}</div>
    //         <div className={styles.header}>{item.id}</div>
    //         <div className={styles.content}>{item.title}</div>
    //       </div>
    //     )
    //   }
    // })}
    {fetchedData.data && fetchedData.data.slice(0,30).map((item) => {
      return (
        <div className={styles.row} key={item.userId}>
          <div className={styles.header}>{item.userId}</div>
          <div className={styles.header}>{item.id}</div>
          <div className={styles.content}>{item.title}</div>
        </div>
      )
    })}
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.header}>
            Last 30 Days 
        </div>
        <div className={styles.content}>
            {showData()}
        </div>
      </div>
    </div>
  );
};

export default App;
