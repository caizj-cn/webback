/*
 * @Author: caizhijun
 * @Date: 2020-07-17 16:15:38
 * @LastEditors: caizhijun
 * @LastEditTime: 2020-07-17 16:24:25
 * @Description: file content
 */ 

import PopStateMgr from "./PopStateMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class B extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        PopStateMgr.push( () => {
            cc.director.loadScene('a');
        })
    }

    // update (dt) {}

    onClick(event:any, data:string){
        switch(data){
            case 'c':{
                cc.director.loadScene('c');
                break;
            }
        }
    }
}
