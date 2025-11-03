import Header from '../Header'
import AllProductSection from '../AllProductSection'
import './index.css'
import PrimeDealSection from '../PrimeDealsSection'

const Products = () => (
  <>
    <Header />
    <div className="products-container">
      <PrimeDealSection />
      <AllProductSection />
    </div>
  </>
)

export default Products
