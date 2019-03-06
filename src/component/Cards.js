import React, {Component} from 'react';
import Card from './CardChild';

class Cards extends Component{
    constructor(){
        super();

        this.state = {
            show_edit_form : false,
        }
    }

    onclickEdit = () => {
        this.setState({show_edit_form:true});
    }

    showAlert = () => {
        alert('hello');
    }

    showAlert1 = (sirName) => {
        alert(sirName);
    }

    render(){
        return <div>   
        {
            this.state.show_edit_form ? 'rakhi' : <Card 
            name ='rakhi'
            sirName='harish' 
            email ='racksjio@gmail.com' 
            showAlert1={(sirName)=>this.showAlert1(sirName)} 
            showAlert = {this.showAlert} 
            onclickEdit = {this.onclickEdit} 
            />
        }
    </div>
    }
}
export default Cards;
    
