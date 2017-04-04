// mobx
import { observable } from 'mobx';
import axios from 'axios';

export default class AppState {

  @observable schools = [];
  @observable is_loading = true;

  constructor() {
    let that = this;
    axios
      .get('http://schoolback1.shopshop.space/school/list')
      .then(function (res) {
        //console.log('--- something ----');
        //console.log(res.data);
        that.schools = res.data;
        that.is_loading = false;
      })
      .catch(function (error) {
        console.log(error);
      });

  }

}
