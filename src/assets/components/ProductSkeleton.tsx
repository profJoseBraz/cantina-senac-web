import './ProductSkeleton.css'


interface PropSKL {
    boxProds?: number
}

const ProductSkeleton = ({ boxProds }: PropSKL) => {
  return (
    Array(boxProds).fill(0).map((_, i) => (
        <div key={i} className="products-skl">

            <div className="restrict-skl">
            </div>

            <div className="image-skl">
            </div>

            <div className="name-box-skl">
            </div>


            <div className="price-box-skl">
            </div>

            <div className="desc-box-skl-1">
            </div>
            <div className="desc-box-skl-2">
            </div>
            

            <div className="add-cart-btn-skl">
            </div>

            
        </div> 
    ))
        
  )
}

export default ProductSkeleton