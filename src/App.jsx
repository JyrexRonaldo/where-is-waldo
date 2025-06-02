import waldoImg from '/waldo.png'
import odlawImg from '/odlaw.gif'
import wizardImg from '/wizard.gif'
import beach from '/beach.jpg'
import './App.css'

function App() {

  const areaClickHandler = (e)  => {
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
                <img src={beach} useMap="#beach-map" alt="beach-picture" />
                <map name="beach-map">
                    <area onClick={areaClickHandler}
                        alt="odlaw"
                        coords="338,755,306,660"
                        shape="rect"
                        href='#odlaw'
                    ></area>
                    <area onClick={areaClickHandler}
                        alt="wizard"
                        coords="791,646,852,744"
                        shape="rect"
                        href='#wizard'
                    ></area>
                    <area onClick={areaClickHandler}
                        alt="waldo"
                        coords="1817,693,1891,799"
                        shape="rect"
                        href='#waldo'
                    ></area>
                </map>
            </div>
        </div>
    )
}

export default App
