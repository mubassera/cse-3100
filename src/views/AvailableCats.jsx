import { useEffect, useState } from 'react';
import './css files/AvailableCats.css'
import Abyssinian from '../assets/Abyssinian.jpeg';
import Bengal from '../assets/Bengal.jpeg';
import Birman from '../assets/Birman.jpeg';
import Persian from '../assets/Persian.jpeg';
import Siamese from '../assets/Siamese.jpeg';
import Sphynx from '../assets/Sphynx.jpeg';

const availableCats = [
  //added breed and cat images
 { name: 'Whiskers', age: '2', breed: 'Sphynx', image: Sphynx },
  { name: 'Mittens', age: '2', breed: 'Persian', image: Persian },
  { name: 'Shadow', age: '1', breed: 'Siamese', image: Siamese },
  { name: 'Pumpkin', age: '3', breed: 'Bengal', image: Bengal },
  { name: 'Luna', age: '4', breed: 'Birman', image: Birman },
  { name: 'Simba', age: '2', breed: 'Abyssinian', image: Abyssinian },
];

export default function AvailableCats() {
  const [cats, setCats] = useState(availableCats);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {cats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img src={cat.image} alt={cat.name} className="img-fluid mb-2" style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }} />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Breed: {cat.breed}</p>
                <p className="mb-0">Age: {cat.age}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
