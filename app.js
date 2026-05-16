// ═══════════════════════════════════════════════════════
//  EduVault — Student Study Portal
//  app.js
// ═══════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════
//  DATABASE — localStorage-based
// ═══════════════════════════════════════════════════════

const DB = {
  get(key) { try { return JSON.parse(localStorage.getItem('ev_' + key)) || null; } catch { return null; } },
  set(key, val) { localStorage.setItem('ev_' + key, JSON.stringify(val)); },
};

// ── SEED INITIAL DATA ──
function seedDB() {
  if (DB.get('seeded')) return;

  // Users - empty initially
  DB.set('users', []);

  // Schools - Kenyatta University Faculties
  DB.set('schools', [
    'Faculty of Engineering',
    'Faculty of Science',
    'Faculty of Business & Economics',
    'Faculty of Education',
    'Faculty of Health Sciences',
    'Faculty of Agriculture',
    'Faculty of Law',
    'Faculty of Arts & Social Sciences',
  ]);

  // Courses organized by Faculty
  DB.set('courses', {
    'Faculty of Engineering': [
      'BEng Civil Engineering', 'BEng Electrical Engineering', 'BEng Mechanical Engineering',
      'BEng Chemical Engineering', 'BEng Geotechnical Engineering'
    ],
    'Faculty of Science': [
      'BSc Computer Science', 'BSc Information Technology', 'BSc Information Security',
      'BSc Mathematics', 'BSc Physics', 'BSc Chemistry'
    ],
    'Faculty of Business & Economics': [
      'BBA Business Administration', 'BCom Accounting', 'BCom Finance', 'BSc Economics'
    ],
    'Faculty of Education': [
      'BSc Education - Mathematics', 'BSc Education - Science', 'BSc Education - English',
      'BSc Education - History', 'BSc Education - Geography'
    ],
    'Faculty of Health Sciences': [
      'BSc Nursing', 'BSc Pharmacy', 'BSc Health Sciences', 'BSc Public Health'
    ],
    'Faculty of Agriculture': [
      'BSc Agriculture', 'BSc Environmental Science', 'BSc Environmental Management',
      'BSc Soil Science'
    ],
    'Faculty of Law': [
      'LLB Law', 'Diploma in Paralegal Studies'
    ],
    'Faculty of Arts & Social Sciences': [
      'BSc Media & Communication', 'BSc Public Relations', 'BSc Journalism',
      'BSc Tourism Management', 'BSc Hospitality Management'
    ],
  });

  // Initialize empty users list for students
  if (!DB.get('users')) {
    DB.set('users', []);
  }

  // Units
  DB.set('units', {
    'BSc Computer Science': [
      'Introduction to Programming', 'Data Structures & Algorithms', 'Database Systems',
      'Operating Systems', 'Computer Networks', 'Software Engineering'
    ],
    'BSc Information Technology': [
      'IT Fundamentals', 'Web Development', 'Database Management', 'Network Administration'
    ],
    'BSc Software Engineering': [
      'Software Design Patterns', 'Agile Methodologies', 'Testing & QA', 'DevOps Practices'
    ],
    'BBA Business Administration': [
      'Principles of Management', 'Marketing Management', 'Business Law', 'Strategic Management'
    ],
    'BCom Accounting': [
      'Financial Accounting', 'Management Accounting', 'Taxation', 'Auditing'
    ],
    'BSc Economics': [
      'Microeconomics', 'Macroeconomics', 'Econometrics', 'Development Economics'
    ],
    'BEng Civil Engineering': [
      'Structural Analysis', 'Fluid Mechanics', 'Soil Mechanics', 'Construction Management'
    ],
    'BEng Electrical Engineering': [
      'Circuit Theory', 'Digital Electronics', 'Power Systems', 'Control Systems'
    ],
    'BEng Mechanical Engineering': [
      'Thermodynamics', 'Fluid Dynamics', 'Machine Design', 'Manufacturing Processes'
    ],
    'BSc Mathematics': [
      'Calculus I', 'Linear Algebra', 'Real Analysis', 'Numerical Methods'
    ],
    'BSc Physics': [
      'Classical Mechanics', 'Electromagnetism', 'Quantum Mechanics', 'Thermodynamics'
    ],
    'BSc Chemistry': [
      'Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Analytical Chemistry'
    ],
    'BSc Information Security': [
      'Cryptography', 'Network Security', 'Ethical Hacking', 'Security Protocols'
    ],
    'BCom Finance': [
      'Financial Management', 'Investment Analysis', 'Corporate Finance', 'Financial Reporting'
    ],
    'BSc Education - Mathematics': [
      'Abstract Algebra', 'Geometry', 'Probability & Statistics', 'Educational Theory'
    ],
    'BSc Education - Science': [
      'Physics Education', 'Chemistry Education', 'Biology Education', 'Science Pedagogy'
    ],
    'BSc Education - English': [
      'English Literature', 'Linguistics', 'Composition', 'Teaching Methods'
    ],
    'BSc Nursing': [
      'Anatomy & Physiology', 'Nursing Practice', 'Pharmacology', 'Clinical Skills'
    ],
    'BSc Pharmacy': [
      'Pharmaceutical Chemistry', 'Pharmacology', 'Pharmacy Practice', 'Medicinal Chemistry'
    ],
    'BSc Health Sciences': [
      'Medical Microbiology', 'Pathology', 'Immunology', 'Public Health'
    ],
    'BSc Agriculture': [
      'Crop Production', 'Animal Husbandry', 'Agricultural Economics', 'Soil Science'
    ],
    'BSc Environmental Science': [
      'Ecology', 'Environmental Chemistry', 'Conservation Biology', 'Environmental Management'
    ],
    'BSc Environmental Management': [
      'Environmental Policy', 'Sustainability', 'Environmental Impact Assessment', 'GIS & Remote Sensing'
    ],
    'LLB Law': [
      'Constitutional Law', 'Criminal Law', 'Commercial Law', 'Civil Procedure'
    ],
    'Diploma in Paralegal Studies': [
      'Legal Research', 'Court Procedures', 'Legal Documentation', 'Law Practice'
    ],
    'BSc Tourism Management': [
      'Tourism Planning', 'Hotel Management', 'Destination Marketing', 'Tour Operations'
    ],
    'BSc Hospitality Management': [
      'Food & Beverage Management', 'Front Office Operations', 'Housekeeping', 'Customer Service'
    ],
    'BSc Media & Communication': [
      'Media Theory', 'Journalism', 'Broadcasting', 'Media Production'
    ],
    'BSc Public Relations': [
      'PR Strategy', 'Corporate Communication', 'Crisis Management', 'Event Management'
    ],
    'BSc Journalism': [
      'News Writing', 'Investigative Journalism', 'Digital Journalism', 'Media Ethics'
    ],
  });

  // Sample documents
  DB.set('documents', [
    {
      id: 'doc1', title: 'Data Structures Notes - Complete Guide',
      school: 'Faculty of Science', course: 'BSc Computer Science',
      unit: 'Data Structures & Algorithms', type: 'study',
      uploadedBy: 'Dr. Kamau Njoroge', date: '2024-09-15', size: '2.4 MB',
      fileData: null,
    },
    {
      id: 'doc2', title: 'Database Systems - CAT 2023',
      school: 'Faculty of Science', course: 'BSc Computer Science',
      unit: 'Database Systems', type: 'past',
      uploadedBy: 'Dr. Kamau Njoroge', date: '2023-11-20', size: '1.1 MB',
      fileData: null,
    },
    {
      id: 'doc3', title: 'Introduction to Programming - Lecture 1-5',
      school: 'Faculty of Science', course: 'BSc Computer Science',
      unit: 'Introduction to Programming', type: 'study',
      uploadedBy: 'LEC001', date: '2024-01-10', size: '3.8 MB',
      fileData: null,
    },
    {
      id: 'doc4', title: 'Financial Accounting - Past Paper 2022',
      school: 'Faculty of Business & Economics', course: 'BCom Accounting',
      unit: 'Financial Accounting', type: 'past',
      uploadedBy: 'LEC001', date: '2022-12-01', size: '980 KB',
      fileData: null,
    },
    {
      id: 'doc5', title: 'Calculus I - Comprehensive Notes',
      school: 'Faculty of Science', course: 'BSc Mathematics',
      unit: 'Calculus I', type: 'study',
      uploadedBy: 'Dr. Kamau Njoroge', date: '2024-03-05', size: '5.2 MB',
      fileData: null,
    },
  ]);

  DB.set('seeded', true);
}

