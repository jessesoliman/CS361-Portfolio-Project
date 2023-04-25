import React, { useState } from 'react';

function RegistrationInfo() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    return (
        <div>
            <form>
                <fieldset>
                    <legend>Enter your email: </legend>
                        <label>
                            <input type="text" value={email}
                            onChange={e => setEmail(e.target.value)} />
                        </label>
                </fieldset>
                <fieldset>
                    <legend>Enter your name: </legend>
                        <label>
                            <input type="text" value={name}
                            onChange={e => setName(e.target.value)} />                         
                        </label>
                </fieldset>
                <button onClick={e => {
                    setEmail(e.target.value);
                    setName(e.target.value);
                    alert(`Congratulations ${name} at ${email}, you have registered!`);
                    e.preventDefault();
                }}>Submit</button>
            </form>
        </div>
    );
}

export default RegistrationInfo;