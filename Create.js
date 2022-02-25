import React from 'react';
import './create.css';

const Create = () => {
    return(
        <div className='create'>
            <form className='create_form'>
                <input
                   type="name"
                   placeholder='Name'
                   required
                   />
                <input
                   type="email"
                   placeholder='Email'
                   required
                   />
                <input
                   type= "number"
                   placeholder='Order ID'
                   required
                   />
                <div>
                    <h1>Order Type</h1>
                    <input type="checkbox" name="Electronics" />
                    <label for =" Electronics">Electronics</label>
                    <input type="checkbox" name="Clothing" />
                    <label for =" Clothing">Clothing</label>
                    <input type="checkbox" name="Accessories" />
                    <label for ="Accessories">Accessories</label>
                </div>
                <div>
                    <h1>Order Status</h1>
                    <select>
                        <option value="In Process">In Process</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
            </form>
        </div>
    );
};
export default Create;
