import {Component} from "react";
import "./style.css";
export class Sq extends Component{
    constructor(props){
       super(props);
    }
    handleChange=()=>{
        let root=document.getElementById("root");
        root.style.backgroundColor=this.props.color;

    }

    render(){
        const style = {
            backgroundColor: this.props.color
        
          };
        return(
            
            <div id="sq" style={style}  onClick={this.handleChange}></div>

        )
    }
}