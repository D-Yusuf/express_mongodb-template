
#### install latest versions of dependencies
```
npm i cors dotenv express mongoose morgan multer
```
<h1>
Example of MULTER usage:
</h1>

### Post Schema
<code>

  const PostSchema = new Schema({
  username: {type: String, default: "Anonymous"},
  title: {type: String, uppercase: true, required: [true, "Title required!"]},
  body: {type: String, required: [true, "Post Content required!"]},
  image : {type: String} 
});
</code>

### When creating new post (controller)
<code>
const postsCreate = async (req, res) => {
  try {
    if(req.file){
      console.log(req.file)
      req.body.image = req.file.path
    }
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
</code>

### When creating new post (router)
<code>
router.post('/', upload.single("image"), postsCreate);
----------
const photoCount = 23
router.post('/', upload.array("photos", photoCount), postsCreate);
</code>
