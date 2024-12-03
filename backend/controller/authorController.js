import User from "../models/userModel.js";

export const addAuthorBio = async (req, res) => {
  const { bio, link: updatedLinks } = req.body;

  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (bio) {
      user.authorBio.bio = bio;
    }
    if (updatedLinks) {
      // Validation will be handled by the schema
      user.authorBio.links = updatedLinks;
    }

    await user.save();
    res
      .status(200)
      .json({
        message: "Author bio added successfully",
        authorBio: user.authorBio,
      });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "One or more links have an invalid URL format." });
    }
    return res.status(500).json({ message: "Internal server error", error });
  }
};
