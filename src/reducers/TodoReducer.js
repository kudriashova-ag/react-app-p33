// отримує поточний стан, дію (об'єкт - type та payload)
// повертає новий стан
import uniqid from "uniqid";

const todoReducer = (state, action) => { 
    switch (action.type) { 
        case 'add':
            return [...state, { id: uniqid(), title: action.payload, done: false }];
        case 'remove':
            return state.filter((task) => task.id !== action.payload);
        case 'changeDone':
            return state.map((task) => {
                if (task.id === action.payload) {
                    return { ...task, done: !task.done };
                }
                return task;
            });
        case 'changeTitle':
            return state.map((task) => {
                if (task.id === action.payload.id) {
                    return { ...task, title: action.payload.title };
                }
                return task;
            });
        default:
            return state;
    }
}

export default todoReducer;