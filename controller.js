const model = require('./model')
const sendMail = require('./nodemailer')


const sendBodyMail = async (req, res) => {
    try {
        const { text } = req.body; // Destructure 'text' directly from req.body

        // Create a new instance of your model with the text
        const newEntry = new model({
            text: text // Assign 'text' from the request body to the 'text' field of the model
        });

        // Save the new entry to your database
        await newEntry.save();

        // Prepare the email data
        const emailData = {
            email: process.env.user, // Use process.env.myMail for the recipient email address
            subject: "User Text",
            html: text // Use the 'text' directly as HTML content
        };

        // Send the email
        await sendMail(emailData);

        // Send a response indicating success
        res.status(200).json({ message: 'Text sent successfully' });
    } catch (error) {
        // If an error occurs, send an error response
        res.status(500).json({ error: error.message });
    }
};

module.exports = sendBodyMail