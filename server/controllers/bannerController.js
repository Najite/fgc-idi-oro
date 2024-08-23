const Banner = require("../models/Banner");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// function to help with image upload
const uploadImage = (file) => {
    const uploadDir = path.join(__dirname, "../uploads");
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
    }

    const ext = path.extname(file.name);
    const filename = `${uuidv4()}${ext}`;
    const filepath = path.join(uploadDir, filename);

    return new Promise((resolve, reject) => {
        file.mv(filepath, (err) => {
            if (err) {
                return reject(err);
            }
            resolve(`/uploads/${filename}`);
        });
    });
};


// create banner
const createBanner = async (req, res) => {
    try {
        if (!req.files || !req.files.image) {
            return res.status(400).json({
                success: false,
                message: "no image file uploaded"
            });
        }

        const imageUrl = await uploadImage(req.files.image);

        const { title } = req.body

        const newBanner = new Banner({
            title,
            imageUrl
        });

        await newBanner.save();

        res.status(201).json({
            success: true,
            data: newBanner
        })
    } catch (error) {
        console.log("error creating banner:", error);
        res.status(400).json({
            success: false,
            message: "failed to create banner",
            error: error.message
        })
    }
};


// listing of banner created
const getAllBanner = async (req, res) => {
    try {
        const banners = await Banner.find();
        res.status(200).json({
            success: true,
            data: banners,
        });
    } catch (error) {
        console.log("error creating banner", error);
        res.status(400).json({
            success: false,
            message: "failed to fetch banner",
            error: error.message
        });
    };
};

// delete banner
const deleteBanner = async (req, res) => {
    try {
        const banner = await Banner.findById(req.params.id);

        if (!banner) {
            return res.status(404).json({
                success: false,
                message: "banner not found"
            });
        }

        await Banner.findByIdAndDelete(banner);

        // delete associated image file
        if (banner.imageUrl) {
            const imagePath = path.join(__dirname, "..", banner.imageUrl);

            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.log(`error detecting image: ${err.message}`)
                }
            });
        }

        res.status(200).json({
            success: true,
            message: "banner deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}





module.exports = {
    getAllBanner,
    createBanner,
    deleteBanner
}