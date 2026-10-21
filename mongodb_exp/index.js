const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model("User", userSchema);

async function main() {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/practical"
    );
    console.log("MongoDB connected");

    // Create
    const user = await User.create({
      name: "Rahul",
      email: "rahul@gmail.com",
      age: 20
    });
    console.log("User inserted");

    // Read
    console.log(await User.find());

    // Update
    await User.updateOne(
      { _id: user._id },
      { $set: { age: 21 } }
    );
    console.log("After update:");
    console.log(await User.findById(user._id));

    // Delete
    await User.deleteOne({ _id: user._id });
    console.log("User deleted");

  } catch (error) {
    console.log(error.message);
  } finally {
    await mongoose.disconnect();
  }
}

main();