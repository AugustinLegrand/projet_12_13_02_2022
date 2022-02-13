/**
 * ? ROUTER WITH REACT
 */

 import { Routes, Route } from 'react-router-dom'
import ErrorPage from '../pages/Error/Error'
import HomePage from '../pages/Home/Home'

export default function Router() {

    return (
        <Routes>
            <Route path='/' component={HomePage} />
            <Route path='/404' component={ErrorPage} />
        </Routes>
    )

}