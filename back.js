class calculator{

    operation = null;

    /**
     * 
     * @param {HTMLElement} PreviousOperand 
     * @param {HTMLElement} CurrentOperand 
     */
    constructor(PreviousOperand, CurrentOperand){
        this.PreviousOperand = PreviousOperand;
        this.CurrentOperand = CurrentOperand;
        this.clear();
    }
    
    clear(){
        this.CurrentOperand.innerHTML ='' ;
        this.PreviousOperand.innerHTML ='' ;
        this.operation = undefined;
    }
    append(number){
        this.CurrentOperand.innerHTML += number;
    }

    ChooseOperation(operation){
        if(this.CurrentOperand === '') return;
        if(this.PreviousOperand!==''){
            this.compute()
        }
        this.operation = operation;
        this.PreviousOperand.innerHTML = CurrentOperand.innerHTML;
        this.CurrentOperand.innerHTML = '';
          //this.CurrentOperand.innerHTML = '' 
    }

    compute(){
 var computation;
const prev = parseFloat(this.PreviousOperand.innerHTML);
const current = parseFloat(this.CurrentOperand.innerHTML);
if(isNaN(prev)||isNaN(current)) return;
switch(this.operation){
 case '+':
 computation = prev + current;
break
 case '-':
 computation = prev - current;
 break
 case '*':
 computation = prev * current;
 break
 case '÷':
 computation = prev / current;
 break
 
 default:
    return;
}
this.PreviousOperand.innerHTML = this.CurrentOperand.innerHTML;



this.CurrentOperand.innerHTML = computation;
this.operation = undefined;
 
 
    }

    updatedisplay(){
        //this.CurrentOperand = this.CurrentOperand 
    }
    delete(){
        
        this.CurrentOperand.innerHTML = this.CurrentOperand.innerHTML.slice(0 , -1)
    }
}


const NumberButtons= document.querySelectorAll('[data-number]')
const OperationButtons= document.querySelectorAll('[data-operation]')
const EqualButton = document.querySelector('[data-equal]')
const DeleteButton = document.querySelector('[data-delete]')
const ClearAllButton = document.querySelector('[data-clear-all]')
const PreviousOperand = document.querySelector('[data-previous-operand]')
const CurrentOperand = document.querySelector('[data-current-operand]')

const Calculator = new calculator(PreviousOperand,CurrentOperand)

NumberButtons.forEach(button => { button.addEventListener('click' , () => {
    Calculator.append(button.innerText);
    //Calculator.updatedisplay()
})
})

OperationButtons.forEach(button => { button.addEventListener('click' , function(){
    Calculator.ChooseOperation(button.innerText);
    Calculator.updatedisplay();
})
});
EqualButton.addEventListener('click', function(){
    Calculator.compute();
    //Calculator.updatedisplay();
})
ClearAllButton.addEventListener('click', function(){
    Calculator.clear();
    //Calculator.updatedisplay();
})
DeleteButton.addEventListener('click', function(){
    Calculator.delete();
    //Calculator.updatedisplay();
})