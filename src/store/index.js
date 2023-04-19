import {createStore} from "vuex";

export default createStore({
    state() {
        return {
            tasks: [
                {
                    title: '',
                    status: '',
                    data: '',
                    text: '',
                }
            ],
        }
    },
    mutations: {
        addNewTask(state, payload) {
            state.tasks.push(payload);
        }
    }
});