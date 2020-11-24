//import react, { component } from 'react';
import './contact.css'

function contact() {

    return (
        <div id="mydiv">
            <div className="personal">
                <div id="mydivheader">
                    <p> Contact Information </p>
                </div>
                <h3>Berhane Beyene</h3>
                <h3>Chicago, IL</h3>
                <p>Phone: <span>(708) 427-2105</span></p>
                <p> Email: <a href="mailto:monoxica2004@yahoo.com">monoxica2004@yahoo.com</a></p>
            </div>
            <form>
                <div className="form-group">
                    <label for="nameInput">Name</label>
                    <input type="name" class="form-control" id="nameInput" aria-describedby="name" placeholder="Enter name" />
                </div>
                <div className="form-group">
                    <label for="emailInput">Email</label>
                    <input type="email" class="form-control" id="emailInput" placeholder="Enter Email" />
                </div>
                <div className="form-group">
                    <label for="messageInput">Message</label>
                    <textarea className="form-control" id="messageInput" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-dark">Submit</button>
            </form>
        </div>
    )
}

export default contact;