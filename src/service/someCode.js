function rndNumber(){
    return (+(Math.random() * (50 - -50) + -50).toFixed(0))
  }
  
  
    const adress = 'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
    getResourse = async(url) => {
      let res = await fetch(url)
      if (!res.ok){
        return 'no'
      }
      let response = await res.json()
      return response
    }
    
  
  
  
  function useNumbers(init){
    const [value, setValue] = React.useState(init)
  
  const onInc = () => {
    setValue(value => value + 1)
  }
  const onDec = () => {
    setValue(value => value - 1)
  }
  const onReset = () => {
    setValue(value => init)
  }
  const onRnd = () => {
    setValue(rndNumber())
  }
  return {value, onInc, onDec, onReset, onRnd}
  }
  
  const Counter = (props) => {
      const counter = useNumbers(props.counter);
  
  
  
  
  
      return (
        <div className="component">
          <div className="counter">{counter.value}</div>
          <h3>some text {newNumber}</h3>
          <div className="controls">
            <button onClick={counter.onInc}>INC</button>
            <button onClick={counter.onDec}>DEC</button>
            <button onClick={counter.onRnd}>RND</button>
            <button onClick={counter.onReset}>RESET</button>
          </div>
        </div>
      )
  }
  
  const RndCounter = (props) => {
      const rndCounter = useNumbers(props.counter);
  
      return (
        <div className="component">
          <div className="counter">{rndCounter.value}</div>
          <div className="controls">
            <button onClick={rndCounter.onRnd}>RND</button>
            <button onClick={rndCounter.onReset}>RESET</button>
          </div>
        </div>
      )
  }
  
  const App = () => {
      return (
          <>
              <Counter counter={rndNumber()}/>
              <RndCounter counter={rndNumber()}/>
          </>
      )
  }
  
  ReactDOM.render(<App />, document.getElementById('app'));
  
  