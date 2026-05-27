import { queriesModel, emailModel } from "../models/queryModel.js";
import sendMail from "../routes/sendMailRoute.js";

const queryPostController = async (req, res) => {
  try {
    const {
      name,
      companyName,
      email,
      phone,
      location,
      brands,
      products,
      message,
    } = req.body;

    if (!name || !companyName || !email || !phone || !location) {
      return res.status(400).json({
        message: "All required fields must be filled",
        success: false,
      });
    }

    const newQuery = new queriesModel({
      name: name.trim(),
      companyName: companyName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      location: location.trim(),
      brands: brands || [],
      products: products || [],
      message: message ? message.trim() : "",
    });

    const savedQuery = await newQuery.save();
    const logoUrl = "https://uisppl.com/uisppl.webp";
    try {
      await sendMail({
        from: process.env.GMAIL_USERNAME,
        to: "info@uisppl.com",
        subject: "New Product Inquiry | UISPPL",
        html: `
<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f0f9ff;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:#f0f9ff;">
      <tr>
        <td>
          <!-- Header -->
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);box-shadow:0 4px 6px rgba(0,0,0,0.08);border-bottom:3px solid #0ea5e9;">
            <tr>
              <td align="center" style="padding:32px 16px;">
                <img src="${logoUrl}" alt="UISPPL Logo" style="width:180px;height:auto;margin-bottom:6px;" />
              </td>
            </tr>
          </table>

          <!-- Content -->
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:#f0f9ff;">
            <tr>
              <td style="padding:24px 16px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;margin:0 auto;background:#fff;border-radius:16px;box-shadow:0 10px 25px rgba(12,74,110,0.08);border:1px solid #e0f2fe;">
                  <tr>
                    <td style="padding:32px;">
                      <div style="font-family:Segoe UI,Arial,sans-serif;font-size:20px;color:#0c4a6e;font-weight:700;margin:0 0 24px 0;border-bottom:3px solid #0ea5e9;padding-bottom:12px;letter-spacing:0.3px;">Client Information</div>

                      <!-- Name Section -->
                      <div style="margin-bottom:18px;">
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:12px;color:#0369a1;font-weight:700;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.8px;">Full Name</div>
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:16px;color:#111827;font-weight:600;padding:10px 0;border-bottom:2px solid #e0f2fe;">${name}</div>
                      </div>

                      <!-- Company Section -->
                      <div style="margin-bottom:18px;">
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:12px;color:#0369a1;font-weight:700;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.8px;">Company Name</div>
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:16px;color:#111827;font-weight:600;padding:10px 0;border-bottom:2px solid #e0f2fe;">${companyName}</div>
                      </div>

                      <!-- Email Section -->
                      <div style="margin-bottom:18px;">
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:12px;color:#0369a1;font-weight:700;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.8px;">Email Address</div>
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:16px;color:#0ea5e9;font-weight:600;padding:10px 0;border-bottom:2px solid #e0f2fe;">${email}</div>
                      </div>

                      <!-- Phone Section -->
                      <div style="margin-bottom:18px;">
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:12px;color:#0369a1;font-weight:700;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.8px;">Phone Number</div>
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:16px;color:#111827;font-weight:600;padding:10px 0;border-bottom:2px solid #e0f2fe;">${phone}</div>
                      </div>

                      <!-- Location Section -->
                      <div style="margin-bottom:18px;">
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:12px;color:#0369a1;font-weight:700;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.8px;">Location</div>
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:16px;color:#111827;font-weight:600;padding:10px 0;border-bottom:2px solid #e0f2fe;">${location}</div>
                      </div>

                      <!-- Brands Section -->
                      ${
                        brands && brands.length > 0
                          ? `
                      <div style="margin-bottom:18px;">
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:12px;color:#0369a1;font-weight:700;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.8px;">Interested Brands</div>
                        <div style="background:linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);border:1px solid #bae6fd;border-radius:10px;padding:16px;box-shadow:inset 0 2px 4px rgba(12,74,110,0.05);">
                          ${brands
                            .map(
                              (brand) =>
                                `<span style="display:inline-block;background:linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%);color:#fff;padding:6px 16px;margin:4px;border-radius:20px;font-family:Segoe UI,Arial,sans-serif;font-size:13px;font-weight:600;box-shadow:0 2px 4px rgba(12,74,110,0.3);">${brand}</span>`
                            )
                            .join("")}
                        </div>
                      </div>
                      `
                          : ""
                      }

                      <!-- Products Section -->
                      ${
                        products && products.length > 0
                          ? `
                      <div style="margin-bottom:18px;">
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:12px;color:#0369a1;font-weight:700;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.8px;">Interested Products</div>
                        <div style="background:linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);border:1px solid #bae6fd;border-radius:10px;padding:16px;box-shadow:inset 0 2px 4px rgba(12,74,110,0.05);">
                          ${products
                            .map(
                              (product) =>
                                `<div style="font-family:Segoe UI,Arial,sans-serif;font-size:14px;color:#111827;padding:8px 0;border-bottom:1px solid #bae6fd;margin-bottom:6px;font-weight:500;">• ${product}</div>`
                            )
                            .join("")}
                        </div>
                      </div>
                      `
                          : ""
                      }

                      <!-- Message Section -->
                      ${
                        message && message.trim()
                          ? `
                      <div>
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:12px;color:#0369a1;font-weight:700;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.8px;">Project Requirements</div>
                        <div style="background:linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);border:1px solid #bae6fd;border-radius:10px;padding:18px;font-family:Segoe UI,Arial,sans-serif;font-size:15px;color:#111827;line-height:1.7;box-shadow:inset 0 2px 4px rgba(12,74,110,0.05);">
                          ${message}
                        </div>
                      </div>
                      `
                          : ""
                      }
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <!-- Footer -->
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);box-shadow:0 -4px 6px rgba(0,0,0,0.08);border-top:3px solid #0ea5e9;">
            <tr>
              <td align="center" style="padding:28px 16px;">
                <img src="${logoUrl}" alt="UISPPL Logo" style="width:160px;height:auto;margin-bottom:12px;" />
                <div style="font-family:Segoe UI,Arial,sans-serif;font-size:13px;color:#475569;margin-top:8px;letter-spacing:0.3px;font-weight:600;">Your Trusted Industrial Solutions Partner</div>
                <div style="font-family:Segoe UI,Arial,sans-serif;font-size:11px;color:#64748b;margin-top:8px;">Automated notification. Please do not reply.</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
        `,
        text: `NEW PRODUCT INQUIRY | UISPPL

Client Information
------------------
Name: ${name}
Company: ${companyName}
Email: ${email}
Phone: ${phone}
Location: ${location}

${
  brands && brands.length > 0
    ? `Interested Brands:\n${brands.join(", ")}\n\n`
    : ""
}
${
  products && products.length > 0
    ? `Interested Products:\n${products.join("\n")}\n\n`
    : ""
}
${message && message.trim() ? `Project Requirements:\n${message}\n\n` : ""}
UISPPL - Your Trusted Industrial Solutions Partner`,
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

    res.status(201).json({
      message: "Query received and notification sent successfully",
      success: true,
      data: {
        id: savedQuery._id,
        name: savedQuery.name,
        companyName: savedQuery.companyName,
        email: savedQuery.email,
      },
    });
  } catch (err) {
    console.error("Controller error:", err);
    res.status(500).json({
      message: "Failed to process query. Please try again.",
      success: false,
    });
  }
};

const queryEmailController = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        message: "Email is required",
        success: false,
      });
    }
    const newEmail = new emailModel({ email: email.trim() });
    await newEmail.save();
    const logoUrl = "https://uisppl.com/uisppl.webp";
    try {
      await sendMail({
        from: process.env.GMAIL_USERNAME,
        to: "info@uisppl.com",
        subject: "New Email Subscription | UISPPL",
        html: `
<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f0f9ff;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:#f0f9ff;">
      <tr>
        <td>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);box-shadow:0 4px 6px rgba(0,0,0,0.08);border-bottom:3px solid #0ea5e9;">
            <tr>
              <td align="center" style="padding:32px 16px;">
                <img src="${logoUrl}" alt="UISPPL Logo" style="width:180px;height:auto;margin-bottom:6px;" />
              </td>
            </tr>
          </table>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:#f0f9ff;">
            <tr>
              <td style="padding:24px 16px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;margin:0 auto;background:#fff;border-radius:16px;box-shadow:0 10px 25px rgba(12,74,110,0.08);border:1px solid #e0f2fe;">
                  <tr>
                    <td style="padding:32px;">
                      <div style="font-family:Segoe UI,Arial,sans-serif;font-size:20px;color:#0c4a6e;font-weight:700;margin:0 0 24px 0;border-bottom:3px solid #0ea5e9;padding-bottom:12px;letter-spacing:0.3px;">New Email Subscription</div>
                      <div style="margin-bottom:18px;">
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:12px;color:#0369a1;font-weight:700;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.8px;">Email Address</div>
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:16px;color:#0ea5e9;font-weight:600;padding:10px 0;border-bottom:2px solid #e0f2fe;">${email}</div>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);box-shadow:0 -4px 6px rgba(0,0,0,0.08);border-top:3px solid #0ea5e9;">
            <tr>
              <td align="center" style="padding:28px 16px;">
                <img src="${logoUrl}" alt="UISPPL Logo" style="width:160px;height:auto;margin-bottom:12px;" />
                <div style="font-family:Segoe UI,Arial,sans-serif;font-size:13px;color:#475569;margin-top:8px;letter-spacing:0.3px;font-weight:600;">Your Trusted Industrial Solutions Partner</div>
                <div style="font-family:Segoe UI,Arial,sans-serif;font-size:11px;color:#64748b;margin-top:8px;">Automated notification. Please do not reply.</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
        `,
        text: `NEW EMAIL SUBSCRIPTION | UISPPL

Email: ${email}

UISPPL - Your Trusted Industrial Solutions Partner`,
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

    res.status(201).json({
      message: "Email saved and notification sent successfully",
      success: true,
      data: { email: newEmail.email },
    });
  } catch (err) {
    console.error("Controller error:", err);
    res.status(500).json({
      message: "Failed to process email. Please try again.",
      success: false,
    });
  }
};

export { queryPostController, queryEmailController };
