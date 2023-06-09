import React, { useState } from 'react'
import classes from "./Home.module.css"
import Button from './Button'

function Home() {

  const [res, setRes] = useState("")

  const buttons = ["C", "9", "/", "8", "7", "6", "*", "5", "4", "3", "+", "2", "1", "0", "-", ".", "Del", "="];
  const findval = () => {
    let result = Function("return " + res)();
    setRes((res + " = " + result.toString()));
  }

  const handler = (arg) => {
    // console.log("arg : ", arg)
    if (res === "Infinity") {
      setRes("");
      return;
    }
    // console.log("res : ", res)
    if (arg == "C")
      setRes("");
    else if (arg == "=")
      findval();
    else if (arg == "Del") {
      let n = res.length;
      if (n > 0)
        setRes(res.slice(0, n - 1));
    }
    else if (res.indexOf('=').toString() != '-1')
      setRes(res.slice(res.indexOf('=') + 1, res.length) + arg);
    else
      setRes(res.concat(arg));
  }

  return (
    <div className={classes.home}>
      <div className={classes.inner}>
        <div className={classes.result}>
          <div className={classes.resbox}>
            {res}
          </div>
        </div>
        <div className={classes.btns}>
          {buttons.map((ele, index) => { return <Button handler={handler} value={ele} key={index} /> })}
        </div>
      </div>
    </div>
  )
}

export default Home
