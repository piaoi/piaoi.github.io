/*
 * @Author: 木白广木林
 * @Date: 2023-12-29 08:50:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-01-11 13:16:02
 * @FilePath: \IndexWeb\WanderingEarth\js\script.js
 */
// 设置5秒倒计时
var time = 9;
// 设置一个定时器，每秒执行一次
var timer = setInterval(function(){
    // 每次减一
    time--;

    if(time <= 0){
        clearInterval(timer);
        document.title = "正在跳转..."
        window.location.href = "../newyear";
        
    }
    // 将时间显示在页面上
    document.querySelector(".time_h1").innerHTML = time;
    document.querySelector(".time_h3").innerHTML = time;
    // 设置标题
    if(time > 0){
        document.title = "跳转倒计时：" + time + "秒";
    }
    if(time < 2){
        document.querySelector(".distance_en_us_3").innerHTML = "SECOND";
    }
},1000);
