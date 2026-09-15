const tableBody = document.getElementById('tableBody');
const categoryBadge = document.getElementById('categoryBadge');
const addBtn = document.getElementById('addBtn');
const categoryInput = document.getElementById('categoryInput');

// 1. Mandatory Technique: Function to update badge based on row count
function updateCategoryBadge() {
  const rowCount = tableBody.querySelectorAll('tr').length;
  categoryBadge.textContent = Active Categories: ${rowCount};
}

// 2. Add New Category Row
addBtn.addEventListener('click', () => {
  const categoryName = categoryInput.value.trim();
  if (!categoryName) return;

  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${categoryName}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  // Attach delete listener directly to the new row's delete button
  newRow.querySelector('.delete-btn').addEventListener('click', () => {
    newRow.remove();
    updateCategoryBadge(); // Recalculate row count after deletion
  });

  tableBody.appendChild(newRow);
  categoryInput.value = ''; // Clear input field

  updateCategoryBadge(); // Recalculate row count after addition
});

// Initialize counter on load
updateCategoryBadge();
