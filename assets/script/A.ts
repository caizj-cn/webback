/*
 * @Author: caizhijun
 * @Date: 2020-07-17 16:15:38
 * @LastEditors: caizhijun
 * @LastEditTime: 2020-07-17 16:24:16
 * @Description: file content
 */ 

const {ccclass, property} = cc._decorator;

@ccclass
export default class A extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}

    onClick(event:any, data:string){
        switch(data){
            case 'b':{
                cc.director.loadScene('b');
                break;
            }
        }
    }
}
