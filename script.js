const ICONS={ stone: '🪨',paper: '📄',scissors: '✂️'};
const BEATS={stone:'scissors',paper:'stone',scissors:'paper' };

const youBox=document.getElementById('you-box');
const cpuBox=document.getElementById('cpu-box');
const verdictE1=document.getElementById('verdict');
const youScoreE1=document.getElementById('you-score');
const cpuScoreE1=document.getElementById('cpu-score');
const tieScoreE1=document.getElementById('tie-score');
const buttons=document.querySelectorAll('.choice-btn');
const resetBtn=document.getElementById('reset');


let scores={you:0,cpu:0,tie:0};
let playing=false;


function randomChoice(){
    const options=Object.keys(ICONS);
    return options[Math.floor(Math.random()*options.length)];
}
   
function judge(you,cpu){
    if (you===cpu) return 'tie';
    return BEATS[you]===cpu ? 'win' : 'lose';
}


function setButtonsDisabled(disabled){
    buttons.forEach(b => b.disabled = disabled);
}


function play(choice){
    if (playing) return;
    playing=true;
    setButtonsDisabled(true);


    youBox.textContent=ICONS[choice];
    cpuBox.textContent='';
    cpuBox.classList.add('shake');
    verdictE1.textContent='';
    verdictE1.className='verdict';

    setTimeout(()=>{ 
        cpuBox.classList.remove('shake');
        const cpuChoice=randomChoice();
        cpuBox.textContent=ICONS[cpuChoice];


        const result=judge(choice,cpuChoice);

        if (result==='win'){
            scores.you++;
            verdictE1.textContent='You Win This Round'
            verdictE1.classList.add('win');
        }

        else if (result==='lose'){
         scores.cpu++;
         verdictE1.textContent='Machine Wins this Round';
         verdictE1.classList.add('lose')            
        }

        else{
            scores.tie++;
            verdictE1.textContent='Even match - tie';
            verdictE1.classList.add('tie');
        }    

        youScoreE1.textContent=scores.you;
        cpuScoreE1.textContent=scores.cpu;
        tieScoreE1.textContent=scores.tie;

        playing = false;
        setButtonsDisabled(false);
    },700);
}       
       
buttons.forEach(btn=> {
    btn.addEventListener('click', () => play(btn.dataset.choice));
});


resetBtn.addEventListener('click',()=>{
    scores={you:0,cpu:0,tie:0};
    youScoreE1.textContent=0;
    cpuScoreE1.textContent=0;
    tieScoreE1.textContent=0;
     youBox.textContent='?';
     cpuBox.textContent='?';
     verdictE1.textContent='';
     verdictE1.className='verdict';
});
 