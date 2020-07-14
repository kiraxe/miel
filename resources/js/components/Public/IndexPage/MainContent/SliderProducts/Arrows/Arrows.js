import React from "react";

export const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} aria-label="Next" type="button"  aria-disabled="false" onClick={onClick}></div>
    );
}

export const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} aria-label="Next" type="button" aria-disabled="false" onClick={onClick}></div>
    );
}
