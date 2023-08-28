// getCustomers
// approveRequest
// deleteRequest
// viewCustomer

import axios from 'axios' ;

const CUSTOMERS_REST_API_URL='http://localhost:8090/prismbank/';

class AdminService{

   static getCustomers(){
        return axios.get(CUSTOMERS_REST_API_URL+"account/customers");
    }

    static viewCustomer(accountNumber){
        return axios.get(CUSTOMERS_REST_API_URL+"account/customer/"+accountNumber);
    }

    static approveRequest(customer,accountNumber){
        return axios.put(CUSTOMERS_REST_API_URL+"account/approve/"+accountNumber,customer);
    }

    static deleteRequest(accountNumber){
        return axios.delete(CUSTOMERS_REST_API_URL+"account/customer/"+accountNumber);
    }

    static depositCash(toAccount, amount) {
        const data = {
          accountNumber: toAccount,
          amount: amount
        };
        return axios.post(CUSTOMERS_REST_API_URL+"transaction/cashdeposit", data);
      }
    
      static withdrawCash(fromAccount, amount) {
        const data = {
          accountNumber: fromAccount,
          amount: amount
        };
        return axios.post(CUSTOMERS_REST_API_URL+"transaction/cashwithdraw", data);
      }
    

}

export default  AdminService;