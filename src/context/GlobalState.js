import React, {createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    applications: [
        {"id":0,"company":"jaffa","position":"pulihora raja","jobLink":"xnxx.com","appliedThrough":"jumpstart","jobDescription":"",applicationStatus:"Applied"},
        {"id":1,"company":"sadcj","position":"kn kj","jobLink":"jj j ","appliedThrough":"kj kj ","jobDescription":"qk j\n",applicationStatus:"In-progress"}
    ]
}

// Creating context
export const GlobalContext = createContext(initialState);

// Component Provider
export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function addApplication(application) {
        dispatch({
            type:'ADD_APPLICATION',
            payload:application
        });
    }

    function updateApplication(id,status){
        dispatch({
            type:'UPDATE_APPLICATION',
            payload:{
                id,
                status
            }
        })
    }
    return (
    <GlobalContext.Provider value ={{
        applications:state.applications,
        addApplication,
        updateApplication
    }}>
        {children}
    </GlobalContext.Provider>
    );
}