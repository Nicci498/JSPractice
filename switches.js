const color = 'red';

switch (color) {
    case 'red':
        console.log('stop');
        break;
    case 'yellow':
        console.log('slow');
        break;
    case 'green':
        console.log('go');
        break;
    default:
        console.log('light is broken')
        break;
}

switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
    default:
        day = 'so confused, where am i?'
        break;
}

switch(stash){
    case stash > 100:
        console.log('plenty');
        break;
    case stash > 75:
        console.log('we are good for now');
        break;
    case stash > 50:
        console.log('keep an eye on it');
        break;
    case stash > 15:
        console.log('order more');
        break;
    case stash === 0:
        console.log('oh no we are all of of things');
        break;
    default:
        console.log('what is thins?');
        break;

}