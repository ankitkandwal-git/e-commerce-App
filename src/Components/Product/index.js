import Header from '../Header'
import AllProductSection from '../AllProductSection'
import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="products-container">
      {/* <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
        className="products-img"
      /> */}
      <AllProductSection />
    </div>
  </>
)

export default Products
