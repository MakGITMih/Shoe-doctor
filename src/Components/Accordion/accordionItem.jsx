import React, { useRef } from "react";
import { ReactComponent as ArrowIcon } from './arrow-icon.svg'

import './accordion.scss'

function AccordionItem({ faqItem, onClick, isOpen, }) {

    const itemRef = useRef(true);


    return (
        <li className='accordion-item' >
            <button className='accordion-header' onClick={() => onClick()}>
                {faqItem.q}
                <ArrowIcon className={`accordion-arrow ${isOpen ? "active" : ""}`}></ArrowIcon>
            </button>
            <div className='accordion-collapse'
                style={
                    isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }
                }>
                <div className="accordion-body" ref={itemRef}>{faqItem.a}</div>
            </div>
        </li>
    );
}

export default AccordionItem;