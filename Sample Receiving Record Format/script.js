// Function to handle form submission and add a row to the table
function onFormSubmit() {
  event.preventDefault(); // Prevents the form from submitting and refreshing the page

  // Get the form input values
  const serialNo = document.getElementById('SerialNo').value;
  const dateOfReceipt = document.getElementById('DateofReceipt').value;
  const dateOfReportIssue = document.getElementById('DateofReportIssue').value;
  const ltrNo = document.getElementById('LTRNo').value;
  const partDescription = document.getElementById('PartDescription').value;
  const supplierName = document.getElementById('SupplierName').value;
  const partNo = document.getElementById('PartNo').value;
  const customerName = document.getElementById('CustomerName').value;
  const receivedBy = document.getElementById('Receivedby').value;
  const verifiedBy = document.getElementById('Verifiedby').value;
  const reportNo = document.getElementById('ReportNo').value;
  const urlNo = document.getElementById('UrlNo').value;

  // Validate form fields (add your validation logic here if needed)

  // Create a new row in the table
  const table = document.getElementById('storeList').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow(table.rows.length);

  // Add the form data to the new row
  const cells = [
    serialNo,
    dateOfReceipt,
    dateOfReportIssue,
    ltrNo,
    partDescription,
    supplierName,
    partNo,
    customerName,
    receivedBy,
    verifiedBy,
    reportNo,
    urlNo,
  ];

  for (let i = 0; i < cells.length; i++) {
    const cell = newRow.insertCell(i);
    cell.innerHTML = cells[i];
  }

  // Clear the form fields after submission
  document.getElementById('SerialNo').value = '';
  document.getElementById('DateofReceipt').value = '';
  document.getElementById('DateofReportIssue').value = '';
  document.getElementById('LTRNo').value = '';
  document.getElementById('PartDescription').value = '';
  document.getElementById('SupplierName').value = '';
  document.getElementById('PartNo').value = '';
  document.getElementById('CustomerName').value = '';
  document.getElementById('Receivedby').value = '';
  document.getElementById('Verifiedby').value = '';
  document.getElementById('ReportNo').value = '';
  document.getElementById('UrlNo').value = '';
}

// Function to delete the selected row from the table
function onDeleteRow() {
  const table = document.getElementById('storeList').getElementsByTagName('tbody')[0];
  const rows = table.getElementsByTagName('tr');

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const checkbox = row.querySelector('input[type="checkbox"]');

    if (checkbox.checked) {
      table.deleteRow(i);
      i--; // Decrement i to adjust for the deleted row
    }
  }
}

// Add an event listener to the "Delete Selected Rows" button
document.getElementById('deleteSelectedRowsBtn').addEventListener('click', onDeleteRow);

// You can add more JavaScript logic or functionality as per your requirements.
