import { observable, action } from "mobx";
import { homePage} from '../../servicer';
export default class homePages {
    @observable gethomeL = "";
    @action async gethomelist() {
        const data = await homePage() 
        this.gethomeL = data.data
       console.log(data.data)
    }
    }