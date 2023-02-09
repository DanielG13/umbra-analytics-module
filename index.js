var macaddress = require('macaddress');

export async function NavigationData() {
    macaddress.all().then(function (all) {
        console.log(JSON.stringify(all, null, 2));
      });
}