import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ProductCart from '../ProductCart'
import './index.css'


const apiStatusConstants  = {
    initial : 'INITIAL',
    inProgress : 'IN_PROGRESS',
    success : 'SUCCESS',
    failure : 'FAILURE'
}
class PrimeDealSection extends Component{

    state = {
        apiStatus : apiStatusConstants.initial,
        isLoading : true,
        productsList : []
    }

    componentDidMount(){
        this.getPrimeDeals()
    }
    
    getPrimeDeals = async () =>{
        this.setState({ apiStatus: apiStatusConstants.inProgress })
        const apiurl = 'https://apis.ccbp.in/prime-deals'
        const jwtToken  = Cookies.get('jwt_token')
        const options  = {
            method : "GET",
            headers : {
                Authorization : `Bearer ${jwtToken}`
            }
        }
        const response = await fetch(apiurl,options)
        if(response.ok === true){
            const data = await response.json()
            const updatedData = data.prime_deals.map(productItem => ({
                id: productItem.id,
                title: productItem.title,
                brand: productItem.brand,   
                price: productItem.price,
                imageUrl: productItem.image_url,
                rating: productItem.rating,    
            }))
            this.setState({
                productsList : updatedData,
                apiStatus : apiStatusConstants.success
            })
        } else {
            this.setState({
                apiStatus : apiStatusConstants.failure
            })
        }
    }

    renderLoader = () => {
        return (
            <div className="products-loader-container">
                <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
            </div>
        )
    }

    renderPrimeDealsSection = () =>{
        const { productsList} = this.state
        return(
            <div>
                <h1 className="products-heading">Prime Deals</h1>
                <ul className="products-list">
                    { productsList.map(product =>(
                        <ProductCart key={product.id} productDetails={product} />
                    ))}
                </ul>
            </div>
        )
    }
    renderPrimeDealsFailureView = () => (
            <img
            src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
            alt="Register Prime"
            className="register-prime-image"
            />
    )

    render(){
        const {apiStatus} = this.state 
        switch(apiStatus){
            case apiStatusConstants.inProgress : 
                return this.renderLoader()
            case apiStatusConstants.success :
                return this.renderPrimeDealsSection()
            case apiStatusConstants.failure :
                return this.renderPrimeDealsFailureView()
            default : 
                return null
        }
    }
}

export default PrimeDealSection