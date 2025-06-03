import waldoImg from '/waldo.png'
import odlawImg from '/odlaw.gif'
import wizardImg from '/wizard.gif'
import beach from '/beach3.webp'
import './App.css'

function App() {
    const areaClickHandler = (e) => {
        console.log('Yeah')
        console.log(e.target.coords)
    }

    return (
        <div className="flex min-h-screen bg-gray-700">
            <div className="flex w-40 flex-col justify-center gap-8 bg-gray-800 px-4 py-4">
                <p className="text-white">Timer: </p>
                <img src={waldoImg} alt="" />
                <img src={wizardImg} alt="" />
                <img src={odlawImg} alt="" />
            </div>
            <div className="flex max-w-10/12 items-center">
                <map name="beach-map">
                    <area
                        onClick={areaClickHandler}
                        alt="odlaw"
                        coords="273,417,312,504"
                        shape="rect"
                        href="#odlaw"
                    ></area>
                    <area
                        onClick={areaClickHandler}
                        alt="waldo"
                        coords="613,416,656,495"
                        shape="rect"
                        href="#waldo"
                    ></area>
                    <area
                        onClick={areaClickHandler}
                        alt="wizard"
                        coords="727,416,772,491"
                        shape="rect"
                        href="#wizard"
                    ></area>
                </map>

                <img src={beach} useMap="#beach-map" alt="beach-picture"  />
            </div>
        </div>
    )
}

export default App
