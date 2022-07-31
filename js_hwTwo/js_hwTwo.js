
/*- Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше ть*/ /*'Невиведівірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
    */
     const x= +prompt('Enter the number');
        if (x!=0) {
            console.log('Correct');
        } else{
            console.log('Uncorrect')
        }
/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/
    const time= +prompt('what time');
        if (time<=14.7 && time>0 ) {
            console.log('firsQuater');
        } else if (time>14.7 && time<=29.4) {
            console.log('secondQuater');
        } else if (time>29.4 && time<=44.1) {
            console.log('thirdQuater');
        } else if (time>44.1 && time<=59) {
            console.log('fourthQuater');
        } else {
            console.log('imposible')
        }
/*- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).*/
    const day=+prompt('day of month')
        if (day>=1 && day<=10) {
            console.log('First half of the month');
        } else if (day>10 && day<=20) {
            console.log('Second half of the month');
        } else if (day>20 && day<=31) {
            console.log('Third half of the month');
        } else{
            console.log('???')
        }
/*- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).*/
    const dayOfTheWeek = +prompt('Enter you day')
        switch (dayOfTheWeek) {
            case 1:
                console.log('Monday');
                break;
            case 2:
                console.log('Tuesday');
                break;
            case 3:
                console.log('Wednesday');
                break;
            case 4:
                console.log('Thursday');
                break;
            case 5:
                console.log('Friday');
                break;
            case 6:
                console.log('Saturday');
                break;
            case 7:
                console.log('Sunday');
                break;
            default:
                console.log('???')
        }
/*- Користувач вводить або має два числа.
    Потрібно знайти та вивести максимальне число з тих двох .
    Також потрібно врахувати коли введені рівні числа.*/
        const num1= +prompt('number')
        const num2= +prompt('number2')
        if (num1>num2){
            console.log(num1)
        } else if (num2<num1){
            console.lg(num2)
        } else if (num1===num2){
            console.log('values are the same')
        } else {
            console.log("?!")
        }
/*- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
    за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)*/
        const y=''|| 'default';
            console.log(y)













