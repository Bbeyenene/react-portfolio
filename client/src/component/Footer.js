import React from 'react'
import './footer.css';
import moment from 'moment'
import Moment from 'react-moment';

function Footer() {
    const currentDate = moment().format('YYYY')
    return (
        <footer>
            <div className="footer-content">
                <p>&copy;<span>  <Moment format='YYYY'>{currentDate}</Moment> </span> Berhane Beyene</p>
            </div>
        </footer>
    )
}

export default Footer
