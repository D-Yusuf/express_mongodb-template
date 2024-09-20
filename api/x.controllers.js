const x = require("../models/xShema");















// REFRENCE ⬇️

// exports.postsCreate = async (req, res) => {
//     try {
//       if(req.file){
//         console.log(req.file)
//         req.body.file = req.file.path
//       }
//       const newPost = await Post.create(req.body);
//       res.status(201).json(newPost);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };
  
//   exports.postsDelete = async (req, res) => {
//     const { postId } = req.params;
//     try {
//       const foundPost = await Post.findById(postId);
//       if (foundPost) {
//         await foundPost.deleteOne();
//         res.status(204).end();
//       } else {
//         res.status(404).json({ message: "post not found" });
//       }
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };
  
//   exports.postsUpdate = async (req, res) => {
//     const { postId } = req.params;
//     try {
//       const foundPost = await Post.findById(postId);
//       if (foundPost) {
//         await foundPost.updateOne(req.body);
//         res.status(204).end();
//       } else {
//         res.status(404).json({ message: "post not found" });
//       }
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };
  
//   exports.postsGet = async (req, res) => {
//     try {
//       const posts = await Post.find();
//       res.json(posts);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };
  