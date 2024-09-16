// Logger object with a method to log event details
const Logger = {
    logEvent: function (event, description, loggerName) {
        const logList = document.getElementById('logList');
        const listItem = document.createElement('li');
        listItem.textContent = `Event: ${event.type}, Description: ${description}, Logger: ${loggerName}`;
        logList.appendChild(listItem);

        // Alert message to indicate which method was used
        alert(`Logged using ${loggerName}: ${description}`);
    }
};

// Context objects for different buttons
const context1 = { loggerName: 'Logger 1' };
const context2 = { loggerName: 'Logger 2' };
const context3 = { loggerName: 'Logger 3' };

// Bound logEvent method using bind
const boundLogEvent3 = Logger.logEvent.bind(context3, { type: 'click' }, 'Button 3 clicked', 'Logger 3');

// Event listeners for the buttons
document.getElementById('button1').addEventListener('click', function (event) {
    // Using call method
    Logger.logEvent.call(context1, event, 'Button 1 clicked', 'Logger 1');
});

document.getElementById('button2').addEventListener('click', function (event) {
    // Using apply method
    Logger.logEvent.apply(context2, [event, 'Button 2 clicked', 'Logger 2']);
});

document.getElementById('button3').addEventListener('click', function () {
    // Using the bound method created with bind
    boundLogEvent3();
});
