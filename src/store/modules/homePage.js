import { observable, action } from "mobx";
import { homePage } from '../../servicer';
export default class homePages {
    @observable gethomeL = "";
    @observable getimgList = "";
    @action async gethomelist() {
        const data = await homePage()
        this.gethomeL = data.data
    //   data.data.categoryList.foreach((item)=>{
    //       this.getimgList = item
    //       console.log(item)
    //   })
      console.log(this.getimgList)
    }
}