import React from 'react'

const Footer = ({len}) =>
{
    return(
        <footer>
            <h3>Tolat no of {len===1?"item":"items"} is : {len}</h3>
        </footer>
    );
}

export default Footer;
