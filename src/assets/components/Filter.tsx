import { ReactNode } from "react";
import "./Filter.css";

interface Prop {
    children: ReactNode;
    onClick: () => void;
    icon: string;
    activeFilter?: string
}

function Filter({ children, onClick, icon, activeFilter } : Prop) {
    return (
        <>
            <div className="filter">
                <button className={activeFilter} onClick={onClick}>
                    <i className={icon} aria-hidden="true"></i>
                </button>
                <p>{children}</p>
            </div>
        </>
    );
};

export default Filter;