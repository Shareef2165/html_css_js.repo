// document.addEventListener('DOMContentLoaded', () => {
//     const expenseForm = document.getElementById('expense-form');
//     const budgetForm = document.getElementById('budget-form');
//     const expenseTable = document.getElementById('expense-table');
//     const filterCategory = document.getElementById('filter-category');
//     const searchInput = document.getElementById('search');

//     let expenses = [];
//     let budgets = {};

    
//     expenseForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const date = document.getElementById('expense-date').value;
//         const category = document.getElementById('expense-category').value;
//         const description = document.getElementById('expense-description').value;
//         const amount = parseFloat(document.getElementById('expense-amount').value);

//         const expense = { date, category, description, amount };
//         expenses.push(expense);
//         updateExpenseList();
//         expenseForm.reset();
//     });

    
//     budgetForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const category = document.getElementById('budget-category').value;
//         const amount = parseFloat(document.getElementById('budget-amount').value);

//         budgets[category] = amount;
//         updateFilterCategories();
//         budgetForm.reset();
//     });

    
//     function updateExpenseList() {
//         expenseTable.innerHTML = '';
//         expenses.forEach((expense, index) => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${expense.date}</td>
//                 <td>${expense.category}</td>
//                 <td>${expense.description}</td>
//                 <td>${expense.amount.toFixed(2)}</td>
//                 <td>
//                     <button onclick="editExpense(${index})">Edit</button>
//                     <button onclick="deleteExpense(${index})">Delete</button>
//                 </td>
//             `;
//             expenseTable.appendChild(row);
//         });
//     }

    
//     function updateFilterCategories() {
//         filterCategory.innerHTML = '<option value="">All Categories</option>';
//         Object.keys(budgets).forEach(category => {
//             const option = document.createElement('option');
//             option.value = category;
//             option.textContent = category;
//             filterCategory.appendChild(option);
//         });
//     }

    
//     window.deleteExpense = function(index) {
//         expenses.splice(index, 1);
//         updateExpenseList();
//     };

   
    
//     window.editExpense = function(index) {
//         const expense = expenses[index];
//         document.getElementById('expense-date').value = expense.date;
//         document.getElementById('expense-category').value = expense.category;
//         document.getElementById('expense-description').value = expense.description;
//         document.getElementById('expense-amount').value = expense.amount;

//         editIndex = index; 
//         expenseForm.querySelector('button[type="submit"]').textContent = 'Update Expense'; 
//     };
    
//     searchInput.addEventListener('input', filterExpenses);
//     filterCategory.addEventListener('change', filterExpenses);

//     function filterExpenses() {
//         const searchText = searchInput.value.toLowerCase();
//         const category = filterCategory.value;
//         const filteredExpenses = expenses.filter(expense => {
//             return (
//                 (expense.category.toLowerCase().includes(searchText) || 
//                  expense.description.toLowerCase().includes(searchText)) &&
//                 (category === '' || expense.category === category)
//             );
//         });

       
//         expenseTable.innerHTML = '';
//         filteredExpenses.forEach((expense, index) => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${expense.date}</td>
//                 <td>${expense.category}</td>
//                 <td>${expense.description}</td>
//                 <td>${expense.amount.toFixed(2)}</td>
//                 <td>
//                     <button onclick="editExpense(${index})">Edit</button>
//                     <button onclick="deleteExpense(${index})">Delete</button>
//                 </td>
//             `;
//             expenseTable.appendChild(row);
//         });
//     }
// });