seedDB();

// ═══════════════════════════════════════════════════════
//  THEME MANAGEMENT
// ═══════════════════════════════════════════════════════
function initTheme() {
  const savedTheme = localStorage.getItem('ev_theme') || 'light';
  applyTheme(savedTheme);
}

function applyTheme(theme) {
  const body = document.body;
  const themeBtn = document.getElementById('themeToggleBtn');
  
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    if (themeBtn) themeBtn.textContent = '☀️';
    localStorage.setItem('ev_theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    if (themeBtn) themeBtn.textContent = '🌙';
    localStorage.setItem('ev_theme', 'light');
  }
}

function toggleTheme() {
  const currentTheme = localStorage.getItem('ev_theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
});

// ═══════════════════════════════════════════════════════
//  AUTH
// ═══════════════════════════════════════════════════════
let currentUser = null;
let selectedDocType = 'study';
let selectedFile = null;
const THEME_KEY = 'themePreference';
let currentTheme = 'dark';
let currentPreviewDocId = null;

function applyTheme(theme) {
  const normalizedTheme = theme === 'light' ? 'light' : 'dark';
  const themeBtn = document.getElementById('themeToggleBtn');

  currentTheme = normalizedTheme;
  document.body.classList.toggle('app-light', normalizedTheme === 'light');

  if (themeBtn) {
    const switchLabel = normalizedTheme === 'light' ? 'Dark Mode' : 'Light Mode';
    const switchTitle = normalizedTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode';
    themeBtn.textContent = switchLabel;
    themeBtn.title = switchTitle;
    themeBtn.setAttribute('aria-label', switchTitle);
  }
}

function initializeTheme() {
  const savedTheme = DB.get(THEME_KEY);
  applyTheme(savedTheme === 'light' ? 'light' : 'dark');
}

function toggleTheme() {
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  DB.set(THEME_KEY, nextTheme);
}

initializeTheme();

function attemptLogin() {
  const id = document.getElementById('loginId').value.trim();
  const pass = document.getElementById('loginPass').value;
  const idErr = document.getElementById('loginIdErr');
  const passErr = document.getElementById('loginPassErr');
  let valid = true;

  // Reset errors
  idErr.classList.remove('show');
  passErr.classList.remove('show');
  document.getElementById('loginId').classList.remove('error');
  document.getElementById('loginPass').classList.remove('error');

  if (!id) {
    idErr.textContent = 'Please enter your Student ID or Email';
    idErr.classList.add('show');
    document.getElementById('loginId').classList.add('error');
    valid = false;
  }
  if (!pass) {
    passErr.textContent = 'Please enter your password';
    passErr.classList.add('show');
    document.getElementById('loginPass').classList.add('error');
    valid = false;
  }
  if (!valid) return;

  const users = DB.get('users') || [];
  const user = users.find(u =>
    (u.id.toLowerCase() === id.toLowerCase() || u.email === id.toLowerCase()) &&
    u.password === pass
  );

  if (!user) {
    passErr.textContent = 'Invalid ID or password. Please check your credentials.';
    passErr.classList.add('show');
    document.getElementById('loginPass').classList.add('error');
    document.getElementById('loginId').classList.add('error');
    showToast('Login failed — check your credentials', 'error');
    return;
  }

  currentUser = user;
  document.getElementById('loginPage').classList.remove('active');
  document.getElementById('appPage').classList.add('active');

  // Setup UI
  document.getElementById('navName').textContent = user.name;
  document.getElementById('navRole').textContent = user.role.toUpperCase();
  document.getElementById('navAvatar').textContent = user.name[0];

  // Role-based tab visibility
  const uploadBtn = document.getElementById('uploadTabBtn');
  const adminBtn = document.getElementById('adminTabBtn');
  if (user.role === 'student') {
    uploadBtn.style.display = 'none';
    adminBtn.style.display = 'none';
  } else if (user.role === 'lecturer') {
    uploadBtn.style.display = '';
    adminBtn.style.display = 'none';
  } else {
    uploadBtn.style.display = '';
    adminBtn.style.display = '';
  }

  populateSearchSelects();
  populateUploadSelects();
  populateAdminSelects();
  renderStats();
  renderAllDocs();
  renderRecentUploads();
  switchTab('searchTab', document.querySelector('.nav-tab'));

  showToast(`Welcome back, ${user.name.split(' ')[0]}! 🎓`, 'success');
}

// Enter key on login fields
document.getElementById('loginPass').addEventListener('keydown', e => {
  if (e.key === 'Enter') attemptLogin();
});
document.getElementById('loginId').addEventListener('keydown', e => {
  if (e.key === 'Enter') attemptLogin();
});

// Enter key on signup fields
document.addEventListener('DOMContentLoaded', () => {
  const signupPassField = document.getElementById('signupPass');
  if (signupPassField) {
    signupPassField.addEventListener('keydown', e => {
      if (e.key === 'Enter' && document.getElementById('signupFields').style.display !== 'none') {
        attemptSignup();
      }
    });
  }
});

function logout() {
  currentUser = null;
  document.getElementById('appPage').classList.remove('active');
  document.getElementById('loginPage').classList.add('active');
  document.getElementById('loginId').value = '';
  document.getElementById('loginPass').value = '';
  document.getElementById('searchResults').innerHTML = '';
  showToast('Signed out successfully');
}

// ═══════════════════════════════════════════════════════
//  SIGNUP
// ═══════════════════════════════════════════════════════
function toggleSignup() {
  const loginFields = document.getElementById('loginFields');
  const signupFields = document.getElementById('signupFields');
  const formTitle = document.getElementById('formTitle');
  const formSubtitle = document.getElementById('formSubtitle');
  const toggleText = document.getElementById('toggleText');

  if (loginFields.style.display === 'none') {
    // Switch back to login
    loginFields.style.display = 'block';
    signupFields.style.display = 'none';
    formTitle.textContent = 'Welcome back';
    formSubtitle.textContent = 'Sign in to access your study portal';
    toggleText.innerHTML = "Don't have an account? <button class=\"btn-link\" onclick=\"toggleSignup()\">Sign Up</button>";
  } else {
    // Switch to signup
    loginFields.style.display = 'none';
    signupFields.style.display = 'block';
    formTitle.textContent = 'Create Account';
    formSubtitle.textContent = 'Join UP-GRADE to access study materials';
    toggleText.innerHTML = "Already have an account? <button class=\"btn-link\" onclick=\"toggleSignup()\">Sign In</button>";
  }
}

