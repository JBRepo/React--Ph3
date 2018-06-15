import data from './input.json';




const initialState = {
    eventTypes : data["elementTypes"],
    modifyElement : ''
}


function eventReducer (state = initialState, action){
    console.log('reducer: action->',action)
    console.log('reducer: action.type->',action.type)
    console.log('reducer: action.event->',action.event)
    switch (action.type) {      
        case 'MODIFY_EVENT': 
            return {...state,modifyElement:action.event}    
        case 'MODIFY_EVENT_SUCCESS':
            return {...state,modifyElement:action.event}       
        default:
            return state;
    }
}

export default eventReducer;