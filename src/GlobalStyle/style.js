import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    outline: 0;
}

:root{
     --grey: #646464;
     --bluecyan: #27374C;
     --whitesmoke: #F2F2F2;
     --blue: #2B5FDA;
     --lightblue: #2B5FDA;
     --purple: #6047AF;
     --lightpurple: #B198FF;
}

body{
    background: var(--whitesmoke);
    color: var(--grey);

    @keyframes fade{
        from {
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
}

h1,h2,h3,h4,span, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: var(--bluecyan);
}

div, p{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}

button{
    cursor: pointer;
    border: none;
    font-style: normal;
}
a{
    text-decoration: none;
}
`;

export default GlobalStyle;
