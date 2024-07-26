import { ReactNode } from "react";
import "./Product.css";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

interface Prop {
    name: ReactNode;
    img: string;
    cost: number;
    desc: ReactNode;
    restrictType: ReactNode;
    onClick: () => void;
};

function Product({ name, img, cost, desc, restrictType, onClick, } : Prop) {
    return (
        <>
            <div className="product">
                <div className="restriction">
                    {restrictType}
                </div>

                <div className="image">
                    <img src={img}/>
                </div>

                <div className="text-box">
                    <h2 className="name">{name}</h2>
                    <h3 className="cost">R$ {cost.toFixed(2).replace("\.",",")}</h3>
                    <p className="desc">{desc}</p>
                </div>

                <div className="add-cart-btn">
                    <button onClick={onClick} className="add-to-cart">Adicionar ao carrinho</button>
                </div>
            </div>
        </>
    );
};

export default Product;