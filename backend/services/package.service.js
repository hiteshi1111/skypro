const Package = require('../schemas/package.schema');

let service = {};
service.getPackages = getPackages

async function getPackages(){
  try {
      const addon = await Package.find({isActive: true, isAddon: false})
      .then(packages => packages.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)));

      const isaddon = await Package.find({isActive: true, isAddon: true})
      .then(packages => packages.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)));

      const data = {
        addon: addon,
        isaddon: isaddon
      }
      
      return data
  } catch (err) {
      return Promise.reject({error: 'Unable to get Blogs. Try again later!'});
  }
}

module.exports = service;