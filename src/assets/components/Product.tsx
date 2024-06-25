import { ReactNode } from "react";
import "./Product.css";

interface Prop {
    name: ReactNode;
    img: string;
    cost: ReactNode;
    desc: ReactNode;
    quant: number;
    restrictType: ReactNode;
    onClick: () => void;
};

function Product({ name, img, cost, desc, quant, restrictType, onClick, } : Prop) {
    return (
        <>
            <div className="product">
                <div className="restriction">
                    {restrictType}
                </div>
                <img src={img}/>
                <div className="text-box">
                    <h1 className="name">{name}</h1>
                    <h2 className="cost">R$ {cost}</h2>
                    <p className="desc">{desc}</p>
                </div>
                <button onClick={onClick} className="add-to-cart">Adicionar ao carrinho</button>
                <p className="quant">Quantidade disponível: {quant}</p>
            </div>
        </>
    );
};

export default Product;