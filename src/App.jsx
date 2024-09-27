import Navigaiton from './component/Navigaiton'
import Hero from './component/Hero'
import Card from './component/Card'

function App() {
  const cards = [
    {
     title:"Premium Quality Fruits",
      description:"Handpicked, juicy, and premium quality fruits to give you the best taste and nutrition with every bite",
      img:"https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/14-min.jpg"
    },
    {
      title:"Fresh Organic Vegetables",
       description:"Delicious and freshly baked bread, cookies, and pastries, perfect to complement any meal or snack.",
       img:"https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/4-min.jpg"
    },
    {
      title:"Organic Berries",
       description:"Discover a wide variety of fresh and organic vegetables sourced from local farms. Perfect for a healthy lifestyle.",
       img:"https://demo.xpeedstudio.com/marketov2/home5/wp-content/uploads/sites/5/2018/05/09-300x300.png"
    },
    {
      title:"Fresh Apple",
       description:"From mangoes to apple, our tropical fruits bring a taste of the islands right to your door.",
       img:"https://demo.xpeedstudio.com/marketov2/home5/wp-content/uploads/sites/5/2018/05/03-300x300.png"
    }
  ]
console.log({cards})
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navigaiton/>
      <Hero/>
      <div className='p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
      {cards.map((card, index) => <Card key={index} card={card}/>)}
      </div>
    </div>
  )
}

export default App
