interface Prop {
    nome: any;
    imagem: any;
    preco: any;
    quantidade: any;
}

function OrderReviewProduct({ nome, imagem, preco, quantidade } : Prop) {
    return (
        <>
            <div className="order">
                <div className="order-img">
                <img src={imagem} alt="" />
                </div>

                <div className="order-infos">
                <span className='order-nameProduct' >{nome}</span>
                <span className='order-qttProduct' >Unidades: {quantidade}</span>
                </div>
                
                <div className="order-price">
                <span>R$</span> <span>{preco}</span>
                </div>
            </div>
        </>
    );
};

export default OrderReviewProduct;