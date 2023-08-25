import axios from "axios";

class AuthenticationService {
    static async registerCustomer(customer) {
        try {
            const response = await axios.post('http://localhost:8090/prismbank/account/create', customer); // Adjust the API endpoint
            return response.data;
          } catch (error) {
            console.error('Registration error', error);
            throw new Error('An error occurred during registration.');
        }
    }

    static async registerForInternetBanking(registrationData) {
        try {
            const response = await axios.post('http://localhost:8090/prismbank/ib/register', registrationData); // Adjust the API endpoint
            return response.data;
          } catch (error) {
            console.error('Registration error', error);
            throw new Error('An error occurred during registration.');
        }
    }

    static async login(customer) {
        try {
          const response = await axios.post('http://localhost:8090/prismbank/ib/login', customer);
          console.log('SAPI response:', response.data +"Hello"+response.data.success); 
          if (response.data.login) {
            return response.data.accountNumber; 
          } else {
            return null; 
          }
        } catch (error) {
          console.error('Login error', error);
          throw new Error('An error occurred during login.');
        }
      }

}
 export default AuthenticationService;