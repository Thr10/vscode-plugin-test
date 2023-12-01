const { writeFile } = require('fs');

let genCount = 0;
const jsonContent = {
    log: []
}
const path = './log.fuzz.json';

const w =  (content) => {
    writeFile(path, JSON.stringify(content, null, 2), (error) => {
        if (error) {
          console.log('An error has occurred ', error);
          return;
        }
        console.log('Data written successfully to disk');
      });
}



const interval = setInterval(() => {
    if (genCount  === 10) return clearInterval(interval);
    genCount++;
    jsonContent.log.push(`${genCount} - ${Math.random()} - ${new Date().getTime()}`);
    w(jsonContent)
}, 1000)