function attemptSignup() {
  const name = document.getElementById('signupName').value.trim();
  const id = document.getElementById('signupId').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const pass = document.getElementById('signupPass').value;
  
  let valid = true;
  const errors = {
    nameErr: document.getElementById('signupNameErr'),
    idErr: document.getElementById('signupIdErr'),
    emailErr: document.getElementById('signupEmailErr'),
    passErr: document.getElementById('signupPassErr'),
  };

  // Reset errors
  Object.values(errors).forEach(err => err.classList.remove('show'));
  [document.getElementById('signupName'), document.getElementById('signupId'), 
   document.getElementById('signupEmail'), document.getElementById('signupPass')]
    .forEach(el => el.classList.remove('error'));

  // Validation
  if (!name) {
    errors.nameErr.textContent = 'Please enter your full name';
    errors.nameErr.classList.add('show');
    document.getElementById('signupName').classList.add('error');
    valid = false;
  }
  if (!id) {
    errors.idErr.textContent = 'Please enter a Student ID';
    errors.idErr.classList.add('show');
    document.getElementById('signupId').classList.add('error');
    valid = false;
  }
  if (!email || !email.includes('@')) {
    errors.emailErr.textContent = 'Please enter a valid email';
    errors.emailErr.classList.add('show');
    document.getElementById('signupEmail').classList.add('error');
    valid = false;
  }
  if (!pass || pass.length < 6) {
    errors.passErr.textContent = 'Password must be at least 6 characters';
    errors.passErr.classList.add('show');
    document.getElementById('signupPass').classList.add('error');
    valid = false;
  }

  if (!valid) return;

  const users = DB.get('users') || [];
  
  // Check if student already exists
  if (users.find(u => u.id.toLowerCase() === id.toLowerCase())) {
    errors.idErr.textContent = 'Student ID already exists';
    errors.idErr.classList.add('show');
    document.getElementById('signupId').classList.add('error');
    showToast('Student ID already registered', 'error');
    return;
  }

  // Create new user
  const newUser = {
    id,
    name,
    email,
    password: pass,
    role: 'student'
  };

  users.push(newUser);
  DB.set('users', users);

  showToast(`Account created successfully! Welcome ${name.split(' ')[0]}! 🎓`, 'success');
  
  // Clear form
  document.getElementById('signupName').value = '';
  document.getElementById('signupId').value = '';
  document.getElementById('signupEmail').value = '';
  document.getElementById('signupPass').value = '';

  // Switch back to login
  setTimeout(() => {
    toggleSignup();
  }, 1500);
}

// ═══════════════════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════════════════
function switchTab(tabId, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  if (btn) btn.classList.add('active');
}

// ── NAVBAR PDF BUTTONS ──
function openUploadTab() {
  switchTab('uploadTab', document.getElementById('uploadTabBtn'));
  setTimeout(() => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) fileInput.focus();
  }, 200);
}

function openDownloadTab() {
  switchTab('searchTab', document.querySelector('.nav-tab'));
  showToast('Select a document and click Download', 'success');
}

// ═══════════════════════════════════════════════════════
//  SEARCH
// ═══════════════════════════════════════════════════════
function populateSearchSelects() {
  const schools = DB.get('schools') || [];
  const sel = document.getElementById('schoolSelect');
  sel.innerHTML = '<option value="">— Select School —</option>';
  schools.forEach(s => {
    sel.innerHTML += `<option value="${s}">${s}</option>`;
  });
}

function onSchoolChange() {
  const school = document.getElementById('schoolSelect').value;
  const courseSel = document.getElementById('courseSelect');
  const unitSel = document.getElementById('unitSelect');

  courseSel.innerHTML = '<option value="">— Select Course —</option>';
  unitSel.innerHTML = '<option value="">— Select Unit —</option>';
  unitSel.disabled = true;

  if (!school) { courseSel.disabled = true; return; }
  courseSel.disabled = false;

  const courses = (DB.get('courses') || {})[school] || [];
  courses.forEach(c => {
    courseSel.innerHTML += `<option value="${c}">${c}</option>`;
  });
}

function onCourseChange() {
  const course = document.getElementById('courseSelect').value;
  const unitSel = document.getElementById('unitSelect');

  unitSel.innerHTML = '<option value="">— Select Unit —</option>';
  if (!course) { unitSel.disabled = true; return; }
  unitSel.disabled = false;

  const units = (DB.get('units') || {})[course] || [];
  units.forEach(u => {
    unitSel.innerHTML += `<option value="${u}">${u}</option>`;
  });
}

