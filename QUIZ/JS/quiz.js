let data={
    allquestions:[
        {
            num:'question1',
            id:1,
            question : "Who is BATMAN",
            answer: "Bruce Whyne",
            options:['Clark Kent','Bruce Whyne','Wonder Women','Tony Stark']
        },
        {
            num:'question2',
            id:2,
            question : "Who is REBEL STAR",
            answer: "Prabhas",
            options:['Prabhas','Maheshbabu','Arya','Surya']
        },
        {
            num:'question3',
            id:3,
            question : "Who is Super Star ",
            answer: "Mahesh Babu",
            options:['Arya','Surya','Mahesh Babu','Vijay']
        },
        {
            num:'question4',
            id:4,
            question : "Who is Mega Star ",
            answer: "Chiranjeevi",
            options:['Chiranjeevi','Syrya','Ram','Vijay']
        },
        {
            num:'question5',
            id:5,
            question : "Who is Power Star",
            answer: "Pavan Kalyan",
            options:['Pavan Kalyan','Ram','Arjun','Arya']
        },
        {
            num:'question6',
            id:6,
            question : "Who is Icon Star",
            answer: "Arjun",
            options:['tej','Arjun','Arya','Vijay']
        },
        {
            num:'question7',
            id:7,
            question : "Who is Universal Star",
            answer: "Kamal Hasan",
            options:['tej','Arjun','Kamal Hasan','Vijay']
        },
        {
            num:'question8',
            id:8,
            question : "Who is Hero of K.G.F",
            answer: "Yash",
            options:['Yash','Arya','Vijay','Varun']
        },
        {
            num:'question9',
            id:9,
            question : "Who is Hero of Robo",
            answer: "Rajinikanth",
            options:['Rajinikanth','Arya','Varun','Ajay']
        },
        {
            num:'question10',
            id:10,
            question : "Who is Rowdy",
            answer: "Vijay Devarakonda",
            options:['Ajay','Varun','Vijay Devarakonda','Arya']
        },
        {
            num:'question11',
            id:11,
            question : "Who is Hero of Robo",
            answer: "Rajinikanth",
            options:['Rajinikanth','Arya','Varun','Ajay']
        },
        {
            num:'question12',
            id:12,
            question : "Who is BATMAN",
            answer: "Bruce Whyne",
            options:['Clark Kent','"Bruce Whyne','Wonder Women','Tony Stark']
        },
        {
            num:'question13',
            id:13,
            question : "Who is Universal Star",
            answer: "Kamal Hasan",
            options:['tej','Arjun','Kamal Hasan','Vijay']
        },
        {
            num:'question14',
            id:14,
            question : "Who is Super Star ",
            answer: "Mahesh Babu",
            options:['Arya','Surya','Mahesh Babu','Vijay']
        },
        {
            num:'question15',
            id:15,
            question : "Who is Mega Star ",
            answer: "Chiranjeevi",
            options:['Chiranjeevi','Syrya','Ram','Vijay']
        },
        {
            num:'question16',
            id:16,
            question : "Who is Power Star",
            answer: "Pavan Kalyan",
            options:['Pavan Kalyan','Ram','Arjun','Arya']
        },
        {
            num:'question17',
            id:17,
            question : "Who is BATMAN",
            answer: "Bruce Whyne",
            options:['Clark Kent','Bruce Whyne','Wonder Women','Tony Stark']
        },
        {
            num:'question18',
            id:18,
            question : "Who is Power Star",
            answer: "Pavan Kalyan",
            options:['Pavan Kalyan','Ram','Arjun','Arya']
        },
        {
            num:'question19',
            id:19,
            question : "Who is Icon Star",
            answer: "Arjun",
            options:['tej','Arjun','Arya','Vijay']
        },
        {
            num:'question20',
            id:20,
            question : "Who is IRONMAN",
            answer: "Tony Stark",
            options:['Clark Kent','Bruce Whyne','Wonder Women','Tony Stark']
        }
    ]
}


let count=0;
let answers=[];
for(i=0;i<5;i++){
    let random=Math.trunc(Math.random()*20);
    let quest=data.allquestions[random]
    let question=quest.question;
    [a,b,c,d]=quest.options
    answers.unshift(quest.answer);
    let html=
    `<div class ="questions">${question}</div>
    <div class= "alloptions">
    <input class ="options" name="radio${count}" type="radio"><span class="ans">${a}</span>
    <input class ="options" name="radio${count}" type="radio"><span class="ans">${b}</span>
    <input class ="options" name="radio${count}" type="radio"><span class="ans">${c}</span>
    <input class ="options" name="radio${count}" type="radio"><span class="ans">${d}</span>
    </div>`;

    count++;
    document.querySelector('#container').insertAdjacentHTML('afterBegin',html);
    
}
let ans=0;
let result=0;
function submit(){
    // let opt = document.querySelectorAll('.options');
    for(let i=0;i<document.querySelectorAll('.options').length;i++)
    {
        let all=document.querySelectorAll('.options')[i].checked
        if(all==true){
            let usercheck = document.querySelectorAll('.ans')[i].innerHTML;
            console.log(usercheck,answers[ans])
            
             if(usercheck == answers[ans])
             { 
                 console.log('correct')
                 result++;
             }else{
                 console.log('wrong');
             }ans++;
        } 
       
    }
    document.querySelector('#container').innerHTML=result;
}
document.querySelector('#submit').addEventListener('click',submit);


