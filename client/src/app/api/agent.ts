import Axios, { AxiosResponse } from 'axios'
import { InfoItemData } from '../models/InfoItemData'

const responseBody = <T> (response: AxiosResponse<T>) => response.data

// delay function
const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout( ()=> resolve("Time delayed") , delay);
    })
}

// add delay here
Axios.interceptors.response.use( async response => {
    try {
        await sleep(1000);
        // console.log("response successfully delayed");
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const request = {
    get:<T> (url: string) => Axios.get<T>(url).then(responseBody),
    post:<T> (url: string, body: {}) => Axios.post<T>(url, body).then(responseBody),
    put:<T> (url: string, body: {}) => Axios.put<T>(url, body).then(responseBody),
    del:<T> (url: string) => Axios.delete<T>(url).then(responseBody),
}

const InfoItems =  {
    list: () => request.get<InfoItemData[]>("courseinfo"),
    detail: (id: string) => request.get<InfoItemData>(`courseinfo/${id}`),
    create: (infoitem: InfoItemData) => request.post<void>("courseinfo", infoitem),
    update: (infoitem: InfoItemData) => request.put<void>(`courseinfo/${infoitem.id}`, infoitem),
    delete: (id: string) => request.del<void>(`courseinfo/${id}`),
}

const agent = {
    InfoItems
}

export default agent;