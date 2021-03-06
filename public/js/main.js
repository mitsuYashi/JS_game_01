let sanmoku_narabe = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let mark = 0;
let winner = 0;
let circleWin = 0;
let crossWin = 0;

function win(str, str2, winner) {

    if (str[0] == str2 && str[1] == str2 && str[2] == str2) {
        winner = str2;
    } else if (str[3] == str2 && str[4] == str2 && str[5] == str2) {
        winner = str2;
    } else if (str[6] == str2 && str[7] == str2 && str[8] == str2) {
        winner = str2;
    } else if (str[0] == str2 && str[3] == str2 && str[6] == str2) {
        winner = str2;
    } else if (str[1] == str2 && str[4] == str2 && str[7] == str2) {
        winner = str2;
    } else if (str[2] == str2 && str[5] == str2 && str[8] == str2) {
        winner = str2;
    } else if (str[0] == str2 && str[4] == str2 && str[8] == str2) {
        winner = str2;
    } else if (str[2] == str2 && str[4] == str2 && str[6] == str2) {
        winner = str2;
    } else {
        winner = 0;
    }

    return winner;

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

function arrayChange(str, mark) {
    for (let i = 0; i < str.length; i++) {
        str[i] = mark;
    }
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

            // 勝敗判定
            switch (win(sanmoku_narabe, mark, winner)) {
                case 1:
                    document.querySelector('#result').innerText = `〇の勝ち`;
                    sanmoku_narabe.fill(mark);
                    circleWin += 1;
                    break;

                case -1:
                    document.querySelector('#result').innerText = `×の勝ち`;
                    sanmoku_narabe.fill(mark);
                    crossWin += 1;
                    break;

                case 0:
                    document.querySelector('#result').innerText = `ひきわけ`;
                    break;
            }

            markChange(sanmoku_narabe, i, part);
            turn_num++;

            if (turn_num == 9 || win(sanmoku_narabe, mark, winner) != 0) {
                document.querySelector('.game_end').style.display = 'block';
                document.getElementsByClassName('numWin')[0].innerText = circleWin;
                document.getElementsByClassName('numWin')[1].innerText = crossWin;
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
