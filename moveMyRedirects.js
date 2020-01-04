const fs = require("fs");

fs.copyFile("_redirects", "out/_redirects", err => {
  if (err) throw err;
});