function searchMaterials() {
  const school = document.getElementById('schoolSelect').value;
  const course = document.getElementById('courseSelect').value;
  const unit = document.getElementById('unitSelect').value;
  const resultsDiv = document.getElementById('searchResults');

  if (!school && !course && !unit) {
    showToast('Please select at least a school to search', 'error');
    return;
  }

  // Validate selection exists in DB
  const schools = DB.get('schools') || [];
  const courses = DB.get('courses') || {};
  const units = DB.get('units') || {};

  if (school && !schools.includes(school)) {
    resultsDiv.innerHTML = notFoundHTML(`School "${school}" not found in the database.`);
    return;
  }
  if (course && !(courses[school] || []).includes(course)) {
    resultsDiv.innerHTML = notFoundHTML(`Course "${course}" not found under ${school}.`);
    return;
  }
  if (unit && !(units[course] || []).includes(unit)) {
    resultsDiv.innerHTML = notFoundHTML(`Unit "${unit}" not found under ${course}.`);
    return;
  }

  // Filter documents
  const docs = DB.get('documents') || [];
  const filtered = docs.filter(d => {
    if (school && d.school !== school) return false;
    if (course && d.course !== course) return false;
    if (unit && d.unit !== unit) return false;
    return true;
  });

  if (filtered.length === 0) {
    resultsDiv.innerHTML = `
      <div class="empty-state">
        <div class="icon">📭</div>
        <h3>No materials found</h3>
        <p>No documents have been uploaded for the selected combination yet.<br>Check back later or contact your lecturer.</p>
      </div>`;
    return;
  }

  let html = `
    <div class="results-section">
      <div class="results-header">
        <h3>Search Results</h3>
        <span class="results-count">${filtered.length} DOCUMENT${filtered.length !== 1 ? 'S' : ''} FOUND</span>
      </div>
      <div class="results-grid">`;

  filtered.forEach((d, i) => {
    const badge = d.type === 'study' ? 'badge-studymat' : 'badge-pastpaper';
    const label = d.type === 'study' ? '📚 Study Material' : '📝 Past Paper';
    html += `
      <div class="doc-card" style="animation-delay:${i * 0.06}s">
        <span class="doc-type-badge ${badge}">${label}</span>
        <h4>${d.title}</h4>
        <div class="doc-meta">${d.unit} · ${d.date}${d.year ? ' · ' + d.year : ''}</div>
        <div class="doc-footer">
          <span class="doc-size">${d.size} · PDF</span>
          <div style="display:flex;gap:6px">
            <button class="btn-download" onclick="previewDoc('${d.id}')" title="Preview">
              👁 Preview
            </button>
            <button class="btn-download" onclick="downloadDoc('${d.id}')" title="Download">
              ⬇ Download
            </button>
          </div>
        </div>
      </div>`;
  });

  html += `</div></div>`;
  resultsDiv.innerHTML = html;
}

function notFoundHTML(msg) {
  return `
    <div class="empty-state error-state">
      <div class="icon" style="font-size:48px">❌</div>
      <h3>Not Found in Database</h3>
      <p>${msg}<br><br>Please verify the selection or contact the administrator.</p>
    </div>`;
}

function clearSearch() {
  document.getElementById('schoolSelect').value = '';
  document.getElementById('courseSelect').innerHTML = '<option value="">— Select Course —</option>';
  document.getElementById('courseSelect').disabled = true;
  document.getElementById('unitSelect').innerHTML = '<option value="">— Select Unit —</option>';
  document.getElementById('unitSelect').disabled = true;
  document.getElementById('searchResults').innerHTML = '';
}

// ═══════════════════════════════════════════════════════
//  UPLOAD
// ═══════════════════════════════════════════════════════
function populateUploadSelects() {
  const schools = DB.get('schools') || [];
  ['upSchool', 'manSchool', 'manSchoolU'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = '<option value="">Select School</option>';
    schools.forEach(s => { el.innerHTML += `<option value="${s}">${s}</option>`; });
  });
}

function populateUpCourse() {
  const school = document.getElementById('upSchool').value;
  const upCourse = document.getElementById('upCourse');
  const upUnit = document.getElementById('upUnit');
  upCourse.innerHTML = '<option value="">Select Course</option>';
  upUnit.innerHTML = '<option value="">Select Unit</option>';
  upUnit.disabled = true;
  if (!school) { upCourse.disabled = true; return; }
  upCourse.disabled = false;
  const courses = (DB.get('courses') || {})[school] || [];
  courses.forEach(c => { upCourse.innerHTML += `<option value="${c}">${c}</option>`; });
}

function populateUpUnit() {
  const course = document.getElementById('upCourse').value;
  const upUnit = document.getElementById('upUnit');
  upUnit.innerHTML = '<option value="">Select Unit</option>';
  if (!course) { upUnit.disabled = true; return; }
  upUnit.disabled = false;
  const units = (DB.get('units') || {})[course] || [];
  units.forEach(u => { upUnit.innerHTML += `<option value="${u}">${u}</option>`; });
}

function selectType(type) {
  selectedDocType = type;
  document.getElementById('typeStudy').classList.toggle('selected', type === 'study');
  document.getElementById('typePast').classList.toggle('selected', type === 'past');
}

function handleDragOver(e) {
  e.preventDefault();
  document.getElementById('dropZone').classList.add('dragover');
}
function handleDragLeave(e) {
  document.getElementById('dropZone').classList.remove('dragover');
}
function handleDrop(e) {
  e.preventDefault();
  document.getElementById('dropZone').classList.remove('dragover');
  const file = e.dataTransfer.files[0];
  if (file) processFile(file);
}
function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file) processFile(file);
}

function processFile(file) {
  if (file.type !== 'application/pdf') {
    showToast('Only PDF files are allowed', 'error'); return;
  }
  if (file.size > 10 * 1024 * 1024) {
    showToast('File must be under 10MB', 'error'); return;
  }
  selectedFile = file;
  document.getElementById('fpName').textContent = file.name;
  document.getElementById('fpSize').textContent = formatSize(file.size);
  document.getElementById('filePreview').classList.add('show');
  document.getElementById('dropZone').style.opacity = '0.5';
}

