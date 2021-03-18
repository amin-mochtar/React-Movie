import React from 'react'

export default function Footer() {
    return (
        <div>
            <hr className="mt-5" style={{ borderTop: "1px solid #5a606b" }}></hr>
            <div className="row mt-3 mb-5">
                <div className="col-md-8 col-sm-6" style={{ color: "#5a606b" }}>
                    <h3>ABOUT WEB</h3>
                    <p>
                    Web yang dibuat dengan React.js, dan menggunakan data dari Request API di TMDB. The Movie Database (TMDb) adalah database film yang menyediakan data-data lengkap seperti data film yang akan datang, data serial tv (TvSeries), dll. Dan tentunya semua itu bisa kita gunakan secara gratis.
                    </p>
                    <p>
                    The Movie Database (TMDb) adalah database film yang menyediakan data-data lengkap seperti data film yang akan datang, data serial tv (TvSeries), dll. Dan tentunya semua itu bisa kita gunakan secara gratis.
                    </p>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                        <a href="/" style={{ color: "#f4c10f" }}>
                            <i className="fab fa-facebook"></i>
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a href="/" style={{ color: "#f4c10f" }}>
                            <i className="fab fa-youtube"></i>
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a href="/" style={{ color: "#f4c10f" }}>
                            <i className="fab fa-twitter"></i>
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a href="/" style={{ color: "#f4c10f" }}>
                            <i className="fab fa-instagram"></i>
                        </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-6" style={{ color: "#5a606b" }}>
                    <h3>KEEP CONTACT</h3>
                    <ul className="list-unstyled">
                        <li>
                            <p>
                                <strong>
                                <i className="fas fa-map-marker-alt"></i> Address:
                                </strong>{" "}
                                city, state, INDONESIA
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>
                                <i className="fas fa-map-marker-alt"></i> Phone:
                                </strong>{" "}
                                0800-xxxx-xxxx
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>
                                <i className="fas fa-envelope"></i> Email:
                                </strong>{" "}
                                akunbykamu@gmail.com
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
