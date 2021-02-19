export default (state, action) => {
    switch(action.type){
        case 'ADD_APPLICATION':
            action.payload.id = state.applications.length
            return{
                ...state,
                applications:[action.payload,...state.applications]
            }
        case 'UPDATE_APPLICATION': 
            return{
                ...state,
                
                //applications: state.applications.filter(application => application.id !==action.payload.id )
                applications: state.applications.map((application) => {
                    if(application.id === action.payload.id){
                        application.applicationStatus = action.payload.status
                    }
                    return application
                })
            }
        case 'VALIDATE_USER':
            //action.payload = state.userData
            return{
                ...state,
                userData:[action.payload,...state.userData]
            }
        default:
            return state;
    }
}