import { ReactNode, useState } from "react";
import "./Product.css";

interface Prop {
    name: ReactNode;
    img: string;
    cost: number;
    quant?: number
    desc: ReactNode;
    restrictType: ReactNode;
    onClick: () => void;
    statusClassName?: string
};

function Product({ name, img, cost, desc, restrictType, onClick, quant, statusClassName } : Prop) {

    return (
        <>
            {/* <div className={statusClassName}> */}
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
                    
                    <span style={{display: "none"}} >{quant}</span>
                </div>

                <div className="add-cart-btn">
                    <button onClick={onClick} className="add-to-cart">Adicionar ao carrinho</button>
                </div>
            </div>
        </>
    );
};

export default Product;