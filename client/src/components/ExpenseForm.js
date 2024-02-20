import React, { useState } from "react";
import { TextField, Button, Typography, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const ExpenseForm = ({ onAddExpense }) => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [description, setDescription] = useState("");
  const [formValid, setFormValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !amount || !selectedCategory || !description) {
      setFormValid(false);
      return;
    }

    const expense = {
      id: Math.random(),
      date,
      amount,
      selectedCategory,
      description,
    };

    onAddExpense(expense);

    setDate("");
    setAmount("");
    setSelectedCategory("");
    setDescription("");
    setFormValid(true);
  };

  return (
    <Container maxWidth="sm">
       <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}> 
        Expense Tracker
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal" >
          <InputLabel htmlFor="date" >
           
          </InputLabel>
          <TextField
            onChange={(e) => setDate(e.target.value)}
            value={date}
            type="date"
            id="date"
            variant="outlined"
            
          />
        </FormControl>
              
        <FormControl fullWidth margin="normal">
                
        <InputLabel htmlFor="amount">Amount</InputLabel>
        <TextField
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            variant="outlined"
            InputProps={{ inputProps: { min: 1 } }}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            variant="outlined"
          >
            <MenuItem value="">Select a category</MenuItem>
            <MenuItem value="Income Source">Income Source</MenuItem>
            <MenuItem value="Fixed Expense">Fixed Expense</MenuItem>
            <MenuItem value="Variable Expense">Variable Expense</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="description">Description</InputLabel>
          <TextField
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="outlined"
          />
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        {!formValid && (
          <Typography color="error" variant="body1">
            Please fill out all fields.
          </Typography>
        )}
      </form>
    </Container>
  );
};

export default ExpenseForm;