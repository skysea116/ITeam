class Question {
     constructor(num, text, answer, false_1, idk, suc_1, suc_2) {
          this.num = num;
          this.text = text;
          this.answer = answer;
          this.false_1 = false_1;
          this.idk = idk;
          this.suc_1 = suc_1;
          this.suc_2 = suc_2;
     }
}

let question_1 = new Question(1, "Иван Иванович купил в магазине у дома несколько пачек макарон по 40 рублей, несколько пачек печенья по 32 рубля и 2 пакета сока. Продавщица сказала, что с него 525 рублей (скидка не предусмотрена). Иван Иванович заявил, что его пытаются обсчитать. Действительно ли продавщица ошиблась в подсчетах?", 
'Да, сумма явно неверная', 'Нет, такая сумма вполне могла получиться', 'Не знаю, не получается решить', 'Правильно! С логикой у вас все отлично', 'Так как 1 пачка макарон стоит 40 рублей, то любое количество пачек будет стоить четное число рублей. Аналогично с печеньем. А так как пакетов сока ровно 2, то за сок тоже нужно будет отдать четное число рублей. Получается, что ни при каких условиях в результате не может получиться нечетное число 525, а значит, продавщица действительно пыталась обсчитать Ивана Ивановича.<br><br> В этом задании проверялось ваше логическое мышление. Это критически важный навык для любого программиста.');
let question_2 = new Question(2, "Максим каждый вечер ходит в тренажёрный зал. Но если по каким-то причинам у него не получается, то на следующий день он проводит 2 тренировки. Какое из следующих утверждений возможно исходя из заданных условий:", 
'За последние 3 дня у Максима было всего 2 тренировки', 'Максим 2 дня подряд проводил по 2 тренировки', 'Не знаю, не получается решить', 'Правильно! У вас получается анализировать задачи', 'За последние 3 дня у Максима было всего 2 тренировки - так как, например, если Максим не смог пойти в зал на вторник, то провёл по 2 тренировки в среду и четверг.');
let question_3 = new Question(3, "Aнекдот про программистов. Программисту потребовалось взять в долг тысячу рублей, но для ровного счёта у друга он попросил… Сколько?", 
'1024 рубля', '10 тысяч рублей', 'Я не знаю :/', 'Правильно! У вас чувство юмора программиста.', 'В программировании широко используется двоичная система счисления. В этой системе числа представляются последовательностью нулей и единиц. 1024 в двоичной системе счисления выглядит так: 10000000000.<br><br>Таким образом, программист мог бы попросить в долг 1024 рубля, что было бы для него легче воспринимать и запоминать.');
let question_4 = new Question(4, "Мария каждую пятницу после работы заходит в кондитерскую и покупает коробку эклеров. Если их нет, то покупает кусочек торта. Сколько логических операторов необходимо использовать, чтобы узнать, купила ли Мария коробку эклеров в любой запрашиваемый день (например, 48 дней назад).", 
'2', '1', 'Я не знаю, не могу решить', 'Правильно! У вас получается моделировать код.', 'Нам необходимо определить, купила ли Мария коробку эклеров в любой запрашиваемый день. Для этого необходимо использовать две логические конструкции: "ИЛИ" и "НЕ".<br><br>Если Мария купила коробку эклеров, то мы должны получить ответ "да". Если же мы запросили день, когда она покупала торт и коробка эклеров была уже продана, тогда можно считать, что она не покупала коробку эклеров. Объединяем два условия с помощью логического оператора "ИЛИ", чтобы получить конечный ответ:<br><br>(Мария купила коробку эклеров) ИЛИ (Мария не купила коробку эклеров, но купила торт)<br><br>Затем нам необходимо использовать оператор "НЕ", чтобы инвертировать ответ, так как мы ищем случай, когда Мария ПОКУПАЛА коробку эклеров. Итак, конечный ответ будет выражаться следующим образом:<br><br>НЕ ((Мария купила коробку эклеров) ИЛИ (Мария не купила коробку эклеров, но купила торт))<br><br>Таким образом, необходимо использовать два оператора: "ИЛИ" и "НЕ".');


let quest_num = document.querySelector('.quest-num');
let quest_text = document.querySelector('.question');

let answ_1 = document.querySelector('.answ_1');
let answ_2 = document.querySelector('.answ_2');
let answ_3 = document.querySelector('.answ_3');

let start_btn = document.querySelector('.test-btn');

let modal_start = document.querySelector('#exampleModalToggle');
let modal_test = document.querySelector('#test');

let answ_btn = document.querySelector('.answ-btn');
let next_btn = document.querySelector('.next-btn');
let answ_btn_2 = document.querySelector('.answ-btn_2');
let next_btn_2 = document.querySelector('.next-btn_2');
let answ_btn_3 = document.querySelector('.answ-btn_3');
let next_btn_3 = document.querySelector('.next-btn_3');
let answ_btn_4 = document.querySelector('.answ-btn_4');
let next_btn_4 = document.querySelector('.next-btn_4');

let radios = document.querySelectorAll('.test-vars input');
let modal_body = document.querySelector('.modal-body');
let success = document.querySelector('.success');
let finish = document.querySelector('.finish');
let suc_1 = document.querySelector('.success-1');
let suc_2 = document.querySelector('.success-2');
let fin_text = document.querySelector('.result-text');
let score = document.querySelector('.result-score');

