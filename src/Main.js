import React, { Component } from 'react';
import {Switch,Route,withRouter} from 'react-router-dom';
import Add from './Add';
import List from './List';
import Modify from './Modify';
import data from './input.json';

class Main extends React.Component{    
    constructor(props){
      super(props);              
      this.state = {elementTypes : data["elementTypes"], modifyElement : ''}; 
      //this.selectionToModify = this.selectionToModify.bind(this);  
    }    

    /*selectionToModify(param1){        
      this.setState({modifyElement:param1});  
      this.props.history.push('/ModifyElement');
    }*/

    render(){
      return (
        <div>
          <Switch>
            <Route exact path='/AddElement' render={() => <Add />} />
            <Route exact path='/ListElement' render={() => <List />}/>            
            <Route exact path='/ModifyElement' render={() => <Add />}/>
          </Switch>        
        </div>
      );
    }
  }

  export default withRouter(Main);