function removeFile() {
  selectedFile = null;
  document.getElementById('filePreview').classList.remove('show');
  document.getElementById('dropZone').style.opacity = '';
  document.getElementById('fileInput').value = '';
}

function uploadDocument() {
  const school = document.getElementById('upSchool').value;
  const course = document.getElementById('upCourse').value;
  const unit = document.getElementById('upUnit').value;
  const title = document.getElementById('upTitle').value.trim();
  const year = document.getElementById('upYear').value.trim();

  if (!selectedFile) { showToast('Please select a PDF file', 'error'); return; }
  if (!school) { showToast('Please select a school', 'error'); return; }
  if (!course) { showToast('Please select a course', 'error'); return; }
  if (!unit) { showToast('Please select a unit', 'error'); return; }
  if (!title) { showToast('Please enter a document title', 'error'); return; }

  // Read file as base64 and store
  const reader = new FileReader();
  reader.onload = (e) => {
    const progressBar = document.getElementById('uploadProgress');
    const fill = document.getElementById('progressFill');
    progressBar.classList.add('show');

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 25;
      if (progress >= 100) {
        progress = 100;
        fill.style.width = '100%';
        clearInterval(interval);

        // Save to DB
        const docs = DB.get('documents') || [];
        const newDoc = {
          id: 'doc_' + Date.now(),
          title, school, course, unit,
          type: selectedDocType,
          year: year || null,
          uploadedBy: currentUser.name,
          date: new Date().toISOString().split('T')[0],
          size: formatSize(selectedFile.size),
          fileName: selectedFile.name,
          fileData: e.target.result,
        };
        docs.unshift(newDoc);
        DB.set('documents', docs);

        setTimeout(() => {
          progressBar.classList.remove('show');
          fill.style.width = '0%';
          showToast(`"${title}" uploaded successfully!`, 'success');
          resetUploadForm();
          renderRecentUploads();
          renderStats();
          renderAllDocs();
        }, 400);
      } else {
        fill.style.width = progress + '%';
      }
    }, 80);
  };
  reader.readAsDataURL(selectedFile);
}

function resetUploadForm() {
  removeFile();
  document.getElementById('upTitle').value = '';
  document.getElementById('upYear').value = '';
  document.getElementById('upSchool').value = '';
  document.getElementById('upCourse').innerHTML = '<option value="">Select Course</option>';
  document.getElementById('upCourse').disabled = true;
  document.getElementById('upUnit').innerHTML = '<option value="">Select Unit</option>';
  document.getElementById('upUnit').disabled = true;
  selectType('study');
}

// ═══════════════════════════════════════════════════════
//  DOWNLOAD
// ═══════════════════════════════════════════════════════
function downloadDoc(docId) {
  const docs = DB.get('documents') || [];
  const doc = docs.find(d => d.id === docId);
  if (!doc) { showToast('Document not found', 'error'); return; }

  if (doc.fileData) {
    // Actual file stored — download it
    const a = document.createElement('a');
    a.href = doc.fileData;
    a.download = doc.fileName || doc.title + '.pdf';
    a.click();
    showToast(`Downloading: ${doc.title}`, 'success');
  } else {
    // Sample doc — create a demo PDF placeholder
    showToast(`Downloading: ${doc.title}`, 'success');
    const content = `%PDF-1.4
1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj
2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj
3 0 obj<</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R/Resources<<>>/Contents 4 0 R>>endobj
4 0 obj<</Length 80>>stream
BT /F1 24 Tf 100 700 Td (${doc.title.substring(0,40)}) Tj ET
endstream endobj
xref
0 5
0000000000 65535 f
0000000009 00000 n
0000000058 00000 n
0000000115 00000 n
0000000274 00000 n
trailer<</Size 5/Root 1 0 R>>
startxref 406
%%EOF`;
    const blob = new Blob([content], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = doc.title.replace(/[^a-z0-9]/gi, '_') + '.pdf';
    a.click();
    URL.revokeObjectURL(url);
  }
}

// ═══════════════════════════════════════════════════════
//  PREVIEW
// ═══════════════════════════════════════════════════════
function previewDoc(docId) {
  const docs = DB.get('documents') || [];
  const doc = docs.find(d => d.id === docId);
  if (!doc) { showToast('Document not found', 'error'); return; }

  currentPreviewDocId = docId;
  
  // Update modal title
  document.getElementById('previewTitle').textContent = doc.title;
  
  // Display PDF in iframe
  const pdfViewer = document.getElementById('pdfViewer');
  
  if (doc.fileData) {
    // Use actual file data
    pdfViewer.src = doc.fileData;
  } else {
    // Create a demo PDF
    const content = `%PDF-1.4
1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj
2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj
3 0 obj<</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R/Resources<<>>/Contents 4 0 R>>endobj
4 0 obj<</Length 80>>stream
BT /F1 24 Tf 100 700 Td (${doc.title.substring(0,40)}) Tj ET
endstream endobj
xref
0 5
0000000000 65535 f
0000000009 00000 n
0000000058 00000 n
0000000115 00000 n
0000000274 00000 n
trailer<</Size 5/Root 1 0 R>>
startxref 406
%%EOF`;
    const blob = new Blob([content], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    pdfViewer.src = url;
  }
  
  // Show modal
  document.getElementById('previewModal').classList.add('active');
  showToast(`Previewing: ${doc.title}`, 'success');
}

function closePreview() {
  document.getElementById('previewModal').classList.remove('active');
  document.getElementById('pdfViewer').src = '';
  currentPreviewDocId = null;
}

function downloadFromPreview() {
  if (currentPreviewDocId) {
    downloadDoc(currentPreviewDocId);
  }
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && document.getElementById('previewModal').classList.contains('active')) {
    closePreview();
  }
});

