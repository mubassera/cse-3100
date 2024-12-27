import { useEffect, useState } from 'react';
import './css files/AboutUs.css';
import React from 'react';
import mahdi from '../assets/mahdi.jpeg';
import arnob from '../assets/arnob.jpeg';
import fiha from '../assets/fiha.jpeg';

export const AboutUs = () => {

    const Members = [
        { name: 'Mahdi', designation: 'Director', image: mahdi },
        { name: 'Arnob', designation: 'Director', image: arnob },
        { name: 'Fiha', designation: 'Director', image: fiha },
    ];

    return (
        <section className="aboutus">
            <h3>Our Mission</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur perferendis corrupti distinctio totam, quasi modi accusamus itaque natus cupiditate in tempora! Nulla officiis ipsam odio, natus non nisi dolores?</p>
            <br />

            <h3>Our History</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur perferendis corrupti distinctio totam, quasi modi accusamus itaque natus cupiditate in tempora! Nulla officiis ipsam odio, natus non nisi dolores?</p>
            <br />

            <h3>Our Team</h3>
            <div className="mt-2 row g-4" id="member-container">
                {Members.map((member, i) => (
                    <div key={i} className="col-md-4">
                        <div className="member-card">
                            <img src={member.image} alt={member.name} className="img-fluid" 
                                style={{ 
                                    borderRadius: '8px', 
                                    height: '200px', 
                                    objectFit: 'cover' 
                                }} 
                            />
                            <div className="member-info"> 
                                <h3 className="h5 mb-1">{member.name}</h3>
                                <p className="mb-0">{member.designation}</p> 
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
