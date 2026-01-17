import './card.css';

const Card = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="image-section">
          <img src="/peace-lily.jpg" alt="Peace Lily" />
        </div>
        <div className="details-section">
          <h2>CLASSIC PEACE LILY</h2>
          <p className="subtitle">CLASSIC PEACE LILLY</p>
          <p className="subtitle">POPULAR HPUSE PLANT </p>
          <h3 className='price'>$18</h3>
          <p className="description">
            Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbon and butterfly pick.
          </p>
          <div className="button-group">
            <button className="btn">ADD TO CART</button>
            <button className="btn">WISHLIST</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;