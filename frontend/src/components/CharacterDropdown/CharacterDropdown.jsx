function CharacterDropdown({ x, y }) {
    function checkCoordinate(x, y) {
        console.log({ x, y })
        if (x > 608 && x < 661 && y > 415 && y < 490) {
            console.log('Waldo')
            return 'Waldo'
        } else if (x > 275 && x < 306 && y > 415 && y < 501) {
            console.log('Odlaw')
            return 'Odlaw'
        } else if (x > 725 && x < 794 && y > 413 && y < 489) {
            console.log('Wizard')
            return 'Wizard'
        }
    }

    return (
        <div
            style={{ top: y, left: x }}
            className={`absolute flex flex-col gap-5 bg-black px-3 py-2.5`}
        >
            <button
                onClick={checkCoordinate}
                className="rounded-md bg-gray-500 px-2.5 py-1 text-white hover:bg-gray-600"
            >
                Waldo
            </button>
            <button
                onClick={checkCoordinate}
                className="rounded-md bg-gray-500 px-2.5 py-1 text-white hover:bg-gray-600"
            >
                Wizard
            </button>
            <button
                onClick={checkCoordinate}
                className="rounded-md bg-gray-500 px-2.5 py-1 text-white hover:bg-gray-600"
            >
                Odlaw
            </button>
        </div>
    )
}

export default CharacterDropdown
