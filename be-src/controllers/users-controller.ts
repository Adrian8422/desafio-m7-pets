////controller de que llega los 3 datos correctos
import { User } from "../models/user";
import { cloudinary } from "../lib/cloudinary";
import { where } from "sequelize/types";
export async function updateProfile(userId, updateData) {
  if (updateData.pictureURL) {
    const imagen = await cloudinary.uploader.upload(updateData.pictureURL, {
      resource_type: "image",
      discard_original_filename: true,
      width: 1000,
    });
    const updateDataComplete = {
      fullname: updateData.fullname,
      bio: updateData.bio,
      pictureURL: imagen.secure_url,
    };
    await User.update(updateDataComplete, {
      where: {
        id: userId,
      },
    });
    return updateDataComplete;
  } else {
    console.error("no hay img adjunta");
  }
}
export async function getProfile(userId) {
  const userProfile = await User.findByPk(userId);
  return userProfile;
}
