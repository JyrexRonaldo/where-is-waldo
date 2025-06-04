import CharacterButton from '../CharacterButton/CharacterButton'

function CharacterDropdown({ x, y, characterArray, setCharacterArray }) {
    // console.log(characterArray)

    const validateCoordinate = async (characterName) => {
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
            if (data === characterName) {
                console.log('yay')
                console.log({ characterName })
                const newArray = characterArray.filter(
                    (name) => !(name === characterName)
                )
                console.log(newArray)
                setCharacterArray([...newArray])
            } else {
                console.log('Nay!')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const dropdownButtons = characterArray.map((name) => (
        <CharacterButton
            key={name}
            characterName={name}
            clickHandler={validateCoordinate}
        />
    ))

    return (
        <div
            style={{ top: y, left: x }}
            className="absolute flex flex-col gap-5 rounded-md bg-black px-3 py-5"
        >
            {dropdownButtons}
        </div>
    )
}

export default CharacterDropdown
