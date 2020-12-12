//for
//for(declaration;condition;increment)

for(let i = 0; i < 10; i++){
    if(i === 2){
        console.log('2 is my fav number')
        continue; // go to the next iteration
    }

    if(i == 5){
        console.log('stop here')
        break;
    }

    console.log(i);
}