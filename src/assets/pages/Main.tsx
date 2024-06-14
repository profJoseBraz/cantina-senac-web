import Header from "../components/Header";
import Search from "../components/Search";
import "./Main.css";

function Main() {
    const handleCart = () => {
        alert("ok");
    };

    return (
        <>
            <div className="container">
                <Header onClick={handleCart}></Header>
                <Search></Search>
            </div>
        </>
    );
};

export default Main;