import { useEffect, useState } from 'react';
import './css files/ContactUs.css'


import React from 'react'

export const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted!');
  };
   
  return (
    <section className="contactus">
      <h2>Contact Us</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur perferendis corrupti distinctio totam, quasi modi accusamus itaque natus cupiditate in tempora! Nulla officiis ipsam odio, natus non nisi dolores?</p>

      <div className='Form'>
      <form onSubmit={handleSubmit}>
        <div className='FormElement'>
        <label htmlFor="name">Name</label>
        <input 
            type="text"
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            required
            />
        </div>
        
        <div className='FormElement'>
        <label htmlFor="email">Email</label>
        <input 
            type="email"
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            
            required  
            />
        </div>
        
        <div className='FormElement'>
        <label htmlFor="phone">Phone Number</label>
        <input 
            type="tel"
            name='phone'
            value={formData.phone}
            onChange={handleInputChange}
            
            required
        />
        </div>

        <button type="submit" className="Button">
          Submit
        </button>

      </form>
      </div>


    </section>
  )
}
