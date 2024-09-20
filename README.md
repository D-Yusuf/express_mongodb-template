
#### install latest versions of dependencies
```
npm i cors dotenv express mongoose morgan multer
```
<h1>
Example of MULTER usage:
</h1>
```
  const PostSchema = new Schema({
  username: {type: String, default: "Anonymous"},
  title: {type: String, uppercase: true, required: [true, "Title required!"]},
  body: {type: String, required: [true, "Post Content required!"]},
  image : {type: String} 
});
```