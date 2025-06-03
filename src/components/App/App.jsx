import waldoImg from '/waldo.png'
import odlawImg from '/odlaw.gif'
import wizardImg from '/wizard.gif'
import beach from '/beach3.webp'
import CharacterDropdown from '../CharacterDropdown/CharacterDropdown'
import { useState } from 'react'

function App() {
    const [xOffset, setXOffset] = useState(null)
    const [yOffset, setYOffset] = useState(null)
    const [show, setShow] = useState(false)

    const beachClickHandler = (e) => {
        // console.log('Yeah')
        setShow(!show)
        setXOffset(e.nativeEvent.offsetX)
        setYOffset(e.nativeEvent.offsetY)
    }
    // console.log(typeof xOffset)
    console.log({ xOffset, yOffset })

    return (
        <div className="flex min-h-screen bg-gray-700">
            <div className="flex w-40 flex-col justify-center gap-8 bg-gray-800 px-4 py-4">
                <p className="text-white">Timer: </p>
                <div className="flex flex-col items-center">
                    <img src={waldoImg} alt="" />
                    <p className="text-white">Waldo</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={wizardImg} alt="" />
                    <p className="text-white">Wizard</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={odlawImg} alt="" />
                    <p className="text-white">Odlaw</p>
                </div>
            </div>
            <div
                style={{ backgroundImage: `url(${beach})` }}
                onClick={beachClickHandler}
                className="relative grow bg-amber-900"
            >
                {show && <CharacterDropdown x={xOffset} y={yOffset} />}
            </div>
        </div>
    )
}

export default App
