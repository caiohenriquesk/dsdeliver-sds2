import axios from "axios";

const API_URL = 'https://caio-aulas-sds2.herokuapp.com';

export function fetchOrders() {
  return axios(`${API_URL}/orders`)
}

export function confirmDelivery(orderId: number) {
  return axios(`${API_URL}/orders/${orderId}/delivered`)
}