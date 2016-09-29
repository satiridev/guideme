class TodosStore {
    constructor() {
        
        this.todos = [];
        this.total = 0;

        this.bindListeners({
            handleUpdateTodos: updateTodosActions.UPDATE_TODOS
        });

        this.exportPublicMethods({
            initData: this.initData.bind(this)
        });
    }

    initData(todos) {
        this.handleUpdateTodos(todos);
    }

    handleUpdateTodos(todos) {
        this.todos = todos;
    }
}

GuideMe.Stores.todosStore = alt.createStore(TodosStore, "TodosStore");