document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const budgetForm = document.getElementById('budget-form');
    const expenseTable = document.getElementById('expense-table');
    const filterCategory = document.getElementById('filter-category');
    const searchInput = document.getElementById('search');
    const totalBudgetDisplay = document.getElementById('total-budget'); // Display total budget
    const categoryBudgetsDisplay = document.getElementById('category-budgets'); // Display category budgets

    let expenses = [];
    let budgets = {};
    let remainingBudgets = {};
    let editIndex = -1; // Track the index of the expense being edited

    // Handle expense form submission
    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const date = document.getElementById('expense-date').value;
        const category = document.getElementById('expense-category').value;
        const description = document.getElementById('expense-description').value;
        const amount = parseFloat(document.getElementById('expense-amount').value);

        const expense = { date, category, description, amount };

        if (editIndex === -1) {
            // Add new expense
            expenses.push(expense);
            updateCategoryBudget(category, -amount); // Reduce the budget of the category
        } else {
            // Update existing expense
            const previousAmount = expenses[editIndex].amount;
            const previousCategory = expenses[editIndex].category;
            expenses[editIndex] = expense;
            editIndex = -1; // Reset the edit index after updating
            expenseForm.querySelector('button[type="submit"]').textContent = 'Add Expense'; // Change button back to "Add Expense"

            // Adjust budgets if the category or amount was changed
            if (category === previousCategory) {
                updateCategoryBudget(category, previousAmount - amount); // Adjust within the same category
            } else {
                updateCategoryBudget(previousCategory, previousAmount); // Revert previous category budget
                updateCategoryBudget(category, -amount); // Reduce new category budget
            }
        }

        updateExpenseList();
        expenseForm.reset();
    });

    // Handle budget form submission
    budgetForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const category = document.getElementById('budget-category').value;
        const amount = parseFloat(document.getElementById('budget-amount').value);

        budgets[category] = amount; // Set or update the budget for the category
        remainingBudgets[category] = amount; // Initialize remaining budget
        updateFilterCategories();
        updateTotalBudget(); // Update the total budget allocation
        updateCategoryBudgetsDisplay(); // Update display of individual category budgets
        budgetForm.reset();
    });

    // Update the expense list
    function updateExpenseList() {
        expenseTable.innerHTML = '';
        expenses.forEach((expense, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${expense.date}</td>
                <td>${expense.category}</td>
                <td>${expense.description}</td>
                <td>${expense.amount.toFixed(2)}</td>
                <td>
                    <button onclick="editExpense(${index})">Edit</button>
                    <button onclick="deleteExpense(${index})">Delete</button>
                </td>
            `;
            expenseTable.appendChild(row);
        });
    }

    // Update the filter categories
    function updateFilterCategories() {
        filterCategory.innerHTML = '<option value="">All Categories</option>';
        Object.keys(budgets).forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            filterCategory.appendChild(option);
        });
    }

    // Calculate and update the total budget allocation
    function updateTotalBudget() {
        const totalBudget = Object.values(budgets).reduce((acc, amount) => acc + amount, 0);
        totalBudgetDisplay.textContent = `Total Budget Allocation: $${totalBudget.toFixed(2)}`;
    }

    // Update and display category-wise budgets
    function updateCategoryBudgetsDisplay() {
        categoryBudgetsDisplay.innerHTML = ''; // Clear previous display
        for (const category in budgets) {
            const remaining = remainingBudgets[category] || 0;
            const div = document.createElement('div');
            div.textContent = `${category}: Allocated $${budgets[category].toFixed(2)}, Remaining $${remaining.toFixed(2)}`;
            categoryBudgetsDisplay.appendChild(div);
        }
    }

    // Update budget for a specific category
    function updateCategoryBudget(category, amount) {
        if (remainingBudgets[category] !== undefined) {
            remainingBudgets[category] += amount; // Reduce or increase the remaining budget
            updateCategoryBudgetsDisplay(); // Update the display to reflect changes
        }
    }

    // Delete expense
    window.deleteExpense = function(index) {
        const expense = expenses[index];
        updateCategoryBudget(expense.category, expense.amount); // Refund the budget on deletion
        expenses.splice(index, 1);
        updateExpenseList();
    };

    // Edit expense
    window.editExpense = function(index) {
        const expense = expenses[index];
        document.getElementById('expense-date').value = expense.date;
        document.getElementById('expense-category').value = expense.category;
        document.getElementById('expense-description').value = expense.description;
        document.getElementById('expense-amount').value = expense.amount;

        editIndex = index; // Set the edit index to the current expense index
        expenseForm.querySelector('button[type="submit"]').textContent = 'Update Expense'; // Change button to "Update Expense"
    };

    // Search and filter functionality
    searchInput.addEventListener('input', filterExpenses);
    filterCategory.addEventListener('change', filterExpenses);

    function filterExpenses() {
        const searchText = searchInput.value.toLowerCase();
        const category = filterCategory.value;
        const filteredExpenses = expenses.filter(expense => {
            return (
                (expense.category.toLowerCase().includes(searchText) ||
                    expense.description.toLowerCase().includes(searchText)) &&
                (category === '' || expense.category === category)
            );
        });

        // Update list based on filters
        expenseTable.innerHTML = '';
        filteredExpenses.forEach((expense, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${expense.date}</td>
                <td>${expense.category}</td>
                <td>${expense.description}</td>
                <td>${expense.amount.toFixed(2)}</td>
                <td>
                    <button onclick="editExpense(${index})">Edit</button>
                    <button onclick="deleteExpense(${index})">Delete</button>
                </td>
            `;
            expenseTable.appendChild(row);
        });
    }
});
