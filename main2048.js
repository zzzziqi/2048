let board = new Array();
let score = 0;

$(document).ready(function(){
    newgame();
    gridCell1();
})

function newgame() {
    // 初始化棋盘格
    init();
    // 在随机两个格子生成数字
};

function init() {
    for (let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++){

            let gridCell = $('#grid-cell-'+i+'-'+j); //这个暂时还没懂含义,理解是现时这个gridCell就是Id为括号里面的字符串的方框
            gridCell.css('top', getPosTop(i , j));
            gridCell.css('left', getPosLeft(i , j)); //这个css用得我不知所措，万物皆对象，即向gridCell里面的样式添加属性名为left，值为getPosLeft方法
        }
    }
}