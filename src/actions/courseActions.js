
import { COURSE_TYPES } from "../utils";
import { courseServices } from "../services";


export const courseActions = {
    findAll
}

function findAll(){
    return dispatch => {

        const actionLoading = {
            type:COURSE_TYPES.LOADING,
        }
        dispatch(actionLoading);

        courseServices.findAll()
            .then (response => {
                console.log(response);
        
                const actionFindAll = {
                    type:COURSE_TYPES.FIND_ALL,
                    payload:{
                        courses:response.data
                    }
                }
                dispatch(actionFindAll);
        
            })
            .catch(error => {
                var actionFindAllError = {
                    type:COURSE_TYPES.FIND_ALL_ERROR,
                    payload:{
                        msg: 'Ups, Error getting courses'
                    }
                }
                dispatch(actionFindAllError);
            })
            .then(function () {
                console.log("axios executed ... finally");
            }); 
    }
}