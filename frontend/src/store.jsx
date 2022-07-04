import {
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	userReducer,
	passwordReducer,
	forgetPasswordReducer,
	adminReducer,
	deluser,
	addAdminReducer,
} from './reducers/userReducer';
import {
	templateReducer,
	onetemplateReducer,
	delTemplate,
} from './reducers/templateReducer';
import {
	createRecommended,
	getData,
	getAllData,
} from './reducers/recommendedReducer';
import {
	templateDataCollect,
	getAllResume,
	getResume,
	delresume,
	updateReducer,
} from './reducers/resumeReducer';

const reducer = combineReducers({
	user: userReducer,
	password: passwordReducer,
	admin: adminReducer,
	forgetpassword: forgetPasswordReducer,
	template: templateReducer,
	onetemplate: onetemplateReducer,
	dataCollect: templateDataCollect,
	allResume: getAllResume,
	oneResume: getResume,
	resume: delresume,
	updateResume: updateReducer,
	tempDel: delTemplate,
	deluser: deluser,
	createRecommended: createRecommended,
	newadmin: addAdminReducer,
	Recommended: getData,
	allRecommended: getAllData,
});

let initialState = {};

const middlewere = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middlewere))
);

export default store;
