import React, { Component } from 'react';
import Parser from 'html-react-parser';
import {Switch,Route,withRouter} from 'react-router-dom';
import axios from 'axios';
import { connect } from "react-redux";

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {elementList:[]};  
       // this.loadElements = this.loadElements.bind(this);
       this.fetchSelectedElement = this.fetchSelectedElement.bind(this);
        this.loadElements();      
    }

    fetchSelectedElement(){
        console.log("inside fetch slected element");
        let id = document.querySelector('input[name="selectedElement"]:checked').value;
        console.log(id);
        console.log(this.state.elementList);
        let elementSelected = null;
        for(let i in this.state.elementList){
            console.log(this.state.elementList[i].eventId);
            if(this.state.elementList[i].eventId == id){
                console.log('matched');
                elementSelected = this.state.elementList[i];
                break;
            }
        }
        console.log(elementSelected);        
        this.props.selectedModifyElement(elementSelected);
        this.props.history.push('/ModifyElement');
    }

    loadElements(){
        axios({
            method: 'get',
            url: 'http://10.21.137.94:8090/WebserviceRest/Rest/Event/List'
            /*data: {
                firstName: 'Fred',
                lastName: 'Flintstone'
               }*/
        }).then(function (response) {
                this.setState({elementList:response.data});
                console.log('response',response);
            }.bind(this))
            .catch(function (error) {
                console.log('error:',error);
            });

    }

    render(){        
        console.log("List compoent Loaded");
        console.log(this.state.elementList);        
        var elementList = this.state.elementList;
        var row = "";
        var elementTypesList = this.props.eventTypes;
        console.log("element type list",elementTypesList);
        for(var i in elementList){
            row = row +
                    "<tr>"+
                    "<td><input type='radio' name='selectedElement' value='"+elementList[i].eventId+"'/></td>"+
                    "<td>"+elementTypesList[elementList[i].eventType]+"</td>"+
                    "<td>"+elementList[i].dipendant+"</td>"+
                    "<td>"+elementList[i].observazione+"</td>"+
                    "<td>"+elementList[i].descrizioneEvento+"</td>"+
                    "<td>"+elementList[i].soln+"</td>"+
                    "</tr>";
        }
        var modifyButton = "";
        if(row != ""){
            modifyButton = "<input type='button' name='Modify' value='Modify' onClick={this.fetchSelectedElement().bind(this)}/>";
        }
        return(            
            <div>
                <table>
                    <thead>
                        <tr> 
                            <th>Select</th>
                            <th>EventType</th>
                            <th>Dipendant</th>
                            <th>Observazione</th>
                            <th>DescrizioneEvento</th>
                            <th>Soln</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Parser(row)}                       
                    </tbody>
                </table>               
                <input type='button' name='Modify' value='Modify' onClick={this.fetchSelectedElement.bind(this)}/>   
            </div>
        );
    }
}
// <input type="button" name="Modify" value="Modify" onClick={this.fetchSelectedElement.bind(this)} />    


//this.setState({modifyElement:param1});  
//this.props.history.push('/ModifyElement');

const mapDispatchToProps = dispatch => {
    return {
        selectedModifyElement: param1 => dispatch(modifyEvent(param1))        
    };
  };

export function modifyEvent (events) {
    return {
        type: 'MODIFY_EVENT',
        event: events
    }
}


const mapStateToProps = state => {
    return { eventTypes: state.eventTypes };
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(List));