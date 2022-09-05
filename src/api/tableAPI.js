import sendAxios from './request'

export const getDeptComplete = (url, method, data) => sendAxios(url, method, data)
export const getSourceComplete = (url, method, data) => sendAxios(url, method, data)
export const getWork = (url, method, data) => sendAxios(url, method, data)
