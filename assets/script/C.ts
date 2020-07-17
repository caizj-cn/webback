/*
 * @Author: caizhijun
 * @Date: 2020-07-17 16:15:38
 * @LastEditors: caizhijun
 * @LastEditTime: 2020-07-17 16:22:42
 * @Description: file content
 */ 

import PopStateMgr from "./PopStateMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class C extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        PopStateMgr.push(() => {
            cc.director.loadScene('b');
        })
    }

    // update (dt) {}
}
