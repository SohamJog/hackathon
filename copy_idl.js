const fs = require("fs");
const blog_idl = require("./target/idl/solana_twitter_v1.json");

fs.writeFileSync("./app/src/idl.json", JSON.stringify(blog_idl, null, 2));