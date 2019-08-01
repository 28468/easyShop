import { observable, action } from "mobx";
import { homePage,gethomedetail,gethomegoodslist } from '../../servicer';
export default class homePages {
@observable gethomeL = "";
@observable getimgList = "";
@observable gethomedetails = ""; //根据制造商ID获取制造商详情
@observable gethomegoodslists = ""; //根据制造商ID获取制造商详情
@action async gethomelist() {
const data = await homePage()
this.gethomeL = data.data
console.log(this.getimgList)
}
//根据制造商ID获取制造商详情
@action async gethomedetailss(id) {
const data = await gethomedetail(id)
this.gethomedetails = data.data
console.log(data.data)
}
@action async gethomegoodslistss(id) {
const data = await gethomegoodslist(id)
this.gethomegoodslists = data.data
console.log(data.data)
}
}