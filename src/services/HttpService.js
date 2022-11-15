class HttpService {
    static HOST = "http://127.0.0.1:8000/api"

    static headers = {
        "Accept": "application/json"
    };

    static getHeaders() {
        return this.headers;
    }

    static setHeaders(headers) {
        this.headers = headers;
    }

    static appendHeaders(header) {
        this.setHeaders({ ...this.getHeaders(), ...header });
    }

    static get(url, options = {}) {
        return fetch(this.HOST + url, {
            method: "GET",
            headers: this.getHeaders(),
            ...options
        })
    }

    static post(url, body, options = {}) {
        return fetch(this.HOST + url, {
            method: "POST",
            headers: this.getHeaders(),
            body: body,
            ...options
        })
    }
}

export default HttpService;