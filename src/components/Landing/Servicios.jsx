import React from 'react';
import './css/styles.css';

function Servicios() {
    return ( 
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Descubre Fillme</h2>
                    <h3 className="section-subheading text-muted">Tu plataforma de playlists de películas</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-users fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Conéctate con amigos</h4>
                        <p className="text-muted">Haz match con tus amigos y descubre sus playlists de películas favoritas. Comparte tus listas y encuentra nuevas películas para ver juntos.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-film fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Crea tus playlists</h4>
                        <p className="text-muted">Crea listas de reproducción de películas personalizadas según tus gustos y preferencias. Organiza tus películas favoritas y compártelas con tus amigos.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-share-alt fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Comparte con el mundo</h4>
                        <p className="text-muted">Comparte tus playlists de películas con otros usuarios de Fillme. Haz que tus listas sean públicas para que otros puedan descubrir y disfrutar de tus recomendaciones.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Servicios;
