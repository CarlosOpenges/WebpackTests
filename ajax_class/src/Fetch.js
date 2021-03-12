const w = window,
    clg = console.log;
    
export class Fetch {
    constructor(entries) {
        this.entries = entries;
    }

    static getFromEndPoint(url) {
        return fetch(url)
            .then(response => response.json())
            .then(entries => new this(entries));
    }
}