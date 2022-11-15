class StorageService {
    static get(key) {
        if (localStorage.getItem(key) === null) {
            return null;
        }

        return JSON.parse(localStorage.getItem(key))
    }

    static set(key, value) {
        return localStorage.setItem(key, JSON.stringify(value))
    }
}

export default StorageService;