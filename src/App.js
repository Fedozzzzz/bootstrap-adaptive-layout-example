import React from 'react';
import logo from './logo.svg';

import slider_1 from "./img/slider_1.jpg"
import slider_2 from "./img/slider_2.jpg"
import slider_3 from "./img/slider_3.jpg"

import img from "./img/img.jpg"

import gif_1 from "./img/gif_1.gif"
import gif_2 from "./img/gif_2.gif"
import gif_3 from "./img/gif_3.gif"
import gif_4 from "./img/gif_4.gif"

import card_1 from './img/card_1.png'
import card_2 from './img/card_2.jpg'
import card_3 from './img/card_3.png'


import './App.css';

const Nav=()=>{
    return( <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div className="container-fluid">
            <a href="#" className="navbar-brand">
                <img src={logo}/>
            </a>
            <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a href="#" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Contacts</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Team</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>)
};

const Slider=()=>{
    return(<div className="carousel slide"
                data-ride="carousel" id="slides">
        <ul className="carousel-indicators">
            <li data-target="#slides" data-slide-to="0" className="active"/>
            <li data-target="#slides" data-slide-to="1"/>
            <li data-target="#slides" data-slide-to="2"/>
        </ul>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={slider_1}/>
                <div className="carousel-caption">
                    <h1 className="display-2">Program</h1>
                    <h3>Just begin!</h3>
                    <button type="button" className="btn btn-outline-light btn-lg">Try</button>
                    <button type="button" className="btn btn-warning btn-lg">Demo</button>
                </div>
            </div>
            <div className="carousel-item">
                <img src={slider_2}/>
                <div className="carousel-caption">
                    <h1 className="display-2">Travel</h1>
                    <h3>Try it!</h3>
                    <button type="button" className="btn btn-light btn-lg">Start</button>
                </div>
            </div>
            <div className="carousel-item">
                <img src={slider_3}/>
                <div className="carousel-caption">
                    <h1 className="display-2">Buy</h1>
                    <h3>A necessary equipment</h3>
                    <button type="button" className="btn btn-outline-warning btn-lg">Buy</button>
                </div>
            </div>
        </div>
    </div>)
};

const Text=()=> {
    return (<div className="container-fluid">
        <div className="row jumbotron">
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
                <p className="lead">He was an old man who fished alone in a skiff in the Gulf Stream and he had
                    gone eighty-four days now without taking a fish. In the first forty days a boy had been with
                    him. But after forty days without a fish the boy's parents had told him that the old man was
                    now definitely and finally salao, which is the worst form of unlucky, and the boy had gone
                    at their orders in another boat which caught three good fish the first week. It made the boy
                    sad to see the old man come in each day with his skiff empty and he always went down to help
                    him carry either the coiled lines or the gaff and harpoon and the sail that was furled
                    around the mast. The sail was patched with flour sacks and, furled, it looked like the flag
                    of permanent defeat.
                </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
                <a href="#">
                    <button className="btn btn-success btn-lg" type="button">Next</button>
                </a>
            </div>
        </div>
    </div>)
};

const CreatingSites=()=>{
    return (<div className="container-fluid">
            <div className="row text-center alert">
                <div className="col-12">
                    <h1 className="display-4">Creating of Sites</h1>
                </div>
                <hr/>
                <div className="col-12">
                    <p className="lead">
                        The old man was thin and gaunt with deep wrinkles in the back of his neck. The brown
                        blotches of
                        the benevolent skin cancer the sun brings from its reflection on the tropic sea were on his
                        cheeks. The blotches ran well down the sides of his face and his hands had the deep-creased
                        scars from handling heavy fish on the cords. But none of these scars were fresh. They were
                        as
                        old as erosions in a fishless desert.
                    </p>
                </div>
            </div>
        </div>)
};

const LanguageItems=()=> {
    return (<div className="container-fluid padding">
        <div className="row text-center padding">
            <div className="col-xs-12 col-sm-6 col-md-4">
                <i className="fas fa-code"/>
                <h3>HTML5</h3>
                <p>Everything about him was old except his eyes and they were the same color as the sea and were
                    cheerful and undefeated.</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
                <i className="fas fa-bold"/>
                <h3>Bootstrap</h3>
                <p>''Santiago,'' the boy said to him as they climbed the bank from where the skiff was hauled
                    up. ''I could go with you again. We've made some money.''

                </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
                <i className="fab fa-css3"/>
                <h3>CSS3</h3>
                <p>The old man had taught the boy to fish and the boy loved him.</p>
            </div>
        </div>
        <hr className="my-4"/>
    </div>);
};

