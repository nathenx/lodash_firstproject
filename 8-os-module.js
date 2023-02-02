const os = require('os')

// info about current user 
const user = os.userInfo()
console.log(user)

//method rerns sys uptime in secs
console.log (`the sys uptime is ${os.uptime()} seconds`)

const currentOS= {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS)