/*
 * @Author: caizhijun
 * @Date: 2020-07-13 15:09:07
 * @LastEditors: caizhijun
 * @LastEditTime: 2020-07-17 16:26:22
 * @Description: 浏览器返回管理
 */

export default class PopStateMgr{
    /**
     * @desc: 注册返回事件
     * @param {type} 
     * @return: 
     */
    static push(onBackClick:any){
        PopStateMgr._events.push(onBackClick);
        
        let state = { 
            title: "title", 
            url: null
        }; 
        window.history.pushState(state, "title", null);
        window.addEventListener('popstate', 
            e => {
                PopStateMgr._onBackClick();
            },
            false
        );
    }

    private static _onBackClick(){
        if(PopStateMgr._events.length <= 0){
            return;
        }

        let func = PopStateMgr._events.pop();
        if(func != null){
            func();
        }
    }

    private static _events:any[] = [];
}
