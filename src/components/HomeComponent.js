import React, { Component } from 'react';
import { Container, Col, Row, Modal, ModalHeader } from 'reactstrap';
import Pizza from '../assests/Images/Img2.jpg';

import LoveIcon from '../assests/Icons/Icon feather-heart.png';
import ClockIcon from '../assests/Icons/Icon feather-clock.png';
import LoveIconRed from '../assests/Icons/Icon feather-heart-color.png';
import { Link } from 'react-router-dom';

class HomeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: props.dish,
            modal: false,
            fav: false
            
        };
        this.toggleImage = this.toggleImage.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    toggleImage = () => {
        this.setState({ fav: !this.state.fav})
    }
    toggle = () => {
        this.setState({modal: !this.state.modal})
    }
   
    render() {
        

                const { error, isLoaded, items } = this.state;
                return (
                    <React.Fragment>
                        <div className="HomeMainDiv">
                        <Container>
                            <div className="HomeTitle">
                            
                                <p>CATEGORY</p><br/><br/>
                                <h2><strong>Pizzas {'&'} Noodles</strong></h2>
                            </div>
    
                            <div className="HomeMenuDiv">
                                
                                    <Row>
                                        {items.map(item => (
                                            
                                            <React.Fragment>
                                                <Col sm="3">
                                                    <div className="HomeCardHero" style={{backgroundImage: "url('"+ item.image +"')"}}>
                                                        <React.Fragment>
                                                            <div className="HomeCategory"><p>In {item.category}</p></div>

                                                            <div class="overlay">
                                                            <div class="text">
                                                                <div>
                                                                    <Link to={`/menu/${item.id}`} style={{textDecoration:'none'}} id="Linkk">
                                                                        <h5>View more</h5>
                                                                    </Link>
                                                                    
                                                                        
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                            <div className="HomeCardHeroText">
                                                                <Row>
                                                                    <Col xs="8">
                                                                        <h6>{item.name}</h6>
                                                                        
                                                                    </Col>
        
                                                                    <Col xs>
                                                                    <div className="DetailRightFavDiv">
                                                                    <img src={this.state.fav? LoveIconRed: LoveIcon} className="float-right" onClick={this.toggleImage} />
                                </div>                                                                    </Col>
                                                                </Row>
                                                                <div>
                                                                    <img src={ClockIcon} style={{float:'left'}}/>
                                                                    <p style={{float:'left', marginLeft: '10px', marginTop:'3px'}}>24 min</p>
                                                                </div>
                                                                <p style={{marginTop:'34px'}}>{item.description}</p>
                                                            </div>
                                                        </React.Fragment>
                                                        
                                                    </div>
    
                                                    
                                                </Col>

                                                
                                            </React.Fragment>

                                            
                                                
                                            
                                            
                                        
                                        ))}
                                    </Row>
    
                                    
                                
                            </div>
                            
                        </Container>
                        
                    </div> 
                        
                    </React.Fragment>
                );
            }
}

export default HomeComponent;