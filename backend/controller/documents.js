const Documents = require('../models/documents');

module.exports.getAllDocuments = async (req, res) => {
    try {
        const documents = await Documents.find({});
        if (!documents || documents.length === 0) {
            return res.status(404).json({ success: false, message: 'No documents found' });
        }
        res.json({ success: true, data: documents });
    } catch (err) {
        return res.json({ success: false, message: err.message });
    }
}

module.exports.createDocument = async (req, res) => {
    try {
        const {links} = req.body;
        const document = new Documents(links);
        await document.save();
        res.status(201).json({ success: true, data: document });
    } catch (err) {
        return res.json({ success: false, message: err.message });
    }
}