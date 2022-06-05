var page = 1;
function move_next() {
  if(page < 9) {
    document.querySelector('.box').classList.remove('prev_trans' + page);
    document.querySelector('.bullet' + page).classList.remove('now');
    document.querySelector('.box').classList.add('next_trans' + page);
    page = page + 1;
    document.querySelector('.bullet' + page).classList.add('now');
  }
}
function move_prev() {
  if(page > 1) {
    document.querySelector('.box').classList.remove('prev_trans' + page);
    document.querySelector('.bullet' + page).classList.remove('now');
    page = page - 1;
    document.querySelector('.box').classList.add('prev_trans' + page);
    document.querySelector('.box').classList.remove('next_trans' + page);
    document.querySelector('.bullet' + page).classList.add('now');
  }
}
var check = 1;
function repeat() {
  if(check == 1) {
    move_next();
    if(page == 9) {
      check = 0;
    }
  }
  else if(check == 0) {
    move_prev();
    if(page == 1) {
      check = 1;
    }
  }
}
var interval = setInterval(repeat, 2000);
function play() {
  document.querySelector('.pause').classList.remove('on');
  document.querySelector('.play').classList.add('on');
  interval = setInterval(repeat, 2000);
}
function pause() {
  document.querySelector('.pause').classList.add('on');
  document.querySelector('.play').classList.remove('on');
  clearInterval(interval);
}