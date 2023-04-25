import { useNavigate } from 'react-router-dom';

function Announcements() {
    return (
        <div>
            <h2>Announcements and Upcoming Features</h2>
            <ol>
                <li>Welcome! We're proud to announce the initalization of our inventory manager!</li>
                <li>
                    We've got exciting updates on the way.
                    <ul>
                        <li>Implementing user registration. 
                            Users will be able to login to their accounts from the registration page.</li>
                        <li>Users will be able to bid on items that they like from other users.</li>
                        <li>Users will have a way to earn money!</li>
                    </ul>
                </li>
            </ol>
        </div>
    );
}

export default Announcements;