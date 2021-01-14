export default (state, action) => {
    switch(action.type){
        case 'ADD_APPLICATION':            
            return{
                ...state,
                applications:[action.payload,...state.applications]
            }
        case 'UPDATE_APPLICATION': 
            console.log(action.payload)
            return{
                ...state,
                applications: state.applications.filter(application => application.id !==action.payload.id )
            }
        default:
            return state;
    }
}