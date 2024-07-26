import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './ProductSkeleton.css'

const ProductSkeleton = ({ boxProds }: any) => {
  return (
    Array(boxProds).fill(0).map((_, i) => (

        <SkeletonTheme baseColor='#f9f9f9' highlightColor='#eee' duration={1} borderRadius={15} >
            <div key={i} className="products-skl">

                <div className="restrict-skl">
                    <div className="rest-skl-string">
                        <span>
                            <Skeleton width={"100%"} height={40} borderRadius={"7px 7px 0px 0px"} baseColor='rgb(255, 230, 230)' highlightColor='rgb(255, 243, 241)' />
                        </span>
                    </div>
                </div>

                <div className="image-skl">
                    <Skeleton width={"90%"} height={210}/>
                </div>
                <br />

                <div className="text-box-skl">
                    <span>
                        <Skeleton width={250} height={30}/>
                        <Skeleton width={100} height={20} />
                        <Skeleton width={"90%"} height={10} />
                    </span>
                </div>

                <div className="add-cart-btn-skl">
                    <Skeleton width={"100%"} height={40} borderRadius={"0px 0px 7px 7px"} baseColor='rgb(44, 44, 175)' highlightColor='rgb(44, 44, 230)' />
                </div>
            </div>
        </SkeletonTheme>
        
    ))
        
  )
}

export default ProductSkeleton