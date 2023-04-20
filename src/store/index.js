import {createStore} from "vuex";

export default createStore({
    state() {
        return {
            tasks: [
                {
                    id: 0,
                    title: 'alex',
                    status: 'active',
                    data: '',
                    text: 'lololololo',
                }
            ],
        }
    },
    mutations: {
        addNewTask(state, payload) {
            state.tasks.push(payload);
        }
    },
    getters: {
        allTask(state) {
            return state.tasks;
        }
    }
});