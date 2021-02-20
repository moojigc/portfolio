import axios, { AxiosRequestConfig } from 'axios';
type LS = {
    path: string;
    referredBy?: string,
    time: number,
};

export default class mAPI {

    private static _setLs() {

        const params = new URLSearchParams(window.location.search);
        const data = {
            path: window.location.pathname,
            referredBy: params.get('from'),
            time: Date.now()
        };

        localStorage.setItem('visit', JSON.stringify(data));

        return data;
    }

    private static _getLs(): LS | null {

        return JSON.parse(localStorage.getItem('visit')) as LS;
    }

    private static _url = /moojigbc.com/.test(window.location.host) 
        ? 'https://api.moojig.dev/v1' : 'http://localhost:4500/v1';

    private static async _request<T = any>(target: string, {
        method,
        token,
        payload
    }: {
        method: AxiosRequestConfig['method'],
        token?: string;
        payload?: any
    }) {

        if (!/^\//.test(target)) {

            throw new TypeError('Malformed path: ' + target + ', missing /');
        }

        try {

            const headers = token ? {
                Authorization: `Bearer ${token}`
            } : {};

            const { data } = await axios({
                url: this._url + target,
                method,
                headers,
                data: payload
            });

            return data as T;
        }
        catch (e) {

            if (e.response?.data.message) {

                return {
                    status: e.response.status,
                    message: e.response.data.message
                };
            }
        }
    }

    public static async postVisitor(data?: {
        path?: string;
        referredBy?: string;
    }) {

        const lastVisit = this._getLs();
        const moreThanDay = (t: number) => (Date.now() - (t ?? Date.now())) >= 1000 * 60 * 60 * 24;

        if (!lastVisit 
            || lastVisit.path !== window.location.pathname
            || moreThanDay(lastVisit.time)) {

            const newVisit = this._setLs();
    
            return await this._request('/visit', {
                method: 'POST',
                payload: {
                    path: data?.path || newVisit.path,
                    referredBy: data.referredBy || newVisit.referredBy
                }
            });
        }
    }
}