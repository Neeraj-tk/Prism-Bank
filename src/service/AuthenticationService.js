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

}
 export default AuthenticationService;