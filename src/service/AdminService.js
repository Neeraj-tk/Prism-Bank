// getCustomers
// approveRequest
// deleteRequest
// viewCustomer

import axios from 'axios' ;

const CUSTOMERS_REST_API_URL='http://localhost:8090/prismbank/account/';

class AdminService{

   static getCustomers(){
        return axios.get(CUSTOMERS_REST_API_URL+"customers");
    }

    static viewCustomer(accountNumber){
        return axios.get(CUSTOMERS_REST_API_URL+"customer/"+accountNumber);
    }

    static approveRequest(customer,accountNumber){
        return axios.put(CUSTOMERS_REST_API_URL+"approve/"+accountNumber,customer);
    }

    static deleteRequest(accountNumber){
        return axios.delete(CUSTOMERS_REST_API_URL+"customer/"+accountNumber);
    }

}

export default  AdminService;