const wrapper = document.getElementById("wrapper");
const container = document.getElementById("container");
const Start_btn = document.getElementById("game-btn");
const Level_op = document.getElementById("dropdown");
const instruction = document.getElementById("instruction");
const Score_display = document.getElementById("score");
const high_score_board = document.getElementById("high_score")
const Score_board = document.getElementById("score_board")
const level_display = document.getElementById("level_display")
const small_nav = document.getElementById("small_nav")
const small_score = document.getElementById("small_score")
const best_score_display = document.getElementById("best_score");
const play_again = document.getElementById("play-again-btn")
const end_page = document.getElementById("end-page")
const seconds = document.getElementById("seconds")
const time_display = document.getElementById("timer")
let countdown = 9;
let width = window.innerWidth;
let score = 0;
let High_score = -999;
let match_counter = 0;
let Total_match = 8;
let pre_box = "", current_box = "";
let pre = "", current = "";


function end_game(level) {
    const endBs = document.getElementById("end-bestscore")
    const name = document.getElementById("name")
    const score_end = document.getElementById("end-score")

    let data = localStorage.getItem(`Best-score-${level}`)
    data = JSON.parse(data);
    endBs.innerHTML = "Best Score : " + data[2];
    name.innerHTML = "by " + data[0].toUpperCase();
    score_end.innerHTML = "Your Score : " + score;

    play_again.addEventListener("click", function () {
        location.reload();
        return;
    })

}

function set_high_score(level, text) {

    if (match_counter === Total_match) {
        if (score > High_score) {
            best_score_display.innerHTML = score;
            High_score = score;
            localStorage.removeItem(`Best-score-${level}`)
            localStorage.setItem(`Best-score-${level}`, JSON.stringify([text, level, High_score]));
        }
        setTimeout(() => {
            end_page.style.display = "block"
            end_game(level);
        }, 700);
    }

}
function displayBestscore(level) {
    let data = localStorage.getItem(`Best-score-${level}`)
    data = JSON.parse(data);

    if (data) {
        best_score_display.innerHTML = data[2];
        High_score = data[2];
    }
    else {
        best_score_display.innerHTML = High_score;
    }

}

