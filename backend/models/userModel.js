import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    isAuthor: {
      type: Boolean,
      required: true,
      default: false,
    },
    authorBio: {
      bio: {
        type: String,
        default: null,
      },
      links: [
        {
          label: {
            type: String,
            required: false,
          },
          url: {
            type: String,
            required: false,
            match: /^https?:\/\/(www\.)?[\w\-]+\.[a-z]{2,6}(\/[\w\-]*)*\/?$/i,
          },
        },
      ],
    },
    avatar: {
      type: String,
      default: null,
    },
    publishedBooks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Hash the password before saving it to the database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 8);
  next();
});

// Compare password method
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
