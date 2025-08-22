import waldoImg from '/waldo.png'
import odlawImg from '/odlaw.gif'
import wizardImg from '/wizard.gif'
import beach from '/beach3.webp'
import CharacterDropdown from '../CharacterDropdown/CharacterDropdown'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {
    const [xOffset, setXOffset] = useState(null)
    const [yOffset, setYOffset] = useState(null)
    const [show, setShow] = useState(false)
    const [showDialog, setShowDialog] = useState(false)
    const [name, setName] = useState('')
    const [characterArray, setCharacterArray] = useState([
        'waldo',
        'wizard',
        'odlaw',
    ])
    const [exit, setExit] = useState(null)
    const [counter, setCounter] = useState(0)
    const [stopCounter, setStopCounter] = useState(1)
    const [errorMessage, setErrorMessage] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const key = setInterval(() => {
            if (stopCounter) {
                setCounter((count) => count + 1)
            }
        }, 1000)

        return () => {
            // controller.abort()
            clearInterval(key)
        }
    }, [exit, stopCounter])

    const beachClickHandler = (e) => {
        setShow(!show)
        if (e.target.classList.contains('beach')) {
            setXOffset(e.nativeEvent.offsetX)
            setYOffset(e.nativeEvent.offsetY)
        }
    }

    const submitScoreHandler = async () => {
        if (name === '') {
            setErrorMessage('Please enter your name')
            return
        }
        navigate('/best')
        try {
            const response = await fetch(
                `${import.meta.env.VITE_BACKEND_DOMAIN}/best/`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: name,
                        time: counter,
                    }),
                }
            )
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    if (characterArray.length === 0) {
        setShow(false)
        setShowDialog(true)
        setCharacterArray(['yeah'])
        setExit(1)
        setStopCounter(0)
    }

    return (
        <div className="flex min-h-screen bg-gray-700">
            <div className="flex w-40 flex-col justify-center gap-8 bg-gray-800 px-4 py-4">
                {<p className="text-white">Timer: {counter} </p>}
                <div className="flex flex-col items-center">
                    <img src={waldoImg} alt="" />
                    {characterArray.includes('waldo') ? (
                        <p className="text-white">Waldo</p>
                    ) : (
                        <p className="text-green-700">Waldo</p>
                    )}
                </div>
                <div className="flex flex-col items-center">
                    <img src={wizardImg} alt="" />
                    {characterArray.includes('wizard') ? (
                        <p className="text-white">Wizard</p>
                    ) : (
                        <p className="text-green-700">Wizard</p>
                    )}
                </div>
                <div className="flex flex-col items-center">
                    <img src={odlawImg} alt="" />
                    {characterArray.includes('odlaw') ? (
                        <p className="text-white">Odlaw</p>
                    ) : (
                        <p className="text-green-700">Odlaw</p>
                    )}
                </div>
            </div>
            <div className="flex grow items-center justify-center bg-amber-900">
                <div
                    style={{ backgroundImage: `url(${beach})` }}
                    onClick={beachClickHandler}
                    className="beach relative h-[700px] w-[1200px] bg-red-700"
                >
                    {show && (
                        <CharacterDropdown
                            x={xOffset}
                            y={yOffset}
                            characterArray={characterArray}
                            setCharacterArray={setCharacterArray}
                        />
                    )}
                </div>
            </div>
            {showDialog && (
                <dialog
                    className="mx-auto self-center bg-black px-8 py-8.5 text-white"
                    open
                >
                    <form method="dialog" className="flex flex-col gap-2">
                        <p className="mb-2">
                            Game finished in {counter} seconds!
                        </p>
                        <div className="mb-4.5 flex flex-col">
                            <label htmlFor="username">Name:</label>
                            <input
                                type="text"
                                id="username"
                                className="rounded-md border-1 px-1.5 active:bg-black"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                            />
                        </div>
                        <button
                            onClick={submitScoreHandler}
                            className="rounded-md border-1 px-1.5"
                            type="button"
                        >
                            Submit score
                        </button>
                        <p className="self-center text-sm text-red-400">
                            {errorMessage}
                        </p>
                    </form>
                </dialog>
            )}
        </div>
    )
}

export default App
