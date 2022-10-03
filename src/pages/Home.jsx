import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ItemCard from '../components/ItemCard';
import { Spinner } from '../components/Spinner';

const Home = () => {
  const API = 'https://fakestoreapi.com/products';
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(API)
      .then(function (data) {
        setData(data.data);
      })
      .catch(function (err) {
        console.log(`"Mensaje de error: " ${err.message}`);
      })
      .finally(function () {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className='body'>
        {!loading ? (
          data.map(item => {
            return (
              <>
                <ItemCard
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  id={item.id}
                />
              </>
            );
          })
        ) : (
          <>
            <Spinner className='Loading' />
          </>
        )}
      </div>
    </>
  );
};
export default Home;
