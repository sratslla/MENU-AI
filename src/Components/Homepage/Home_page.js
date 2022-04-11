import React,{useState} from 'react';
import "./Home-page.css"
import {useNavigate, Link} from 'react-router-dom';
const Page = () => {
    const [mainText, setmainText] = useState("Welcome to ALLSTARS FineDine & Bar")
    const [mainTextPara1, setmainTextPara1] = useState("")
    const [mainTextPara2, setmainTextPara2] = useState("")
    const [mainTextPara3, setmainTextPara3] = useState("")
    const [secondText, setsecondText] = useState("Continue")
    // const [moveButton, setmoveButton] = useState("main-button")
    // const [moveButton2, setmoveButton2] = useState("main-button-2")
    const [backText, setbackText] = useState("")
    const [buttonCount, setbuttonCount] = useState(0)
    const navigate = useNavigate()
    const ChangeSlide = () => {
        if(buttonCount === 0){
            setmainText("INSTRUCTIONS")
            setmainTextPara1("1-Say show me the menu to view the menu.")
            setmainTextPara2("2- Say Page (1/2/3) to turn the page.")
            setmainTextPara3("3- Say add itemname to the cart to add item.")
            setsecondText("Order")
            setbackText("Back")
            setbuttonCount(1)
            console.log(buttonCount)
        }
        else{
            navigate("/cart")
        }
    }
    console.log(buttonCount)

    const backSlide = () => {
        if(buttonCount === 1){
            setbackText("")
            setmainText("Welcome to ALLSTARS Restaurant")
            setsecondText("Continue")
            setbuttonCount(0)
        }
    }

    return (
        <div className = 'container'>
            <div className = 'background-pic'></div>
            <div className = 'show'>
                <div className = 'first-container'>
                    <p className = 'main-text'>{mainText}</p>
                    <p className = 'main-text-para'>{mainTextPara1}</p>
                    <p className = 'main-text-para'>{mainTextPara2}</p>
                    <p className = 'main-text-para'>{mainTextPara3}</p>
                    <button className = 'main-button' onClick = {ChangeSlide}>
                        <span>{secondText}</span>
                        <div className="liquid"></div>
                    </button>
                    <button className = 'back-button' onClick = {backSlide}>{backText}
                    </button>
                </div>
            </div>
        </div>
    )

}
export default Page;