import React from "react";
import { Typography, Table, TableHead, TableRow, TableCell, TableBody, Button, Paper, Container } from '@mui/material';

const ExpenseTable = ({ expenseData, onDeleteExpense }) => {
  let expenseDataRow = null;

  if (Array.isArray(expenseData) && expenseData.length > 0) {
    expenseDataRow = expenseData.map((expense) => (
      <TableRow key={expense.id}>
        <TableCell>{expense.date}</TableCell>
        <TableCell>{expense.amount}</TableCell>
        <TableCell>{expense.selectedCategory}</TableCell>
        <TableCell>{expense.description}</TableCell>
        <TableCell>
          <Button
            variant="contained"
            color="error"
            onClick={() => onDeleteExpense(expense.id)}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
    ));
  } else {
    expenseDataRow = (
      <TableRow>
        <TableCell colSpan="5">
          <Typography style={{ textAlign: 'center' }}>No expenses recorded.</Typography>
        </TableCell>
      </TableRow>
    );
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" gutterBottom style={{ textAlign: 'center' }}>
        Expense History
      </Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{expenseDataRow}</TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default ExpenseTable;