function images_combination(level) {
    let images_combination = [];
    if (level == "easy") {
        images_combination = [
            `<img src="Img/img-1.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-2.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-3.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-4.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-1.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-2.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-3.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-4.png" alt="" class="front_side"></img>`,
        ]
    }
    else if (level == "medium") {
        images_combination = [
            `<img src="Img/img-1.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-2.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-3.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-4.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-5.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-6.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-7.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-8.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-1.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-2.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-3.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-4.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-5.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-6.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-7.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-8.png" alt="" class="front_side"></img>`,
        ]
    }
    else if (level == "hard") {
        images_combination = [
            `<img src="Img/img-1.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-2.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-3.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-4.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-5.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-6.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-7.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-8.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-9.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-10.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-11.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-12.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-13.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-14.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-15.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-16.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-17.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-18.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-1.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-2.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-3.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-4.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-5.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-6.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-7.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-8.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-9.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-10.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-11.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-12.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-13.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-14.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-15.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-16.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-17.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-18.png" alt="" class="front_side"></img>`,
        ]
    }
    return images_combination;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function set_img(Boxes, images) {
    let i = 0
    shuffleArray(images);

    Boxes.forEach(box => {
        box.innerHTML += images[i];
        i++
    })

}

function setup_level(level) {
    let box = `<div class="box">
            <img src="Img/que_icon.svg" alt="" srcset="" class="back_side">
        </div>`
    displayBestscore(level);
    level_display.innerHTML = level.toUpperCase();
    wrapper.innerHTML = "";
    wrapper.classList = "";
    let content = ""
    if (level === "easy") {

        for (let i = 0; i < 8; i++) {
            content += box;
        }
        Total_match = 4;
        wrapper.classList.add("easy-level")
        container.style.height = "250px";
        if (width < 600) {
            container.style.height = "200px";
            container.style.width = "400px";
        }


    } else if (level === "medium") {

        for (let i = 0; i < 16; i++) {
            content += box;
        }
        Total_match = 8;
        wrapper.classList.add('medium-level')
        container.style.height = "500px"
        if (width < 600) {
            container.style.height = "400px";
            container.style.width = "400px";
        }
    }
    else {

        for (let i = 0; i < 36; i++) {
            content += box;
        }
        Total_match = 18;
        wrapper.classList.add('hard-level');
        container.style.height = "500px"
        if (width < 600) {
            container.style.height = "400px";
            container.style.width = "400px";
            wrapper.style.marginTop = "3.3%";
            wrapper.style.marginLeft = "3.3%";
        }
    }
    if (width < 600) {
        instruction.style.height = "600px";
        Start_btn.style.top = "90%";
        Score_board.style.display = "none"
        high_score_board.style.display = "none"
        Level_board.style.position = "absolute"
        Level_board.style.left = "50%"
        Level_board.style.transform = "translate(-50%, -50%)"
        small_nav.style.display = "flex"
        small_nav.innerHTML = `<p id="small_highscore">Best Score: ${High_score}</p>
                                    <p id="small_score">Score :${score}</p>`
        end_page.style.height = "300px"
        end_page.style.width = "450px"
        play_again.style.width = "40%"
        play_again.style.height = "15%"
        time_display.style.top = "15%"
        time_display.style.left = "40%"
        time_display.style.height = "100px"
        time_display.style.width = "100px"
        seconds.style.fontSize="400%"

    }
    wrapper.innerHTML = content;

    const Boxes = document.querySelectorAll('.box')
    set_img(Boxes, images_combination(level));
    return Boxes;

}
function toggle_flip(Element) {
    if (Element.classList.contains('flip')) {
        Element.classList.remove('flip');
        Element.classList.add('unflip');
    }
    else {
        Element.classList.add('flip');
        Element.classList.remove('unflip');
    }
}

function flip_all(Boxes) {
    Boxes.forEach(Element => {
        toggle_flip(Element);
    })
}

function play_game(Boxes, level, Text) {
    Boxes.forEach(Element => {
        Element.addEventListener("click", function () {
            pre_box = current_box;
            current_box = Element;
            pre = current;
            const frontImage = Element.querySelector('.front_side');
            current = frontImage.getAttribute('src').split('/').pop();
            const frontSide1 = Element.querySelector('.front_side');
            const backSide1 = Element.querySelector('.back_side');
            if (current_box !== pre_box) {
                toggle_flip(Element);
            }
            if (pre && current_box !== pre_box) {
                if (current === pre) {
                    score += 2;
                    match_counter++;
                    Score_display.innerHTML = score;
                    pre_box.classList.add('matched');
                    current_box.classList.add('matched');

                } else {
                    score -= 1;
                    Score_display.innerHTML = score;
                    setTimeout(() => {
                        toggle_flip(pre_box);
                        toggle_flip(current_box);
                        current_box = "";
                    }, 500);

                }
                pre = null;
                current = null;
            }
            set_high_score(level, Text);
            if (width < 600) {
                small_nav.innerHTML = `<p id="small_highscore">Best Score: ${High_score}</p>
                                        <p id="small_score">Score :${score}</p>`
            }

        })
    })
}

function run_game(Boxes, level, inputText) {
    instruction.classList.add('reduce')
    setTimeout(() => {
        flip_all(Boxes);
        play_game(Boxes, level, inputText);
    }, 10000);

}

setup_level("easy");
Level_op.addEventListener("change", (event) => {
    setup_level(event.target.value)
})


Start_btn.addEventListener("click",
    function () {
        let level = Level_op.value;
        const Boxes = setup_level(level);
        const inputText = document.getElementById('text_input').value;
        timer(inputText);
        if (!inputText) {
            alert("Please enter your name to start the game.");
            return;
        }
        run_game(Boxes, level, inputText);
    }
)


document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {

        let level = Level_op.value;
        const Boxes = setup_level(level);
        const inputText = document.getElementById('text_input').value;
        timer(inputText);
        if (!inputText) {
            alert("Please enter your name to start the game.");
            return;
        }
        run_game(Boxes, level, inputText);
    }
});


function timer(input) {
    if (input) {
        let timerId = setInterval(function () {
            seconds.innerHTML = countdown;
            countdown--;
    
            if (countdown < 0) {
                clearInterval(timerId);
                countdown = 9;
                time_display.style.display = "none"
            }
        }, 1000);
    }
  
}
