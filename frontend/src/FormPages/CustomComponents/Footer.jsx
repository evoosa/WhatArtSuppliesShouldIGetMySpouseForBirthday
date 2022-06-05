import React, {Component} from "react";
import MusicPlayer from "./MusicPlayer"

export class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="footer" className="footer">
                    <a className="footer-icon" href="https://www.instagram.com/evoosa.art/">
                        <img src="https://art-supplies-images.pasten.life/images/instagram.webp"
                             width="30"
                             alt="instagram-logo"/>
                    </a>
                    <a className="footer-icon" href="https://visit.evoosa.art/">
                        <img src="https://art-supplies-images.pasten.life/images/o_transparent.webp"
                             width="30"
                             alt="evoosa-o-logo"/>
                    </a>
                    <br/>
                    <MusicPlayer/>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;
