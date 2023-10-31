import React from "react";
import LoginForm from "./LoginForm";

function Panel({ theme, handleChangeTheme }) {
    return (
        <div className={`border p-3 ${theme}`}>
            <LoginForm theme={theme} handleChangeTheme={handleChangeTheme} />
        </div>
    )
}

export default Panel;