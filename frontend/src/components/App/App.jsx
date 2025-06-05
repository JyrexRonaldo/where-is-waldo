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
    const navigate = useNavigate()

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal
        async function postTime() {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_BACKEND_DOMAIN}/best/`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            time: new Date(),
                        }),
                        signal,
                    }
                )
                const data = await response.json()
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        postTime()
        return () => {
            controller.abort();
        }
    }, [exit])

    const beachClickHandler = (e) => {
        // console.log(e.target.classList.contains('beach'))
        setShow(!show)
        if (e.target.classList.contains('beach')) {
            setXOffset(e.nativeEvent.offsetX)
            setYOffset(e.nativeEvent.offsetY)
        }
    }

    const submitScoreHandler = async () => {
        console.log(name)
        // try {
        //     const response = await fetch(
        //         `${import.meta.env.VITE_BACKEND_DOMAIN}/best/`,
        //         {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify({
        //                 name: name,
        //             }),
        //         }
        //     )
        //     const data = await response.json()
        //     console.log(data)
        // } catch (error) {
        //     console.log(error)
        // }
        navigate('/best')
    }
    // console.log(typeof xOffset)
    // console.log({ xOffset, yOffset })

    // console.log(import.meta.env.VITE_BACKEND_DOMAIN)

    if (characterArray.length === 0) {
        setShow(false)
        setShowDialog(true)
        setCharacterArray(['yeah'])
        setExit(1)
    }

    return (
        <div className="flex min-h-screen bg-gray-700">
            <div className="flex w-40 flex-col justify-center gap-8 bg-gray-800 px-4 py-4">
                <p className="text-white">Timer: </p>
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
            <div
                style={{ backgroundImage: `url(${beach})` }}
                onClick={beachClickHandler}
                className="beach relative grow bg-amber-900"
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
            {showDialog && (
                <dialog
                    className="mx-auto self-center bg-black px-8 py-8.5 text-white"
                    open
                >
                    <form method="dialog" className="flex flex-col">
                        <p className="mb-2">Game finished in 40 seconds!</p>
                        <div className="mb-4.5 flex flex-col">
                            <label htmlFor="username">Name:</label>
                            <input
                                type="text"
                                id="username"
                                className="rounded-md border-1 px-1.5"
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
                    </form>
                </dialog>
            )}
        </div>
    )
}

export default App
