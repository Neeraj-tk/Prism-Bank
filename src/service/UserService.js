import axios from "axios";

class UserService {

    static async getUserData(accountNumber) {
        try {
            const response = await axios.post('http://localhost:8090/prismbank/account/create', accountNumber); // Adjust the API endpoint
            return response.data;
        } catch (error) {
            console.error('Error occured in Service method', error);
            throw new Error('An error occurred during user data fetching.');
        }
    }

    static async getlast5Transaction(accountNumber) {
        try {
            const response = await axios.post('http://localhost:8090/prismbank/account/create', accountNumber); // Adjust the API endpoint
            return response.data;
        } catch (error) {
            console.error('Error occured in Service method', error);
            throw new Error('An error occurred during transaction list fetching.');
        }

    }

    static async getBalance(accountNumber) {
        try {
            const response = await axios.post('http://localhost:8090/prismbank/account/create', accountNumber); // Adjust the API endpoint
            return response.data;
        } catch (error) {
            console.error('Error occured in Service method', error);
            throw new Error('An error occurred during transaction list fetching.');
        }

    }
}

export default UserService;