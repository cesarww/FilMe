import React from "react";  
import './css/styles.css';
import wing from './assets/img/team/1.jpg'
import yamil from './assets/img/team/2.jpg'
import delfin from './assets/img/team/3.jpg'
import cesar from './assets/img/team/4.jpg'




function Team() {
    return ( 
        <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Nuestro Equipo</h2>
                    <h3 class="section-subheading text-muted">Nuestro equipo de trabajo </h3>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src={yamil} alt="..." />
                            <h4>Yamil Hallal</h4>
                            <p class="text-muted">Lead Designer</p>
                           
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src={cesar} alt="..." />
                            <h4>Cesar Padilla</h4>
                            <p class="text-muted">Lead Marketer</p>
                            
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src={wing} alt="..." />
                            <h4>Wing Manuel</h4>
                            <p class="text-muted">Lead Developer</p>
                           
                        </div>
                    </div>
                    <div class="col-lg-4">
                        
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src={delfin} alt="..." />
                            <h4>Daniel Delfin</h4>
                            <p class="text-muted">Lead Developer</p>
                           
                        </div>
                    </div>
                    <div class="col-lg-4">
                        
                    </div>
                </div>
                
            </div>
        </section>
     );
}

export default Team;