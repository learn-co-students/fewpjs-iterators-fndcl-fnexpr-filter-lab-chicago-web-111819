
/**
 * 
 * @description Case-insensitively matches strings.
 * @param {Array<String>} drivers Available drivers' names.
 * @param {String} searchTerm What to filter {drivers} on.
 * @returns The matching list of drivers.
 */
function findMatching(drivers, searchTerm) {
  let foundDrivers = drivers.filter(driver => {
    return driver.toLocaleLowerCase() === searchTerm.toLocaleLowerCase();
  });
  return foundDrivers;
}

/**
 * 
 * @description Partially matches substrings
 * @param {Array<String>} drivers Available drivers' names.
 * @param {String} searchTerm What to filter {drivers} on.
 * @returns All drivers whose names begin with the provided letters.
 */
function fuzzyMatch(drivers, searchTerm) {
  
}

/**
 * 
 * @description Matches object values to a provided string
 * @param {Array<String>} drivers Available drivers' names.
 * @param {String} searchTerm What to filter {drivers} on.
 * @returns Each driver object whose name property matches the provided string.
 */
function matchName(drivers, searchTerm) {
  
}

