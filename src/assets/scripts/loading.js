/**
 * 加载中提示
 *
 * @author  hucw
 * @created 2017-06-16
 */
import {Indicator} from "mint-ui";

export default {
  show: function () {
    Indicator.open();
  },

  hide: function () {
    Indicator.close();
  }
}
