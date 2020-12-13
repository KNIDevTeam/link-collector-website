import BasicService from "./BasicService";
import axios from "axios";

class DataService extends BasicService {
    async getData(token) {
        return await axios.get(this.API_URL + 'link', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => {
            console.log(response);
        }).catch(err => console.log(err))
    }
}

export default DataService