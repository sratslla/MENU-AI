import React,{useState, useEffect} from "react"
import alanBtn from '@alan-ai/alan-sdk-web';
import "./CartApp.css"

function CartApp() {
  const [cart, setcart] = useState([])
  const [menuItems, setmenuItems] = useState([])
  const [menuItems2, setmenuItems2] = useState([])
  const [menuItems3, setmenuItems3] = useState([])
  const [title1, settitle1] = useState('')
  const [title2, settitle2] = useState('')
  const [title3, settitle3] = useState('')
  const [title, settitle] = useState("Say 'Show me the Menu'")


  useEffect(() => {
    alanBtn({
      key: '04b3b338e4e1f5dca919bf714daed2ed2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if (commandData.command === 'getMenu') {
          setmenuItems(commandData.data1)
          setmenuItems2(commandData.data2)
          setmenuItems3(commandData.data3)
          settitle1('Soup & Starters')
          settitle2('Chinese & South Indian')
          settitle3('Italian')
          settitle("Say 'Add 'Dish' to the Cart ")
        }
        else if (commandData.command === 'Page 1') {
          setmenuItems(commandData.data10)
          setmenuItems2(commandData.data11)
          setmenuItems3(commandData.data12)
          settitle1('Soup & Starters')
          settitle2('Chinese & South Indian')
          settitle3('Italian')
        }
        else if (commandData.command === 'Page 2') {
          setmenuItems(commandData.data4)
          setmenuItems2(commandData.data5)
          setmenuItems3(commandData.data6)
          settitle1('Vegetables')
          settitle2('Paneer Vegetable')
          settitle3('Breads')
        }
        else if (commandData.command === 'Page 3') {
          setmenuItems(commandData.data7)
          setmenuItems2(commandData.data8)
          setmenuItems3(commandData.data9)
          settitle1('Mocktails')
          settitle2('Alcoholic Drink')
          settitle3('Desserts')
        }
        else if (commandData.command === 'addToCart') {
          addToCart(commandData.data)
        }
      }
  });
  }, [])

  const addToCart = (menuItem) => {
    setcart((oldcart) => {
      return [...oldcart, menuItem]
    })
  }

  return(
    <div className = "container">
      <div className = 'background-pic'></div>
      <div className = "title">{title}</div>
      <div className = "Cart">Cart</div>
      <div className = "up-container">
        <div className="up-container-1"><h2>{title1}</h2>
          {menuItems.map((menuItem) => (
            <li key = {menuItem.name}>{menuItem.name} - {menuItem.price}Rs </li>
          ))
          }
        </div>
        <div className="up-container-2"><h2>{title2}</h2>
          {menuItems2.map((menuItem2) => (
            <li key = {menuItem2.name}>{menuItem2.name} - {menuItem2.price}Rs</li>
          ))
          }
        </div>
        <div className="up-container-3"><h2>{title3}</h2>
          {menuItems3.map((menuItem3) => (
            <li key = {menuItem3.name}>{menuItem3.name} - {menuItem3.price}Rs</li>
          ))
          }
        </div>
        
      </div>

      <div className = "down-container">
        <div className = "down-container-1">
          {cart.map((cartItem) => (
            <li key={cartItem.name}>{cartItem.name} - {cartItem.price}Rs - {cartItem.category}</li>
          ))}
        </div>
    </div>
    </div>
  )
}
export default CartApp;
