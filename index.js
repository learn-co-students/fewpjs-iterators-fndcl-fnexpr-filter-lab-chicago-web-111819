// Code your solution here
function findMatching(drivers, stringDriver) {
    return drivers.filter((name) => 
        name.toLowerCase() === stringDriver.toLowerCase()
     );
}

function fuzzyMatch(drivers, stringDriver) {
    return drivers.filter((name) => 
        name[0].toLowerCase() === stringDriver[0].toLowerCase()
    );
}

function matchName(drivers, stringDriver) {
    return drivers.filter((driver) => 
        driver.name.toLowerCase() === stringDriver.toLowerCase()
    );
}