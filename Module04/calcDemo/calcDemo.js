import { LightningElement } from 'lwc';

export default class CalcDemo extends LightningElement {
    calcExpression='';
    result = 0;

    numbers = [{
        num :1,
        linebreak :false
        },
        {
            num :2,
            linebreak :false
        },
        {
            num :3,
            linebreak :false
        },
        {
            num :'+',
            linebreak :true
        },
        {
            num :4,
            linebreak :false
        },
        {
            num :5,
            linebreak :false
        },
        {
            num :6,
            linebreak :false
        },
        {
            num :'-',
            linebreak :true
        },
        {
            num :7,
            linebreak :false
        },
        {
            num :8,
            linebreak :false
        },
        {
            num :9,
            linebreak :false
        },
        {
            num :'*',
            linebreak :true
        }
        
    ]
    //numbers1 = [1,2,3,4,5,6,7,8,9];
    buttonClick(event){
        //alert(event.target.value);
        this.calcExpression = `${this.calcExpression} ${event.target.value}`;
    }

    calculateResults(){
        this.result = eval(this.calcExpression);
    }

    clear(){
        this.calcExpression='';
        this.result = 0;
    }
}

