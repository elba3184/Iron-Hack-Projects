function findRoutes(routes) {
    var trackedArr=routes[0];
    for (var j=0; j< routes.length; ++j) {
    for (var i=1; i< routes.length; ++i){
      if (routes[i][0]==trackedArr[trackedArr.length-1]){
        trackedArr.push(routes[i][1]);
      }
      else if (routes[i][1]==trackedArr[0]){
        trackedArr.unshift(routes[i][0]);
      }
    }
    }
    return trackedArr.join(', ')
  }