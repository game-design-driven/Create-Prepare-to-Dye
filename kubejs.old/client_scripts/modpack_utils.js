// Priority: 100
function sortObjectByKey(obj) {
    if (!obj) return obj;
    if (typeof obj !== "object") return obj;
    const sortedKeys = Object.keys(obj).sort();
    const sortedObj = {};
  
    sortedKeys.forEach(key => {
        sortedObj[key] = obj[key];
    });
  
    return sortedObj;
  }
  