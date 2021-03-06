import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemInfo, fetchList } from '../api/index.js'

export default {
    async FETCH_NEWS({ commit }) {
        try {
            const { data } = await fetchNewsList();
            commit('SET_NEWS', data);
            return data;
        } catch (e) {
            console.log(e);
            return null;
        }
    },
    FETCH_JOBS({ commit }) {
        return fetchJobsList()
            .then(({ data }) => {
                commit('SET_JOBS', data);
            })
            .catch(error => console.log(error));
    },
    FETCH_ASK({ commit }) {
        return fetchAskList()
            .then(({ data }) => {
                commit('SET_ASK', data);
            })
            .catch(error => console.log(error));
    },
    FETCH_USER({ commit }, name) {
        return fetchUserInfo(name)
            .then(({ data }) => {
                commit('SET_USER', data);
            })
            .catch(error => console.log(error));
    },
    FETCH_ITEM({ commit }, id) {
        return fetchItemInfo(id)
            .then(({ data }) => {
                commit('SET_ITEM', data);
            })
            .catch(error => console.log(error));
    },
    FETCH_LIST({ commit }, pageName) {
        return fetchList(pageName)
            .then(({ data }) => {
                commit('SET_LIST', data);
            })
            .catch(error => console.log(error));
    }
}