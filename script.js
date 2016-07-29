function checkBrackets(data){
    console.log(data);
    var left_bracer =0 , right_bracer = 0;
    for(var i=0; i<data.length; i++){
        if(data[i] == '('){
            left_bracer++;
        }else if(data[i] == ')'){
            right_bracer++;
        }
    }
    if(left_bracer != right_bracer){
        console.log('incorrect');
    }else{
        console.log('correct');
    }
}

checkBrackets("('( ( a + b ) / 5 abd )')");
checkBrackets("(') ( a + b ) )')");
checkBrackets("('( b * ( c + d *2 / ( 2 + ( 12 abc / ( a + 3 ) ) ) )')");