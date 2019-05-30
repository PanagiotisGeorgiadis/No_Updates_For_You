const { execSync } = require("child_process");

const minute = 1000 * 60;
const speed  = {
    slow   : 30 * minute,
    normal : 15 * minute,
    fast   : 5 * minute,
    insane : 1 * minute
};


let duration = speed.insane;

switch (process.argv[2]) {
    case "slow":
        duration = speed.slow;
        console.log("Slow mode detected!\n");
        break;
    case "normal":
        duration = speed.normal;
        console.log("Normal mode detected!\n");
        break;
    case "fast":
        duration = speed.fast;
        console.log("Fast mode detected!\n");
        break;
    case "insane":
        duration = speed.insane;
        console.log("Insane mode detected!\n");
        break;
    default:
        console.log("No flag detected. Script will run every 15 minutes.\n");
}


setInterval(() => {
    try {
        execSync("shutdown -a");
        console.log("Successfully prevented shutdown! :D");
    } catch (err) {
        // There is no point in printing an extra message for that error.
    }
}, duration);


console.log("Started no-updates-for-u!\n");
