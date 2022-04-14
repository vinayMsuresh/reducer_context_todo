export function reducer(state, actions){
    switch(actions.type){
        case 'add': return{
            todos:[...state.todos, actions.payload]
        }
        case 'delete': return{
            todos:state.todos.filter((items, ind)=>ind!== actions.payload)
        }
        case 'update': state.todos[actions.payload.index] = actions.payload.item;
            return state
        default: return state
    }
}