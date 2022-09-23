import React from 'react';

const Container = (props) => {
    const { fluid,minH100 } = props;
    return (
        <div className={`w-full relative overflow-x-hidden mb-[65px] md:mb-[125px] ${props.className} ${fluid && 'fluid'}`} style={props.style}>
             {props.background && <img
                src={props.background}
                alt=""
                className="absolute inset-0 z-[0] w-full h-full"
            />}
            {props.children}
        </div>
    );
}

export default Container;
