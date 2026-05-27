import mongoose from "mongoose";

const QueriesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    companyName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    brands: { type: [String], default: [] },
    products: { type: [String], default: [] },
    message: { type: String, default: "" },
  },
  { timestamps: true }
);
const queriesModel =
  mongoose.models.Queries || mongoose.model("Queries", QueriesSchema);

const EmailSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
  },
  { timestamps: true }
);
const emailModel =
  mongoose.models.Email || mongoose.model("Email", EmailSchema);

export { queriesModel, emailModel };
