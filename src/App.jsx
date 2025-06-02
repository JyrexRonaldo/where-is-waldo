import waldoImg from '/waldo.png'
import odlawImg from '/odlaw.gif'
import wizardImg from '/wizard.gif'
import beach from '/beach.jpg'
import './App.css'

function App() {
    return (
        <div className="flex min-h-screen bg-gray-700">
            <div className="flex w-40 flex-col justify-center gap-8 bg-gray-800 px-4 py-4">
                <p className="text-white">Timer: </p>
                <img src={waldoImg} alt="" />
                <img src={wizardImg} alt="" />
                <img src={odlawImg} alt="" />
            </div>
            <div className="flex max-w-10/12 items-center">
                <img src={beach} alt="beach picture" />
            </div>
        </div>
    )
}

export default App
