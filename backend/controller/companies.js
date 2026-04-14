const Company = require('../models/companies');

module.exports.getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find({});
        if (!companies || companies.length === 0) {
            return res.status(404).json({ success: false, message: 'No companies found' });
        }
        res.json({ success: true, data: companies });
    } catch (err) {
        return res.json({ success: false, message: err.message });
    }
}

module.exports.getCompanyById = async (req, res) => {
    const companyId = req.params.id;
    try {
        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({ success: false, message: 'Company not found' });
        }
        res.json({ success: true, data: company });
    } catch (err) {
        return res.json({ success: false, message: err.message });
    }
}

module.exports.createCompany = async (req, res) => {
    try {
        const newCompany = new Company({
            company_name: req.body.company_name,
            company_logo: req.file ? req.file.path : null // Handle file upload
        });
        await newCompany.save();
        res.status(201).json({ success: true, data: newCompany });
    } catch (err) {
        return res.json({ success: false, message: err.message });
    }
};

module.exports.updateCompany = async (req, res) => {
    const companyId = req.params.id;
    try {
        const updatedCompany = await Company.findByIdAndUpdate(companyId, {
            company_name: req.body.company_name,
            company_logo: req.file ? req.file.path : null // Handle file upload
        }, { new: true, runValidators: true });
        
        if (!updatedCompany) {
            return res.status(404).json({ success: false, message: 'Company not found' });
        }
        res.json({ success: true, data: updatedCompany });
    } catch (err) {
        return res.json({ success: false, message: err.message });
    }
};

module.exports.deleteCompany = async (req, res) => {
    const companyId = req.params.id;
    try {
        const deletedCompany = await Company.findByIdAndDelete(companyId);
        if (!deletedCompany) {
            return res.status(404).json({ success: false, message: 'Company not found' });
        }
        res.json({ success: true, message: 'Company deleted successfully' });
    } catch (err) {
        return res.json({ success: false, message: err.message });
    }
};
