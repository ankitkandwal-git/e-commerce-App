
import './index.css'

const ProductHeader = (props) => {
    const {sortByOptions, activeOptionId, updateActiveTabId} = props 
    const onChangeSortbyOption = event => {
        updateActiveTabId(event.target.value )
    }
    return(
    <div className="product-header">
        <h1 className="heading">All Products</h1>
        <div className="sort-by-container">
            <h1 className="sort">Sort By</h1> 
            <select className="select-option" onChange={onChangeSortbyOption} value={activeOptionId} >
                {sortByOptions.map(option =>(
                    <option key={option.optionId} value={option.optionId} className="option">
                        {option.displayText}
                    </option>
                ))}
            </select>
        </div>
    </div>
    )
}

export default ProductHeader