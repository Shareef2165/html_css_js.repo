
let logCounter = 0;


function updateStatus() {
    const statusBox = document.getElementById('status');
    statusBox.textContent = `Total Items Added: ${logCounter}`;
}


const Logger = {
    
    logEvent: function (event, description, Methodname,carname,company ) {
        logCounter++; 
        updateStatus(); 
        
        const logList = document.getElementById('logList');
        const listItem = document.createElement('li');
        listItem.textContent = `add_CArt:${event.type},Description: ${description}, item: ${Methodname},model: ${carname},company: ${company} `;
        logList.appendChild(listItem);

        
        alert(` ${Methodname}: ${description}:${carname}:${company}`);
    }
};


const Button1={};
const Button2 ={};
const Button3={} ;

const boundLogEvent3 = Logger.logEvent.bind(Button3, { type: 'click' },'using bind  method', 'Car','Thar', 'Mahendra');


document.getElementById('button1').addEventListener('click', function (event) {
   
    Logger.logEvent.call(Button1, event, 'using call  method', 'Bus','Delux','Ashok leyland');
});

document.getElementById('button2').addEventListener('click', function (event) {
    
    Logger.logEvent.apply(Button2, [event, 'Using apply method', 'Truck','SuperAce','TATA']);
});

document.getElementById('button3').addEventListener('click', function () {
    
    boundLogEvent3();
});