// ═══════════════════════════════════════════════════════
//  ADMIN / MANAGE
// ═══════════════════════════════════════════════════════
function populateAdminSelects() {
  const schools = DB.get('schools') || [];
  ['manSchool', 'manSchoolU'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = '<option value="">Select School</option>';
    schools.forEach(s => { el.innerHTML += `<option value="${s}">${s}</option>`; });
  });
}

function renderStats() {
  const docs = DB.get('documents') || [];
  const schools = DB.get('schools') || [];
  const courses = Object.values(DB.get('courses') || {}).flat();
  const units = Object.values(DB.get('units') || {}).flat();
  document.getElementById('statsRow').innerHTML = `
    <div class="stat-card"><div class="sc-label">Documents</div><div class="sc-value">${docs.length}</div></div>
    <div class="stat-card"><div class="sc-label">Schools</div><div class="sc-value">${schools.length}</div></div>
    <div class="stat-card"><div class="sc-label">Courses</div><div class="sc-value">${courses.length}</div></div>
    <div class="stat-card"><div class="sc-label">Units</div><div class="sc-value">${units.length}</div></div>
  `;
}

function renderSchoolsList() {
  const schools = DB.get('schools') || [];
  const docs = DB.get('documents') || [];
  const el = document.getElementById('schoolsList');
  if (!schools.length) { el.innerHTML = '<div style="color:rgba(13,13,13,0.4);font-size:13px;padding:8px">No schools added yet</div>'; return; }
  el.innerHTML = schools.map((s, i) => `
    <div class="manage-item">
      <span class="mi-name">🏫 ${s}</span>
      <div style="display:flex;align-items:center;gap:6px">
        <span class="mi-count">${docs.filter(d=>d.school===s).length} docs</span>
        <button class="btn-danger" onclick="deleteSchool(${i})">Remove</button>
      </div>
    </div>`).join('');
}

function addSchool() {
  const val = document.getElementById('newSchool').value.trim();
  if (!val) return;
  const schools = DB.get('schools') || [];
  if (schools.includes(val)) { showToast('School already exists', 'error'); return; }
  schools.push(val);
  DB.set('schools', schools);
  document.getElementById('newSchool').value = '';
  renderSchoolsList();
  populateSearchSelects();
  populateUploadSelects();
  populateAdminSelects();
  renderStats();
  showToast(`School "${val}" added`, 'success');
}

function deleteSchool(i) {
  const schools = DB.get('schools') || [];
  if (!confirm(`Remove "${schools[i]}"?`)) return;
  schools.splice(i, 1);
  DB.set('schools', schools);
  renderSchoolsList();
  populateSearchSelects();
  populateUploadSelects();
  populateAdminSelects();
  renderStats();
}

function renderCoursesList() {
  const school = document.getElementById('manSchool').value;
  const el = document.getElementById('coursesList');
  if (!school) { el.innerHTML = '<div style="color:rgba(13,13,13,0.4);font-size:13px;padding:8px">Select a school first</div>'; return; }
  const courses = (DB.get('courses') || {})[school] || [];
  const docs = DB.get('documents') || [];
  if (!courses.length) { el.innerHTML = '<div style="color:rgba(13,13,13,0.4);font-size:13px;padding:8px">No courses under this school</div>'; return; }
  el.innerHTML = courses.map((c, i) => `
    <div class="manage-item">
      <span class="mi-name">📋 ${c}</span>
      <div style="display:flex;align-items:center;gap:6px">
        <span class="mi-count">${docs.filter(d=>d.course===c).length} docs</span>
        <button class="btn-danger" onclick="deleteCourse('${school}', ${i})">Remove</button>
      </div>
    </div>`).join('');
}

function addCourse() {
  const school = document.getElementById('manSchool').value;
  const val = document.getElementById('newCourse').value.trim();
  if (!school) { showToast('Select a school first', 'error'); return; }
  if (!val) return;
  const allCourses = DB.get('courses') || {};
  if (!allCourses[school]) allCourses[school] = [];
  if (allCourses[school].includes(val)) { showToast('Course already exists', 'error'); return; }
  allCourses[school].push(val);
  DB.set('courses', allCourses);
  document.getElementById('newCourse').value = '';
  renderCoursesList();
  populateSearchSelects();
  populateUploadSelects();
  renderStats();
  showToast(`Course "${val}" added`, 'success');
}

