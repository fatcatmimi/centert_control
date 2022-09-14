import sendAxios from './request'


export const getLine = (url, method, data) => sendAxios(url, method, data)

export const getSourceList = (url, method, data) => sendAxios(url, method, data)

export const getDeptList = (url, method, data) => sendAxios(url, method, data)

export const getBallData = (url, method, data) => sendAxios(url, method, data)

export const getSaleCenterApi = (url, method, data) => sendAxios(url, method, data)