import App from './components/App/App'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Leaderboard from './components/Leaderboard/Leaderboard'




const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/best',
        element: <Leaderboard />,
        errorElement: <ErrorPage />,
    },
]

export default routes
