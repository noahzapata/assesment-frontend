import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from '../components/Spinner';

const ProductDetail = () => {
  const API = 'https://fakestoreapi.com/products';
  let { id } = useParams('1');

  const [data, setData] = useState({});

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(API)
      .then(function (data) {
        setData(data.data[id - 1]);
      })
      .catch(function (err) {
        console.log(`"Mensaje de error: " ${err.message}`);
      })
      .finally(function () {
        setLoading(false);
      });
  }, [API]);

  return (
    <>
      <div className='body'>
        {!loading ? (
          <div className='ProductDetail__container'>
            <h1 className='ProductDetail__title'>{data.title}</h1>
            <div className='ProductDetail__img__container'>
              <img
                className='ProductDetail__img'
                src={data.image}
                alt={data.title}
              />
            </div>
            <div className='ProductDetail__info'>
              <p className='ProductDetail__description'>
                Category: {data.category}
              </p>
              <p className='ProductDetail__description'>{data.description}</p>
              <h2 className='ProductDetail__price'>${data.price}</h2>
            </div>
          </div>
        ) : (
          <>
            <Spinner />
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