function deleteCourse(school, i) {
  const allCourses = DB.get('courses') || {};
  const c = allCourses[school][i];
  if (!confirm(`Remove "${c}"?`)) return;
  allCourses[school].splice(i, 1);
  DB.set('courses', allCourses);
  renderCoursesList();
  populateSearchSelects();
  populateUploadSelects();
  renderStats();
}

function onManSchoolUChange() {
  const school = document.getElementById('manSchoolU').value;
  const sel = document.getElementById('manCourseU');
  sel.innerHTML = '<option value="">Select Course</option>';
  const courses = (DB.get('courses') || {})[school] || [];
  courses.forEach(c => { sel.innerHTML += `<option value="${c}">${c}</option>`; });
  sel.disabled = !school;
  renderUnitsList();
}

function renderUnitsList() {
  const course = document.getElementById('manCourseU').value;
  const el = document.getElementById('unitsList');
  if (!course) { el.innerHTML = '<div style="color:rgba(13,13,13,0.4);font-size:13px;padding:8px">Select a course first</div>'; return; }
  const units = (DB.get('units') || {})[course] || [];
  const docs = DB.get('documents') || [];
  if (!units.length) { el.innerHTML = '<div style="color:rgba(13,13,13,0.4);font-size:13px;padding:8px">No units under this course</div>'; return; }
  el.innerHTML = units.map((u, i) => `
    <div class="manage-item">
      <span class="mi-name">📖 ${u}</span>
      <div style="display:flex;align-items:center;gap:6px">
        <span class="mi-count">${docs.filter(d=>d.unit===u).length} docs</span>
        <button class="btn-danger" onclick="deleteUnit('${course}', ${i})">Remove</button>
      </div>
    </div>`).join('');
}

function addUnit() {
  const course = document.getElementById('manCourseU').value;
  const val = document.getElementById('newUnit').value.trim();
  if (!course) { showToast('Select a course first', 'error'); return; }
  if (!val) return;
  const allUnits = DB.get('units') || {};
  if (!allUnits[course]) allUnits[course] = [];
  if (allUnits[course].includes(val)) { showToast('Unit already exists', 'error'); return; }
  allUnits[course].push(val);
  DB.set('units', allUnits);
  document.getElementById('newUnit').value = '';
  renderUnitsList();
  renderStats();
  showToast(`Unit "${val}" added`, 'success');
}

function deleteUnit(course, i) {
  const allUnits = DB.get('units') || {};
  const u = allUnits[course][i];
  if (!confirm(`Remove "${u}"?`)) return;
  allUnits[course].splice(i, 1);
  DB.set('units', allUnits);
  renderUnitsList();
  renderStats();
}

function renderAllDocs() {
  const docs = DB.get('documents') || [];
  const el = document.getElementById('allDocsList');
  if (!docs.length) { el.innerHTML = '<div style="color:rgba(13,13,13,0.4);font-size:13px;padding:8px">No documents in database</div>'; return; }
  el.innerHTML = docs.map((d, i) => `
    <div class="manage-item">
      <span class="mi-name">${d.type==='study'?'📚':'📝'} ${d.title}</span>
      <div style="display:flex;align-items:center;gap:6px">
        <span class="mi-count">${d.size}</span>
        <button class="btn-danger" onclick="deleteDoc(${i})">Remove</button>
      </div>
    </div>`).join('');
}

function deleteDoc(i) {
  const docs = DB.get('documents') || [];
  if (!confirm(`Remove "${docs[i].title}"?`)) return;
  docs.splice(i, 1);
  DB.set('documents', docs);
  renderAllDocs();
  renderStats();
  renderRecentUploads();
  showToast('Document removed');
}

function renderRecentUploads() {
  const docs = (DB.get('documents') || []).slice(0, 6);
  const el = document.getElementById('recentUploads');
  if (!docs.length) {
    el.innerHTML = '<div class="empty-state" style="padding:32px 16px"><div class="icon">📭</div><p style="font-size:13px">No uploads yet</p></div>';
    return;
  }
  el.innerHTML = docs.map(d => `
    <div class="upload-item">
      <div class="ui-icon">${d.type==='study'?'📚':'📝'}</div>
      <div class="ui-info">
        <div class="ui-name">${d.title}</div>
        <div class="ui-meta">${d.unit} · ${d.date}</div>
      </div>
      <div class="ui-actions">
        <button class="btn-icon" onclick="downloadDoc('${d.id}')" title="Download">⬇</button>
      </div>
    </div>`).join('');
}

// ── Initial render for admin tab ──
function onAdminTabLoad() {
  renderSchoolsList();
  renderCoursesList();
  renderUnitsList();
  renderAllDocs();
  renderStats();
}

// Intercept admin tab click to render
document.getElementById('adminTabBtn').addEventListener('click', onAdminTabLoad);

// ═══════════════════════════════════════════════════════
//  UTILITIES
// ═══════════════════════════════════════════════════════
function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024*1024) return (bytes/1024).toFixed(0) + ' KB';
  return (bytes/(1024*1024)).toFixed(1) + ' MB';
}

let toastTimer;
function showToast(msg, type='') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = type ? `show ${type}` : 'show';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.className = type; }, 3200);
}
