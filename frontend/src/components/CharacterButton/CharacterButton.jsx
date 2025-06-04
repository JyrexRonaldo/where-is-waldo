function CharacterButton({ characterName, clickHandler }) {
    const name = characterName.slice(0, 1).toUpperCase() +
        characterName.slice(1).toLowerCase()

    return (
        <button
            onClick={() => {
                clickHandler(characterName)
            }}
            className="rounded-md bg-gray-500 px-2.5 py-1 text-white hover:bg-gray-600"
        >
            {name}
        </button>
    )
}

export default CharacterButton
