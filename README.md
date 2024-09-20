
#### install latest versions of dependencies
```
npm i cors dotenv express mongoose morgan multer
```
<h1>
Example of MULTER usage:
</h1>

<code>

---------------
### Post Schema

  const PostSchema = new Schema({
  username: {type: String, default: "Anonymous"},
  title: {type: String, uppercase: true, required: [true, "Title required!"]},
  body: {type: String, required: [true, "Post Content required!"]},
  image : {type: String} 
});
-----------
### When creating new post 

const postsCreate = async (req, res) => {
  try {
    if(req.file){
      console.log(req.file)
      req.body.file = req.file.path
    }
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
</code>