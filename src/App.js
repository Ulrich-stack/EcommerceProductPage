import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Cards from "./components/Cards";
import ProductInfo from "./components/ProductInfo";

const App = () => {
    const [linkClicked, setLinkClicked] = useState("");
    const [productIndex, setProductIndex] = useState(0);
    const [products, setProducts] = useState(0);
    const [textBadge, setTextBadge] = useState(0);
    const [showModalCart, setShowModalCart] = useState(false);

    function handleNavClick(e, item){
        e.preventDefault();
        setLinkClicked(item);
    }

    function handleCart(e){
        e.preventDefault();
        let NbItems = products;
        let NbInCarts = textBadge;

        setTextBadge(NbItems + NbInCarts);
        setProducts(0);
    }

    function handleClickCart(e){
        e.preventDefault();
        const boolModalCart = showModalCart;
        setShowModalCart(!boolModalCart);
        console.log("Cart clicked");
    }

    function deleteProduct(e){
        setTextBadge(0);
    }

    function handleProductClick(e,index){
        setProductIndex(index);
        console.log(index);
    }

    function handleRemove(){
        let NbItems = products;
        if (NbItems > 0) {
            NbItems--;
            setProducts(NbItems);
        }
    }

    function handleAdd(){
        let NbItems = products;
        NbItems++;
        setProducts(NbItems);
    }

  return (
    <div className = "w-full h-full px-40">
        <Navigation onClick={handleNavClick} activeLink={linkClicked} badge={textBadge} onClickCart={handleClickCart} show={showModalCart} deleteProduct={deleteProduct}/>
        <div className="mt-16 px-16 h-full flex">
            <Cards productIndex={productIndex} onClick={handleProductClick}/>
            <ProductInfo numberOfItems={products} remove={handleRemove} add={handleAdd} addToCart={handleCart}/>
        </div>
    </div>

  );
};

export default App;
