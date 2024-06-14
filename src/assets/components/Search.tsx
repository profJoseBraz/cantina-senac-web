import Filter from "./Filter";
import "./Search.css";

function Search() {
    const handleTodos = () => {
        alert("todos");
    };

    return (
        <>
            <nav>
                <div className="search">
                    <input type="search" placeholder="Buscar no cardápio..."/>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <div className="filters">
                    <Filter onClick={handleTodos} icon="fa fa-star-o">Todos</Filter>
                    <Filter onClick={handleTodos} icon="fa fa-cutlery">Salgados</Filter>
                    <Filter onClick={handleTodos} icon="fa fa-birthday-cake">Sobremesas</Filter>
                    <Filter onClick={handleTodos} icon="fa fa-coffee">Bebidas</Filter>
                    <Filter onClick={handleTodos} icon="fa fa-cutlery">Marmitas</Filter>
                </div>
            </nav>
        </>
    );
};

export default Search;