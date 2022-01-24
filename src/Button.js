import React from "react";
import { ThemeContextConsumer } from "./themeContext";

function Button(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <button onClick={context.toggleTheme} className="button-theme">
                    Switch
                    <span role="img" aria-label="sun">
                        🌞
                    </span>
                    <span role="img" aria-label="moon">
                        🌚
                    </span>
                </button>
            )}
        </ThemeContextConsumer>
    );
}

export default Button;
