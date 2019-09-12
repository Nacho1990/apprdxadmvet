import { createStore} from 'redux';

//state inicial

const initialState = [];

// 1 store por aplicacion de redux
const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;