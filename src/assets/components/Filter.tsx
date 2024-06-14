import { ReactNode } from "react";
import "./Filter.css";

interface Prop {
    children: ReactNode;
    onClick: () => void;
    icon: string;
}

function Filter({ children, onClick, icon } : Prop) {
    return (
        <>
            <div className="filter">
                <button onClick={onClick}>
                    <i className={icon} aria-hidden="true"></i>
                </button>
                <p>{children}</p>
            </div>
        </>
    );
};

export default Filter;