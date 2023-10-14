
import './App.css';
import MyHeader from './Header'
import Card from './Card'


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
  return (
    <div className="App">
       <MyHeader/>
        <h1>My First App</h1>
        <button className='btn btn-dark'>Click Me</button>
      {/* <Card cards={cardDetail}/> */}

      {
      cardDetail.map(
        (items) =>{
          return <Card items={items}/>
          // return <Card title={items.title} description={items.description}/>

      })
      }
    
    </div>
  );
}

export default App;
