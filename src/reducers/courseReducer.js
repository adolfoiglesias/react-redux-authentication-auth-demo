import { COURSE_TYPES } from "../utils/constants";

export const course =  function(state = {}, action){

    switch(action.type){
        case COURSE_TYPES.LOADING:
            return {
                loading:true
            };
        case COURSE_TYPES.FIND_ALL:
            return {
                courses: action.payload.courses,
                loading:false,
            };

        case COURSE_TYPES.FIND_ALL_ERROR:
            return {
                courses: [],
                error:true,
                msg:action.payload.msg,
                loading: false
            };
        default:
            return state

    }

}
