'use client';
import React from "react";
import "./loader.css";

const Loader = () => {
    return (
        <div className="dot-wave">
            <div className="dot-wave__dot"></div>
            <div className="dot-wave__dot"></div>
            <div className="dot-wave__dot"></div>
            <div className="dot-wave__dot"></div>
        </div>
    );
};

export default Loader;
