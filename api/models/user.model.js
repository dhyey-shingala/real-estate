import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
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
    avatar: {
      type: String,
      default:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0pjT-wCf5i4P6bVCL307hwAAAA%26pid%3DApi&f=1&ipt=ddec6be26b5d7f1c12b226dd7af1cd20a12389a663c6315305a0e85c72964d63&ipo=images",
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;