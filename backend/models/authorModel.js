import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
    {
      bio: {
        type: String,
        default: null, 
      },
      links: [
        {
          label: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
            match: /^https?:\/\/(www\.)?[\w\-]+\.[a-z]{2,6}(\/[\w\-]*)*\/?$/i, 
          },
        },
      ],
    },
    { timestamps: true }
  );


const AuthorBio = mongoose.model("AuthorBio", authorSchema);
export default AuthorBio;