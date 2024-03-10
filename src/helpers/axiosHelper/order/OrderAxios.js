import { apiProcesser, rootAPI } from "../axiosHelper";

const orderAPI = rootAPI + '/orders';

export const fetchAllOrders = (_id) => {
    return apiProcesser({
        method: 'get',
        url: _id ? orderAPI + "/" + _id : orderAPI,
        isPrivate: true
    })
}

export const updateDeliveryStatus = (orderID, data) => {
    return apiProcesser({
        method: 'put',
        url: orderAPI + "/" + orderID,
        data,
        isPrivate: true
    })
}