const About=()=> {
    return (<div className="container-fluid padding">
        <div className="row padding">
            <div className="offset-lg-2 col-lg-4">
                <h2>About programming</h2>
                <p>''No,'' the old man said. ''You're with a lucky boat. Stay with them.''
                    ''But remember how you went eighty-seven days without fish and then we caught big ones every
                    day for three weeks.''
                    ''I remember,'' the old man said. ''I know you did not leave me because you doubted.''
                    ''It was papa made me leave. I am a boy and I must obey him.''
                    ''I know,'' the old man said. ''It is quite normal.''
                    <br/><br/>
                    ''He hasn't much faith.''
                    ''No,'' the old man said. ''But we have. Haven't we?''
                    ''Yes,'' the boy said. ''Can I offer you a beer on the Terrace and then we'll take the stuff
                    home.''
                    ''Why not?'' the old man said. ''Between fishermen.''
                    <br/><br/>
                    They sat on the Terrace and many of the fishermen made fun of the old man and he was not
                    angry. Others, of the older fishermen, looked at him and were sad. But they did not show it
                    and they spoke politely about the current and the depths they had drifted their lines at and
                    the steady good weather and of what they had seen. The successful fishermen of that day were
                    already in and had butchered their marlin out and carried them laid full length across two
                    planks, with two men staggering at the end of each plank, to the fish house where they
                    waited for the ice truck to carry them to the market in Havana. Those who had caught sharks
                    had taken them to the shark factory on the other side of the cove where they were hoisted on
                    a block and tackle, their livers removed, their fins cut off and their hides skinned out and
                    their flesh cut into strips for salting.
                </p>
                <br/>
                <a href="#" className=" btn btn-danger">Read more...</a>
            </div>
            <div className="col-lg-6">
                <br/>
                <img src={img} className="img-fluid"/>
            </div>
        </div>
    </div>)
};

const Figure=()=>{
    return(<figure>
        <div className="fixed-wrap">
            <div id="fixed">
            </div>
        </div>
    </figure>)
};

const Gifs=()=> {
    return (<div>
        <div className="text-center">
            <button type="button"
                    id="gifsBtn"
                    className="btn btn-success text-center"
                    data-toggle="collapse"
                    data-target="#gifs">
                Open block
            </button>
        </div>
        <div id="gifs" className="collapse">
            <div className="container-fluid padding">
                <div className="row text-center">
                    <div className="col-sm-6 col-md-3">
                        <img src={gif_1} className="gif"/>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <img src={gif_2} className="gif"/>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <img src={gif_3} className="gif"/>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <img src={gif_4} className="gif"/>
                    </div>
                </div>
            </div>
        </div>
    </div>)
};

const ProgrammingLanguages=()=> {
    return (<div>
        <div className="container-fluid padding">
            <div className="row alert text-center">
                <div className="col-12">
                    <h1 className="display-4">Programming Languages</h1>
                </div>
                <hr/>
            </div>
        </div>
        <div className="container padding">
            <div className="row padding">
                <div className="col-md-4">
                    <div className="card">
                        <img src={card_1} className="card-src-top"/>
                        <div className="card-body">
                            <h4 className="card-title">C++</h4>
                            <p className="card-text"> The language has expanded significantly over time, and modern
                                C++ has object-oriented, generic, and functional features in addition to facilities
                                for low-level memory manipulation. </p>
                            <a href="#" className="btn btn-warning">Watch more</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src={card_2} className="card-src-top"/>
                        <div className="card-body">
                            <h4 className="card-title">Java</h4>
                            <p className="card-text"> Java is a general-purpose programming language that is
                                class-based, object-oriented, and designed to have as few implementation
                                dependencies as
                                possible. </p>
                            <a href="#" className="btn btn-warning">Watch more</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src={card_3} className="card-src-top"/>
                        <div className="card-body">
                            <h4 className="card-title">JavaScript</h4>
                            <p className="card-text"> JavaScript has curly-bracket syntax, dynamic typing,
                                prototype-based object-orientation, and first-class functions. </p>
                            <a href="#" className="btn btn-warning">Watch more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
};

const Footer=()=>{
    return( <footer className="container-fluid">
        <div className="container-fluid">
            <div className="row padding text-center">
                <div className="col-12">
                    <h2>Contacts</h2>
                </div>
                <div className="col-12 social padding">
                    <a hfer="#"><i className="fab fa-twitter"></i></a>
                    <a hfer="#"><i className="fab fa-instagram"></i></a>
                    <a hfer="#"><i className="fab fa-youtube"></i></a>
                    <a hfer="#"><i className="fab fa-facebook"></i></a>
                    <a hfer="#"><i className="fab fa-google-plus-g"></i></a>
                </div>
            </div>
        </div>
    </footer>)
};

function App() {
    return (
        <div className="App">
            <Nav/>
            <Slider/>
            <Text/>
            <CreatingSites/>
            <LanguageItems/>
            <About/>
            <Figure/>
            <Gifs/>
            <ProgrammingLanguages/>
            <Footer/>
        </div>
    );
}


export default App;
