import axios, { AxiosRequestConfig } from 'axios';

export default class mAPI {

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

    public static async postVisitor(data: {
        path?: string;
        referredBy?: string;
    }) {

        return await this._request('/visit', {
            method: 'POST',
            payload: data
        });
    }
}