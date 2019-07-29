import { observable, action } from "mobx";
import { topicList} from '../../servicer';
export default class topicLists {
    @observable gettopicL = "";
    @action async gettopiclist() {
        const data = await topicList() 
        this.gettopicL = data.data
       console.log(data.data)
    }
    }