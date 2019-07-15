import React, { Component } from 'react';
import './footer.css';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <footer >
                    <p>
                       Copyright © 2018 konnectcode. All rights reserved.
                    </p>
                </footer>

            </>
        );
    }
}

export default Footer;