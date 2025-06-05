import { useNavigate } from 'react-router-dom'

function Leaderboard() {
    const navigate = useNavigate()

    function playAgain() {
        navigate('/')
    }

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
                    <tr>
                        <td className="text-center">jah</td>
                        <td className="text-center">bah</td>
                    </tr>
                    <tr>
                        <td className="text-center">dag</td>
                        <td className="text-center">xas</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Leaderboard
