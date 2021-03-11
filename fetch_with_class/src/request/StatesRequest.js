const UNSENT            = 0;
const OPENED            = 1;
const HEADERS_RECEIVED  = 2;
const LOADING           = 3;
const DONE              = 4;

export default class StatesRequest{
    static get UNSENT() {
        return UNSENT;
    }

    static get OPENED() {
        return OPENED;
    }

    static get HEADERS_RECEIVED() {
        return HEADERS_RECEIVED;
    }

    static get LOADING() {
        return LOADING;
    }

    static get DONE() {
        return DONE;
    }
}