import React from "react";

function Content({children}) {
    console.log(children);
    return (
        <>
            {children}
            <h1>Content</h1>
        </>

    )
}

export default Content;