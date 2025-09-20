const BASE_URL = "https://bookvault-backend-1.onrender.com";


// 🔐 Admin Login
export async function loginAdmin(username, password) {
  try {
    const res = await fetch(`${BASE_URL}/admin/admin-login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    return await res.json();
  } catch (err) {
    console.error("❌ loginAdmin error:", err);
    return { status: "error", message: "Server unreachable" };
  }
}

// 📚 Book APIs
export async function addBook(bookData) {
  try {
    const res = await fetch(`${BASE_URL}/books/add-book`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookData),
    });
    return await res.json();
  } catch (err) {
    console.error("❌ addBook error:", err);
    return { status: "error" };
  }
}

export async function getBooks() {
  try {
    const res = await fetch(`${BASE_URL}/books/get-books`);
    if (!res.ok) throw new Error(`Status: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("❌ getBooks error:", err);
    return [];
  }
}

// 👤 Member APIs
export async function registerMember(memberData) {
  try {
    const res = await fetch(`${BASE_URL}/members/register-member`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(memberData),
    });
    return await res.json();
  } catch (err) {
    console.error("❌ registerMember error:", err);
    return { status: "error" };
  }
}

export async function getMembers() {
  try {
    const res = await fetch(`${BASE_URL}/members/get-members`);
    return await res.json();
  } catch (err) {
    console.error("❌ getMembers error:", err);
    return [];
  }
}

// 🔄 Transactions
export async function issueBook(book_id, member_id, issue_date, expected_return_date) {
  try {
    const res = await fetch(`${BASE_URL}/transactions/issue-book`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ book_id, member_id, issue_date, expected_return_date }),
    });
    return await res.json();
  } catch (err) {
    console.error("❌ issueBook error:", err);
    return { status: "error" };
  }
}

export async function returnBook(txn_id) {
  try {
    const res = await fetch(`${BASE_URL}/return-book`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ txn_id }),
    });
    return await res.json();
  } catch (err) {
    console.error("❌ returnBook error:", err);
    return { status: "error" };
  }
}

export async function getTransactions(date) {
  try {
    const res = await fetch(`${BASE_URL}/transactions/get-transactions?date=${date}`);
    if (!res.ok) throw new Error(`Status: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("❌ getTransactions error:", err);
    return [];
  }
}

export async function getMemberTransactions(memberId) {
  try {
    const res = await fetch(`${BASE_URL}/transactions/get-member-transactions?member_id=${memberId}`);
    if (!res.ok) throw new Error(`Status: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("❌ getMemberTransactions error:", err);
    return [];
  }
}

export async function getOverdueTransactions() {
  try {
    const res = await fetch(`${BASE_URL}/transactions/get-overdue-transactions`);
    if (!res.ok) throw new Error(`Status: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("❌ getOverdueTransactions error:", err);
    return [];
  }
}

export async function exportTransactionsCSV(date) {
  try {
    const res = await fetch(`${BASE_URL}/transactions/export-transactions-csv?date=${date}`);
    if (!res.ok) throw new Error(`CSV export failed`);
    return await res.text(); // CSV as plain text
  } catch (err) {
    console.error("❌ exportTransactionsCSV error:", err);
    return "";
  }
}

// 📊 Analytics
export async function getAnalytics() {
  try {
    const res = await fetch(`${BASE_URL}/analytics/get-analytics`);
    if (!res.ok) throw new Error(`Status: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("❌ getAnalytics error:", err);
    return { overdue_books: 0, active_members: 0, most_popular: "N/A" };
  }
}

// 📊 Dashboard Stats
export async function getDashboardStats() {
  const books = await getBooks();
  const members = await getMembers();
  const today = new Date().toISOString().split("T")[0];
  const transactions = await getTransactions(today);

  return {
    books: books.length,
    members: members.length,
    transactions: transactions?.length || 0,
  };
}
