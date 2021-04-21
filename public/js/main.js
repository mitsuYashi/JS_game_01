let sanmoku_narabe = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let mark = 0;
let winner = 0;

function win(mark){
    if (sanmoku_narabe[0] == mark && sanmoku_narabe[1] == mark && sanmoku_narabe[2] == mark) {
        winner = mark;
    }
    if (sanmoku_narabe[3] == mark && sanmoku_narabe[4] == mark && sanmoku_narabe[5] == mark) {
        winner = mark;
    }
    if (sanmoku_narabe[6] == mark && sanmoku_narabe[7] == mark && sanmoku_narabe[8] == mark) {
        winner = mark;
    }
    if (sanmoku_narabe[0] == mark && sanmoku_narabe[3] == mark && sanmoku_narabe[6] == mark) {
        winner = mark;
    }
    if (sanmoku_narabe[1] == mark && sanmoku_narabe[4] == mark && sanmoku_narabe[7] == mark) {
        winner = mark;
    }
    if (sanmoku_narabe[2] == mark && sanmoku_narabe[5] == mark && sanmoku_narabe[8] == mark) {
        winner = mark;
    }
    if (sanmoku_narabe[0] == mark && sanmoku_narabe[4] == mark && sanmoku_narabe[8] == mark) {
        winner = mark;
    }
    if (sanmoku_narabe[2] == mark && sanmoku_narabe[4] == mark && sanmoku_narabe[6] == mark) {
        winner = mark;
    }
}

function markChange(str, i, text) {

    let mark;

    if (str[i] == -1) {
        mark = '×';
    } else if (str[i] == 1) {
        mark = '〇';
    } else if (str[i] == 0) {
        mark = '';
    }

    return text[i].innerText = mark;

}

function nowMark() {
    
}

// DOM取得

const game = document.querySelector('.game');
const part = document.getElementsByClassName('part');
const mark_turn = document.getElementById('mark_turn');

let turn_num = 0;

// ゲーム処理
for (let i = 0; i < part.length; i++) {

    part[i].addEventListener('click', () => {
        
        if (sanmoku_narabe[i] == 0) {

            if (turn_num % 2 == 0) {
                mark = 1;
                sanmoku_narabe[i] = mark;
                mark_turn.innerText = '×';
            } else if (turn_num % 2 == 1) {
                mark = -1;
                sanmoku_narabe[i] = mark;
                mark_turn.innerText = '〇';
            }
            console.log(sanmoku_narabe);
            markChange(sanmoku_narabe, i, part);
            turn_num++;

            if (turn_num == 9) {
                document.querySelector('.game_end').style.display = 'block'
            }

        }

    })
    
};

// ゲームリセット
document.querySelector('.game_reset').addEventListener('click', () => {
    turn_num = 0;
    mark_turn.innerText = '〇';
    document.querySelector('.game_end').style.display = 'none';
    for (let i = 0; i < part.length; i++) {
        sanmoku_narabe[i] = 0;
        markChange(sanmoku_narabe, i, part);
    }

})
