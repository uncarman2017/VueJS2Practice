/**
 * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个mutation都有一个字符串的事件类型 (type)和一个回调函数(handler)。
 * 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state作为第一个参数
 * mutation 必须是同步函数
 */
const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
export default {
  //点击进入下一题
  [ADD_ITEMNUM](state, num) {
    state.itemNum += num;
  },
  //记录答案
  [REMBER_ANSWER](state, id) {
    state.answerid.push(id);
  },
  /*
    记录做题时间
     */
  [REMBER_TIME](state) {
    state.timer = setInterval(() => {
      state.allTime++;
    }, 1000)
  },
  /*
    初始化信息，
     */
  [INITIALIZE_DATA](state) {
    state.itemNum = 1;
    state.allTime = 0;
    state.answerid = [];
  },
}
