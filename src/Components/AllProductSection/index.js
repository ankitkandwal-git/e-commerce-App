import {Component} from 'react' 
import ProductCart from '../ProductCart'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import './index.css'

class AllProductSection extends Component{
    state = {
        productsList : [],
        isLoading : true
    }
    componentDidMount(){
        this.getProducts()
    }
    getProducts = async () =>{
        const apiurl = 'https://apis.ccbp.in/products'
        const jwtToken = Cookies.get('jwt_token')
        const options = {
            method : "GET",
            headers : {
                Authorization : `Bearer ${jwtToken}`
            }
        }
        const response = await fetch(apiurl,options)
        if(response.ok === true){
            const data = await response.json() 
            const updatedData = data.products.map(products => ({
                title: products.title,
                brand: products.brand,
                price: products.price,
                id: products.id,
                imageUrl: products.image_url,
                rating: products.rating,
            }))
            this.setState({
                productsList: updatedData,
                isLoading : false
            })
        }
    }
    renderProductSection = () =>{
        const {productsList} = this.state 
        return(
            <div className="all-products-section">
            <h1 className="products-heading">All Products</h1>
            <ul className="products-list">
                {productsList.map(product => (
                    <ProductCart key={product.id} productDetails={product} />
                ))}
            </ul>
            </div>
        )
    }
    renderLoaderView = () =>{
        <div testid="loader" className="loader-container">
              <Loader type="Oval" color="#ffffff" height="50" />
            </div>
    }
    render(){
        const {isLoading} = this.state
        return isLoading ? this.renderLoaderView() : this.renderProductSection()
    }
}

export default AllProductSection