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
        },
        changeStatus(state, payload) {
            state.tasks[payload.id].status = payload.status;
            console.log(state.tasks);
        },
    },
    getters: {
        allTask(state) {
            return state.tasks;
        },
        activeTask(state) {
            if (state.tasks) {

            }
        }
    },
});