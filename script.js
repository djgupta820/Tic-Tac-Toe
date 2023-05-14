class TicTakToe{
    constructor(){
        this.b1 = document.getElementById('b1')
        this.b2 = document.getElementById('b2')
        this.b3 = document.getElementById('b3')
        this.b4 = document.getElementById('b4')
        this.b5 = document.getElementById('b5')
        this.b6 = document.getElementById('b6')
        this.b7 = document.getElementById('b7')
        this.b8 = document.getElementById('b8')
        this.b9 = document.getElementById('b9')
        this.reset = document.getElementById('reset')
        this.player = 1
        this.won = document.getElementById('won')
        this.win = document.getElementById('win')
        this.cb = document.getElementById('cb')
        this.ok = document.getElementById('ok')
        
        this.reset.addEventListener('click', ()=>{
            this.resetBoard()
        })
        
        this.b1.addEventListener('click', () => {
            this.put(b1)
            this.checkWinning()
        })
        
        this.b2.addEventListener('click', () => {
            this.put(b2)
            this.checkWinning()
        })
        
        this.b3.addEventListener('click', () => {
            this.put(b3)
            this.checkWinning()
        })
        
        this.b4.addEventListener('click', () => {
            this.put(b4)
            this.checkWinning()
        })
        
        this.b5.addEventListener('click', () => {
            this.put(b5)
            this.checkWinning()
        })
        
        this.b6.addEventListener('click', () => {
            this.put(b6)
            this.checkWinning()
        })
        
        this.b7.addEventListener('click', () => {
            this.put(b7)
            this.checkWinning()
        })
        
        this.b8.addEventListener('click', () => {
            this.put(b8)
            this.checkWinning()
        })
        
        this.b9.addEventListener('click', () => {
            this.put(b9)
            this.checkWinning()
        })

        this.cb.addEventListener('click', () => {
            this.win.style.display = 'none'
        })

        this.ok.addEventListener('click', ()=> {
            this.resetBoard()
            this.win.style.display = 'none'
        })
    }

    resetBoard(){
        this.b1.innerText = '';
        this.b2.innerText = '';
        this.b3.innerText = '';
        this.b4.innerText = '';
        this.b5.innerText = '';
        this.b6.innerText = '';
        this.b7.innerText = '';
        this.b8.innerText = '';
        this.b9.innerText = '';
        this.player = 1
    }

    put(element){
        if(this.player === 1){
            element.innerText = 'X'
            this.player = 2
        }
        else{
            element.innerText = 'O'
            this.player = 1
        }
    }

    playerWon(playerID){
        this.win.style.display = 'block'
        this.won.innerText = `Player ${playerID} Won`
        setTimeout(()=>{
            win.style.display = 'none'
        }, 10000)
    }

    checkWinning(){
        let vb1 = b1.innerText
        let vb2 = b2.innerText
        let vb3 = b3.innerText
        let vb4 = b4.innerText
        let vb5 = b5.innerText
        let vb6 = b6.innerText
        let vb7 = b7.innerText
        let vb8 = b8.innerText
        let vb9 = b9.innerText

        // for player 1
        if(vb1 === 'X' && vb2 === 'X' && vb3 === 'X'){
            this.playerWon(1)
        }
        if(vb4 === 'X' && vb5 === 'X' && vb6 === 'X'){
            this.playerWon(1)
        }
        if(vb7 === 'X' && vb8 === 'X' && vb9 === 'X'){
            this.playerWon(1)
        }
        if(vb1 === 'X' && vb4 === 'X' && vb7 === 'X'){
            this.playerWon(1)
        }
        if(vb2 === 'X' && vb5 === 'X' && vb8 === 'X'){
            this.playerWon(1)
        }
        if(vb3 === 'X' && vb6 === 'X' && vb9 === 'X'){
            this.playerWon(1)
        }
        if(vb1 === 'X' && vb5 === 'X' && vb9 === 'X'){
            this.playerWon(1)
        }
        if(vb3 === 'X' && vb5 === 'X' && vb7 === 'X'){
            this.playerWon(1)
        }
        // for player 2
        if(vb1 === 'O' && vb2 === 'O' && vb3 === 'O'){
            this.playerWon(2)
        }
        if(vb4 === 'O' && vb5 === 'O' && vb6 === 'O'){
            this.playerWon(2)
        }
        if(vb7 === 'O' && vb8 === 'O' && vb9 === 'O'){
            this.playerWon(2)
        }
        if(vb1 === 'O' && vb4 === 'O' && vb7 === 'O'){
            this.playerWon(2)
        }
        if(vb2 === 'O' && vb5 === 'O' && vb8 === 'O'){
            this.playerWon(2)
        }
        if(vb3 === 'O' && vb6 === 'O' && vb9 === 'O'){
            this.playerWon(2)
        }
        if(vb1 === 'O' && vb5 === 'O' && vb9 === 'O'){
            this.playerWon(2)
        }
        if(vb3 === 'O' && vb5 === 'O' && vb7 === 'O'){
            this.playerWon(2)
        }
    }
}

const ttt = new TicTakToe()
ttt.playerWon(1)