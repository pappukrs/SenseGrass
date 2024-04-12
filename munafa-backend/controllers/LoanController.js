const Loan = require("../models/Loans");

const createNewLoan = async (req, res) => {
    try {
        const { bank, loanAmount, duration } = req.body;
        const loan = new Loan({ bank, loanAmount, duration });
        const savedLoan = await loan.save();
        res.status(201).json(savedLoan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getLoansList = async (req, res) => {
    console.log("getLoansList")
    try {
        const loans = await Loan.find();
        res.json(loans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSingleLoan = async(req, res) => {
    let loan;
    try {
        loan = await Loan.findById(req.params.id);
        if (loan == null) {
            return res.status(404).json({ message: "Loan not found" });
        }
        return res.status(200).json(loan)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const updateLoan = async (req, res) => {
    const { loanId } = req.params;
    console.log(loanId)
    try {
        
        let loanData = await Loan.findById(loanId);
        
        
        if (req.body.bank != null) {
            loanData.bank = req.body.bank;
        }
        if (req.body.loanAmount != null) {
            loanData.loanAmount = req.body.loanAmount;
        }
        if (req.body.duration != null) {
            loanData.duration = req.body.duration;
        }
        
       
        const payment = {
            amountPaid: req.body.amount,
            time: Date.now() 
        };
        loanData.paid.push(payment);
        
        
        loanData.loanAmount = loanData.loanAmount - req.body.amount;
        loanData.paidAmount = req.body.amount;

      
        const updatedLoan = await loanData.save();
        res.json(updatedLoan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const deleteLoan = async (req, res) => {
    try {
        await res.loan.remove();
        res.json({ message: "Loan deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const InsertBulkLoan = async (req, res) => {
    try {
      const loans = req.body; // Array of loan objects
      const insertedLoans = await Loan.insertMany(loans);
      res.json(insertedLoans);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  



module.exports = {
    createNewLoan,
    getLoansList,
    getSingleLoan,
    updateLoan,
    deleteLoan,
    InsertBulkLoan
};
