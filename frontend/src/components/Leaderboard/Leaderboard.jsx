import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Leaderboard() {
    const navigate = useNavigate()
    const [scores, setScores] = useState([])

    function playAgain() {
        navigate('/')
    }

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal
        async function getScores() {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_BACKEND_DOMAIN}/best/`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        signal,
                    }
                )
                const data = await response.json()
                setScores(data)
            } catch (error) {
                console.log(error)
            }
        }
        getScores()
        return () => {
            controller.abort()
        }
    }, [scores.length])

    return (
        <div className="flex min-h-screen flex-col items-center gap-2 bg-neutral-500">
            <button
                onClick={playAgain}
                className="mt-16 rounded-md bg-black px-3 py-2 text-white"
            >
                Play Again
            </button>

            <p className="text-3xl">Best Scores</p>
            <table className="min-w-2xs">
                <thead>
                    <tr className=" ">
                        <th className="text-center text-2xl">Name:</th>
                        <th className="text-center text-2xl">Time:</th>
                    </tr>
                </thead>
                <tbody>
                    {scores &&
                        scores.map((score) => (
                            <tr key={score.id}>
                                <td className="text-center">{score.name}</td>
                                <td className="text-center">
                                    {score.time} seconds
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default Leaderboard
