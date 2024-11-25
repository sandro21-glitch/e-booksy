import User from "../models/userModel.js";

export const addAuthorBio = async (req, res) => {
  const { bio, links } = req.body;

  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    user.authorBio.bio = bio;
    user.authorBio.links.push(...links);

    await user.save();
    res.status(200).send({ message: "Author bio added successfully", user });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );

      const urlError = validationErrors.find((msg) =>
        msg.includes("Invalid URL format")
      );
      if (urlError) {
        return res
          .status(400)
          .send("One or more links have an invalid URL format.");
      }

      return res.status(400).send(validationErrors.join(", "));
    }

    res.status(500).send("Internal server error");
  }
};
