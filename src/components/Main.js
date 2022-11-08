import React, {useState, useEffect} from 'react'
import Body from './Body'
import Header from './Header'

function Main() {
  const [data, setData] = useState(require('../data.json'));
  const [reload, setReload] = useState(false)

  const dataHandler = (newData) => {
    setReload(true)
    setTimeout(() => {
      setData(newData)
      setReload(false)
    }, 1000);
  }

   if (!reload) { return(
    <>
        <Header data={data} dataHandler={dataHandler}  />
        <Body data={data} dataHandler={dataHandler} />
    </>
  )} else {
    return <h1>Loading...</h1>
  }
}

export default Main