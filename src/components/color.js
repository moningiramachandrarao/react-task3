import {Component} from "react";
import {Sq} from "./Sq";
import "./style.css";
export class Color extends Component{
    constructor(props){
        super(props);
        this.state={toggle:false};
    }
    handleClick=()=>{
        this.setState({
           toggle:!this.state.toggle
        });
    }

    render(){
        return(
            <div id="main1">
            <div id="main">
        {
            this.state.toggle ?
            <div id="container">
                 <Sq color="#fe0000" />
            <Sq color="#00ff00" />
            <Sq color="#0000fe" />
            <Sq color="#ffff00" />
            <Sq color="#fe00fe" />
            <Sq color="#00ffff" />
            <Sq color="#fea500" />
            <Sq color="#81007f" />
            <Sq color="#ffc0cb" />
            <Sq color="#008000" />
            <Sq color="#fe6347" />
            <Sq color="#00cfd1" />
            <Sq color="#8b4413" />
            <Sq color="#ff8b00" />
            <Sq color="#4683b4" />
            <Sq color="#fed700" />
            </div>
            :<div></div>
        }
        <button onClick={this.handleClick}>Pick a color</button>
        </div>
    </div>
        );
    }
}