function insertQuestData(answ_par_1, answ_par_2, answ_par_3, qustion, num) {
     quest_num.innerHTML = num;
     quest_text.innerHTML = qustion;
     answ_1.innerHTML = answ_par_1;
     answ_2.innerHTML = answ_par_2;
     answ_3.innerHTML = answ_par_3;
}
function insertAnswData(suc_par_1, suc_par_2) {
     suc_1.innerHTML = suc_par_1;
     suc_2.innerHTML = suc_par_2;
}
function insertFinishData(score_par, fin_par_text) {
     score.innerHTML = score_par;
     fin_text.innerHTML = fin_par_text;
     
}

insertQuestData(question_1.answer, question_1.idk, question_1.false_1, question_1.text, question_1.num);

answ_btn.addEventListener('click', {handleEvent: checkAnsw, question: question_1});
answ_btn_2.addEventListener('click', {handleEvent: checkAnsw, question: question_2});
answ_btn_3.addEventListener('click', {handleEvent: checkAnsw, question: question_3});
answ_btn_4.addEventListener('click', {handleEvent: checkAnsw, question: question_4});




let counter = [];

start_btn.addEventListener('click', () => {
     success.classList.remove('show_test');
     document.querySelector('#test .modal-title').classList.remove('d-none');

     insertQuestData(question_1.answer, question_1.idk, question_1.false_1, question_1.text, question_1.num);
     counter = [];

     modal_body.classList.remove('hide_test');
     finish.classList.add('hide_test');
     
     answ_btn.classList.remove('d-none');
     answ_btn_2.classList.add('d-none');
     answ_btn_3.classList.add('d-none');
     answ_btn_4.classList.add('d-none');

     next_btn.classList.remove('d-none');
     next_btn_2.classList.add('d-none');
     next_btn_3.classList.add('d-none');
     next_btn_4.classList.add('d-none');

     answ_btn.addEventListener('click', {handleEvent: checkAnsw, question: question_1});

     radios.forEach(el => {
           el.checked = false;
     })
})

function checkAnsw() {
     radios.forEach(el => {
          // console.log(el.parentElement.querySelector('label span').innerHTML);
          if(el.checked) {
                    success.classList.add('show_test');
                    el.checked = false;
                    modal_body.classList.add('hide_test');
               
               if(el.parentElement.querySelector('label span').innerHTML === this.question.answer) {
                    counter.push(1);
                    insertAnswData(this.question.suc_1, this.question.suc_2);
                   
               } else if(el.parentElement.querySelector('label span').innerHTML === this.question.idk) {
                    console.log('Не знает!')
                    insertAnswData("Всё знать невозможно :)", "Поэтому не стоит расстраиваться, давайте перейдём к следующему вопросу!");
                  
               }
                else {
                    console.log('неверно!')
                    insertAnswData("К сожалению, это не правильный ответ :(", "Но не стоит расстраиваться, давайте перейдём к следующему вопросу!");
                 
               }
             
          }
     });
}


next_btn.addEventListener('click', () => {
     success.classList.remove('show_test');
     modal_body.classList.remove('hide_test');
     insertQuestData(question_2.false_1, question_2.idk, question_2.answer, question_2.text, question_2.num);
    
     answ_btn.classList.add('d-none');
     answ_btn_2.classList.remove('d-none');

     next_btn.classList.add('d-none');
     next_btn_2.classList.remove('d-none');
})
next_btn_2.addEventListener('click', () => {
     success.classList.remove('show_test');
     modal_body.classList.remove('hide_test');
     insertQuestData(question_3.answer, question_3.false_1, question_3.idk, question_3.text, question_3.num);
    
     answ_btn_2.classList.add('d-none');
     answ_btn_3.classList.remove('d-none');

     next_btn_2.classList.add('d-none');
     next_btn_3.classList.remove('d-none');
})
next_btn_3.addEventListener('click', () => {
     success.classList.remove('show_test');
     modal_body.classList.remove('hide_test');
     insertQuestData(question_4.idk, question_4.false_1, question_4.answer, question_4.text, question_4.num);
    
     answ_btn_3.classList.add('d-none');
     answ_btn_4.classList.remove('d-none');

     next_btn_3.classList.add('d-none');
     next_btn_4.classList.remove('d-none');
})
next_btn_4.addEventListener('click', () => {
     success.classList.remove('show_test');
     finish.classList.remove('hide_test');
     answ_btn_4.classList.add('d-none');
     next_btn_4.classList.add('d-none');

     document.querySelector('#test .modal-title').classList.add('d-none');

     switch(counter.length) {
          case 4:
               insertFinishData(counter.length, "Это великолепный результат! У вас есть все шансы стать отличным программистом. Начните обучение прямо сейчас, доступ ко вводным урокам уже открыт")
               document.querySelector('.finish-btn-1').classList.remove('d-none');
               document.querySelector('.finish-btn-2').classList.add('d-none');
               break;
               
          case 3:
               insertFinishData(counter.length, "Это хороший результат! У вас есть все шансы стать отличным программистом. Начните обучение прямо сейчас, доступ ко вводным урокам уже открыт") 
               document.querySelector('.finish-btn-1').classList.remove('d-none');
               document.querySelector('.finish-btn-2').classList.add('d-none');
               break;

          case 2:
               insertFinishData(counter.length, "Это удовлетворительный результат! Начните обучение прямо сейчас, но перед началом, советуем вам дополнительно порешать логические задачи.") 
               document.querySelector('.finish-btn-1').classList.remove('d-none');
               document.querySelector('.finish-btn-2').classList.add('d-none');
               break;

          default: {
               insertFinishData(counter.length, "Вы не прошли тест :( Собиритесь с силами и пройдите тест ещё раз");
               document.querySelector('.finish-btn-1').classList.add('d-none');
               document.querySelector('.finish-btn-2').classList.remove('d-none');
               
             
               break;
          }
     }
})