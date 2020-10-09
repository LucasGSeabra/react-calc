function Operate(val1, val2, op) {
    let r = 0;
    let v1 = parseFloat(val1);
    let v2 = parseFloat(val2);
    switch(op) {

        case '+':
            r = v1 + v2;
        break;

        case '-':
            r = v1 - v2;
        break;

        case '*':
            r = v1 * v2;
        break;

        case '/':
            r = v1 / v2;
        break;
    
        default:
            r = v1;
    }
    
    return r;
}

export default Operate