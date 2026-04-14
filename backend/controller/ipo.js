const IPO = require('../models/ipo.js'); // Assuming you have an IPO model defined
const dashboard = require('../models/dashboard');

module.exports.getAllIpos = async(req, res) => {
    try{
        const ipos = await IPO.find({});
        if (!ipos || ipos.length === 0) {
            return res.status(404).json({ success: false, message: 'No IPOs found' });
        }
        res.json({success: true, data: ipos})
    } catch (err) {
        return res.json({ success: false, message: err.message });
    }
};

module.exports.getIpoById = async(req, res) => {
    const ipoId = req.params.id;
    try {
        const ipo = await IPO.findById(ipoId);
        if (!ipo) {
            return res.status(404).json({ success: false, message: 'IPO not found' });
        }
        res.json({ success: true, data: ipo });
    } catch (err) {
        return res.json({ success: false, message: err.message });
    }
}

module.exports.createIpo = async(req, res) => {
    try {
        const newIpo = new IPO(req.body);
        await newIpo.save();
        res.status(201).json({ success: true, data: newIpo });
    } catch (err) {
        return res.json({ success: false, message: err.message });
    }
};

module.exports.updateIpo = async(req, res) => {
    const ipoId = req.params.id;
    try {
        const updatedIpo = await IPO.findByIdAndUpdate(ipoId, req.body, { new: true, runValidators: true });
        if (!updatedIpo) {
            return res.status(404).json({ success: false, message: 'IPO not found' });
        }
        res.json({ success: true, data: updatedIpo });
    } catch (err) {
        return res.json({ success: false, message: err.message });
    }
};

module.exports.deleteIpo = async(req, res) => {
    const ipoId = req.params.id;
    try {
        const deletedIpo = await IPO.findByIdAndDelete(ipoId);
        if (!deletedIpo) {
            return res.status(404).json({ success: false, message: 'IPO not found' });
        }
        res.json({ success: true, message: 'IPO deleted successfully' });
    } catch (err) {
        return res.json({ success: false, message: err.message });
    }
};



// ...existing code...

// Cancel IPO (admin)
module.exports.cancelIPO = (req, res) => {
  const id = Number(req.params.id);
  const ipo = dashboard.cancel(id);
  if (!ipo) return res.status(404).json({ error: "IPO not found" });
  res.json(ipo);
};

// Subscribe to IPO
module.exports.subscribeIPO = (req, res) => {
  const id = Number(req.params.id);
  const { userId } = req.body;
  if (!userId) return res.status(400).json({ error: "User ID is required" });
  const ipo = dashboard.subscribe(id, userId);
  if (!ipo) return res.status(404).json({ error: "IPO not found" });
  res.json(ipo);
};

// Allot IPO
module.exports.allotIPO = (req, res) => {
  const id = Number(req.params.id);
  const ipo = dashboard.allot(id);
  if (!ipo) return res.status(404).json({ error: "IPO not found" });
  res.json(ipo);
};

