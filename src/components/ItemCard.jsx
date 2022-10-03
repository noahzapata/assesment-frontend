import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCard = props => {
  const { id, image, title } = props;

  // let delayResend = () => {
  //   return Math.floor(Math.random() * 6 * 60);
  // };

  const [done, setDone] = useState(false);
  const [delay, setDelay] = useState(Math.floor(Math.random() * 6 * 60));
  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);
  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      setDone(true);
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className='ItemCard__container'>
      <div className='ItemCard__img__container'>
        <img className='ItemCard__img' src={`${image}`} alt='img' />
      </div>
      <p className='ItemCard__title'>{title}</p>
      <div className='ItemCard__info'>
        <div className='ItemCard__info__countdown'>
          <span>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </span>
        </div>
        <Link to={`/detail/${id}`}>
          {!done ? (
            <button className='ItemCard__button'>Go to details</button>
          ) : (
            <>
              <button className='ItemCard__button--disabled' disabled>
                Go to details
              </button>
            </>
          )}
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;
