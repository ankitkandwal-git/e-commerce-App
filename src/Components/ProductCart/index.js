import './index.css'

const ProductCart = props => {
  const {productDetails} = props

  if (!productDetails) {
    return null
  }

  const {title, brand, price, rating, imageUrl} = productDetails
    return(
        <li className="product-item">
      <img src={imageUrl} alt="product" className="thumbnail" />
      <h1 className="title">{title}</h1>
      <p className="brand">by {brand}</p>
      <div className="product-details">
        <p className="price">Rs {price}/-</p>
        <div className="rating-container">
          <p className="rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star"
          />
        </div>
      </div>
    </li>
    )
}

export default ProductCart  