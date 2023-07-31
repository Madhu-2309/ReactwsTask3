import React,{Component} from "react";
import'./home.css';
import f2 from './components/images/f2.jpg';
import f1 from './components/images/f1.jpg';
class Home extends Component{
    render(){
        return(
            <div class='d'>
                <center>
                <h1>Welcome to buddy club</h1>
                <h2>This is About my friends</h2>
                <img src={f2}></img>
                <img src={f1}></img>
                <h2 style={{color:"black",textalign:'center',padding:'10px'}}>Things are never quite as scary when you've got a best friend. </h2>
                </center>
                <ul>
                <li>Ilax</li>
                <li>Krish</li>
                <li>Harsha</li>
                </ul>
            </div>
        )
    }
}
export default Home;