
import './App.css';
// import MyHeader from './Header'
import Card from './Card'
import { useEffect, useState } from 'react';
import UserForm from './UserForm';


function App() {
  const cardDetail = [
    {
      title: "RED CARD 1",
      color: "primary",
      description: "This is my first red card content which is good"
    },
    {
      title: "RED CARD 2",
      color: "dark",
      description: "This is my second red card content which is good"
    },
    {
      title: "RED CARD 3",
      color: "success",
      description: "This is my third red card content which is good"
    },
  ]

  const [userName, setUserName] = useState("user")
  const [count, setCount] = useState(1)

  useEffect(() => {
      setUserName("First Name render")
    }, [])

  useEffect(() => {
    if (count > 4) {
      setUserName("Count Changed")
    }
  }, [count])


  const changeName = () => {
    setUserName("Default User")
  }
  const increaseCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      {/* <MyHeader/> */}
      <h1>My First App</h1>

      <p className='mt-5'> Username :-{userName} | Count : {count} </p>
      <input type='text' name={"username"} value={userName} onChange={(event) => setUserName(event.target.value)} />
      <button className='btn btn-dark mt-5' onClick={changeName}>Change Name</button>
      <button className='btn btn-dark mt-5' onClick={increaseCount}>Change count</button>

      {/* {
        cardDetail.map(
          (items) => {
            return <Card items={items} />
            // return <Card title={items.title} description={items.description}/>

          })
      } */}

      <UserForm/>

    </div>
  );
}

export default App;
