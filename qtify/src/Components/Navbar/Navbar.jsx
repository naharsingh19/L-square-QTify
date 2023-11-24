import React from 'react'
import "./Navbar.css"
import Searchbar from '../Searchbar/Searchbar'
<<<<<<< HEAD
import Feedback from '../FeedbackButton/FeedbackButton'
import Logo from '../../Images/Logo'

const Navbar = ({ onFeedbackButtonClick }) => {
=======
import Feedback from '../Feedback/Feedback'
import Logo from '../../images/Logo'

const Navbar = () => {
>>>>>>> 510cfeffd2fad82e0c5662f3eddc0ffa99b3ce66
    return (
        <div className='navbar'>
            <div className='logo'><Logo/></div>
            <div>
                <Searchbar />
            </div>
<<<<<<< HEAD
            <div className='feedback'><Feedback onFeedbackButtonClick={onFeedbackButtonClick}/></div>
=======
            <div className='feedback'><Feedback/></div>
>>>>>>> 510cfeffd2fad82e0c5662f3eddc0ffa99b3ce66
        </div>
    )
}

export default Navbar