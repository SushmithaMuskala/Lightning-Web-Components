import { LightningElement, track } from "lwc";

export default class ifElseDemo extends LightningElement {
  @track isTom = true;
  @track labelName = "show Jerry";

  Click(){
    if(this.isTom == true){
      this.isTom = false;
      this.labelName = "show Tom";
    } 
    else{
      this.isTom = true;
      this.labelName = "show Jerry";
    }
  }
}