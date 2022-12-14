import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid fondoAzul">
            <div className="container py-1">
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <h5>Creado por Mariano Nakamura</h5>
                    </div>
                    <div className="col-md-6 text-end">
                        <p>
                            <a href={"https://www.facebook.com"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"Media/SM-RRSS-04.png"} alt="Facebook" width={24} /></a>
                            <a href={"https://www.instagram.com"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"Media/SM-RRSS-03.png"} alt="Instagram" width={24} /></a>
                            <a href={"https://www.youtube.com"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"Media/SM-RRSS-02.png"} alt="YouTube" width={24} /></a>
                            <a href={"https://twitter.com"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"Media/SM-RRSS-01.png"} alt="Twitter" width={24} /></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;