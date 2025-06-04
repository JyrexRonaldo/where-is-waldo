function CharacterDropdown({ x, y }) {
    

    const validateCoordinate = async (character) => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_BACKEND_DOMAIN}/validate/`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        xCoordinate: x,
                        yCoordinate: y,
                    }),
                }
            )

            const data = await response.json()
            console.log(data)
            if (data === character) {
                console.log(true)
            }
        } catch (error) {
            console.log(error)
        }
    }
    

    return (
        <div
            style={{ top: y, left: x }}
            className={`absolute flex flex-col gap-5 rounded-md bg-black px-3 py-5`}
        >
            <button
                onClick={() => {validateCoordinate("Waldo")}}
                className="rounded-md bg-gray-500 px-2.5 py-1 text-white hover:bg-gray-600"
            >
                Waldo
            </button>
            <button
                onClick={() => {validateCoordinate("Wizard")}}
                className="rounded-md bg-gray-500 px-2.5 py-1 text-white hover:bg-gray-600"
            >
                Wizard
            </button>
            <button
                onClick={() => {validateCoordinate("Odlaw")}}
                className="rounded-md bg-gray-500 px-2.5 py-1 text-white hover:bg-gray-600"
            >
                Odlaw
            </button>
        </div>
    )
}

export default CharacterDropdown
