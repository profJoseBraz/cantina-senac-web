import { CSSProperties } from "react";
import Filter from "./Filter";
import "./Search.css";
import MyButton from "./MyButton";

interface Props {
    onClickTodos: () => void
    onClickSalgados: () => void
    onClickSobremesas: () => void
    onClickBebidas: () => void
    onClickMarmitas: () => void

    styleFilters?: CSSProperties

    activeFilterBeb?: string
    activeFilterMarm?: string
    activeFilterSalg?: string
    activeFilterTodos?: string
    activeFilterSobr?: string
}

function Search({onClickSalgados, onClickTodos, onClickSobremesas, onClickBebidas, onClickMarmitas, styleFilters, activeFilterBeb, activeFilterMarm, activeFilterSalg, activeFilterTodos, activeFilterSobr}: Props) {
    
    return (
        <>
            <nav style={styleFilters}>
                <div className="search">
                    <input type="search" placeholder="Buscar no cardápio..."/>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <div className="filters">
                    <Filter onClick={onClickTodos} activeFilter={activeFilterTodos} icon="fa fa-star-o">Todos</Filter>
                    <Filter onClick={onClickSalgados} activeFilter={activeFilterSalg} icon="fa fa-cutlery">Salgados</Filter>
                    <Filter onClick={onClickSobremesas} activeFilter={activeFilterSobr} icon="fa fa-birthday-cake">Sobremesas</Filter>
                    <Filter onClick={onClickBebidas} activeFilter={activeFilterBeb} icon="fa fa-coffee">Bebidas</Filter>
                    <Filter onClick={onClickMarmitas} activeFilter={activeFilterMarm} icon="fa fa-cutlery">Marmitas</Filter>
                </div>
            </nav>
        </>
    );
};

export default Search;