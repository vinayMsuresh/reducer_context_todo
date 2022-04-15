export function reducer(state, actions){
    switch(actions.type){
        case 'add': return{
            todos:[...state.todos, actions.payload]
        }
        case 'delete': return{
            todos:state.todos.filter((items)=>items.id !== actions.payload)
        }
        case 'update': return {
            todos: state.todos.map((items) => {
                if(items.id === actions.payload.id){
                    return actions.payload;
                }
                return items;
            })
        }
        default: return state
    }
}