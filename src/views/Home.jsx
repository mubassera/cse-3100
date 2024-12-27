import { useEffect, useState } from 'react';
import Abyssinian from '../assets/Abyssinian.jpeg';
import Bengal from '../assets/Bengal.jpeg';
import Birman from '../assets/Birman.jpeg';
import Persian from '../assets/Persian.jpeg';
import Siamese from '../assets/Siamese.jpeg';
import Sphynx from '../assets/Sphynxcat.jpg';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx', image: Sphynx },
    { name: 'Mittens', age: '2', breed: 'Persian', image: Persian },
    { name: 'Shadow', age: '1', breed: 'Siamese', image: Siamese },
];

export default function Home() {
  const [cats, setCats] = useState(featuredCats);

 

  return (
    <>
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </section>

      <section className="mt-5">
        <h2>Featured cats</h2>
        <div className="mt-2 row g-4" id="cats-container"></div>
        <div className="mt-2 row g-4" id="cats-container">
          {cats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div className="cat-card">
                <img src={cat.image} alt={cat.name} className="img-fluid " style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }} />
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
    </>
  );
}
