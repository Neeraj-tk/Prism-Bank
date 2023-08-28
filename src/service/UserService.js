import axios from "axios";

class UserService {

    static async getUserData(accountNumber) {
        try {
            const response = await axios.get('http://localhost:8090/prismbank/account/customer/'+accountNumber); // Adjust the API endpoint
            return response.data;
        } catch (error) {
            console.error('Error occured in Service method', error);
            throw new Error('An error occurred during user data fetching.');
        }
    }

    static async getlast5Transaction(accountNumber) {
        try {
            const response = await axios.get('http://localhost:8090/prismbank/transaction/all'); // Adjust the API endpoint
            return response.data;
        } catch (error) {
            console.error('Error occured in Service method', error);
            throw new Error('An error occurred during transaction list fetching.');
        }

    }

    static async getBalance(accountNumber) {
        try {
            const response = await axios.get('http://localhost:8090/prismbank/account/balance/'+accountNumber); // Adjust the API endpoint
            return response.data;
        } catch (error) {
            console.error('Error occured in Service method', error);
            throw new Error('An error occurred while gettting balance');
        }

    }
    static async makePayment(data){
        try{
            const response=await axios.post('http://localhost:8090/prismbank/transaction/create',data);
            return response;
        }catch(error){
            console.error('Error occured in Service method', error);
            throw new Error('An error occurred while making payment');
        }
    }
    static async getBeneficiary(accountNumber){
        try{
            const response=await axios.get('http://localhost:8090/prismbank/account/getbeneficiary/'+accountNumber);
            return response;
        }catch(error){
            console.error('Error occured in Service method', error);
            throw new Error('An error occurred while fetching beneficiary list');
        }
    }
}

export default UserService;