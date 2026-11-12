/**
 * MindSpark Academy - Parent Dashboard (9 Interactive Modules)
 * Demo Data & localStorage Persistence Only
 */

(function () {
  const Store = window.MindSparkStore;
  const Data = window.MINDSPARK_DATA;
  let activeTab = "overview";
  let scheduleView = "list";

  function getAuth() { return Store.get(Store.KEYS.AUTH); }
  function getChildren() { return Store.get(Store.KEYS.CHILDREN) || []; }
  function getEnrollments() { return Store.get(Store.KEYS.ENROLLMENTS) || []; }
  function getSchedules() { return Store.get(Store.KEYS.SCHEDULES) || []; }
  function getCompRegs() { return Store.get(Store.KEYS.COMPETITIONS) || []; }
  function getPayments() { return Store.get(Store.KEYS.PAYMENTS) || []; }
  function getNotifs() { return Store.get(Store.KEYS.NOTIFICATIONS) || []; }

  function updateHeaderBadges() {
    const auth = getAuth();
    const unread = getNotifs().filter((n) => !n.read).length;
    const dot = document.getElementById("dash-unread-dot");
    const nameEl = document.getElementById("dash-topbar-name");
    if (dot) {
      dot.textContent = unread;
      dot.style.display = unread > 0 ? "inline-block" : "none";
    }
    if (nameEl && auth) {
      nameEl.textContent = auth.parentName.split(" ")[0];
    }
  }

  function switchTab(tab) {
    activeTab = tab;
    document.querySelectorAll(".dash-nav-btn[data-tab]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-tab") === tab);
    });
    const titles = {
      overview: "Overview",
      children: "My Children",
      enroll: "Enroll in Programs",
      progress: "Learning Progress",
      schedule: "Class Schedule",
      competitions: "Competitions",
      payments: "Fee Payments",
      notifications: "Notifications",
      profile: "My Profile"
    };
    document.getElementById("dash-page-title").textContent = titles[tab] || "Dashboard";
    renderModule(tab);

    // Close mobile sidebar if open
    document.getElementById("dash-sidebar").classList.remove("open");
    document.getElementById("dash-backdrop").classList.remove("show");
  }

  function showModal(title, html) {
    document.getElementById("dash-modal-title").textContent = title;
    document.getElementById("dash-modal-body").innerHTML = html;
    new bootstrap.Modal(document.getElementById("dashModal")).show();
    if (window.lucide) window.lucide.createIcons();
  }

  function renderModule(tab) {
    const host = document.getElementById("dash-module-host");
    if (!host) return;
    updateHeaderBadges();

    if (tab === "overview") renderOverview(host);
    else if (tab === "children") renderChildren(host);
    else if (tab === "enroll") renderEnroll(host);
    else if (tab === "progress") renderProgress(host);
    else if (tab === "schedule") renderSchedule(host);
    else if (tab === "competitions") renderCompetitions(host);
    else if (tab === "payments") renderPayments(host);
    else if (tab === "notifications") renderNotifications(host);
    else if (tab === "profile") renderProfile(host);

    if (window.lucide) window.lucide.createIcons();
  }

  // MODULE 1: OVERVIEW
  function renderOverview(host) {
    const auth = getAuth();
    const children = getChildren();
    const enrolls = getEnrollments();
    const schedules = getSchedules().filter((s) => s.status === "Upcoming");
    const payments = getPayments();
    const pendingFee = payments.filter((p) => p.status.includes("Pending")).reduce((s, p) => s + p.amount, 0);
    const notifs = getNotifs().slice(0, 3);

    host.innerHTML = `
      <div class="p-4 rounded-4 mb-4 text-white d-flex flex-wrap justify-content-between align-items-center gap-3" style="background:linear-gradient(135deg,#5736A8,#3E2382);">
        <div>
          <span class="badge-demo mb-2">Demo Parent Overview</span>
          <h3 class="text-white mb-1">Welcome, ${auth.parentName}!</h3>
          <p class="small opacity-75 mb-0">Here is your family's sample learning summary, upcoming classes, and quick actions.</p>
        </div>
        <div class="d-flex flex-wrap gap-2">
          <button class="btn-ms btn-ms-yellow py-2 px-3" onclick="window.dashGo('children')">+ Add Child</button>
          <button class="btn-ms btn-ms-coral py-2 px-3" onclick="window.dashGo('enroll')">Enroll in Program</button>
        </div>
      </div>

      <div class="row g-3 mb-4">
        <div class="col-6 col-lg-3"><div class="dash-stat-card"><div class="small text-muted-ms fw-bold">My Children</div><div class="fs-2 fw-black text-purple display-font">${children.length}</div></div></div>
        <div class="col-6 col-lg-3"><div class="dash-stat-card"><div class="small text-muted-ms fw-bold">Enrolled Programs</div><div class="fs-2 fw-black text-coral display-font">${enrolls.length}</div></div></div>
        <div class="col-6 col-lg-3"><div class="dash-stat-card"><div class="small text-muted-ms fw-bold">Upcoming Classes</div><div class="fs-2 fw-black text-purple display-font">${schedules.length}</div></div></div>
        <div class="col-6 col-lg-3"><div class="dash-stat-card"><div class="small text-muted-ms fw-bold">Pending Demo Fees</div><div class="fs-2 fw-black text-yellow display-font">$${pendingFee}</div></div></div>
      </div>

      <div class="row g-4">
        <div class="col-lg-7">
          <div class="dash-stat-card">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h5 class="mb-0">Child Profile &amp; Progress Summary</h5>
              <button class="btn btn-sm btn-link fw-bold" onclick="window.dashGo('progress')">View Progress →</button>
            </div>
            <div class="d-flex flex-column gap-3">
              ${children.map((c) => `
                <div class="p-3 rounded-4 border bg-surface-alt">
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <div><strong>${c.name}</strong> <span class="small text-muted-ms">• Age ${c.age}</span></div>
                    <span class="badge-pill-ms py-1 px-2" style="font-size:0.75rem;">${c.level}</span>
                  </div>
                  <div class="small text-secondary-ms mb-2">${c.program}</div>
                  <div class="progress" style="height:8px;"><div class="progress-bar" style="width:${c.progress}%;background:var(--ms-purple);"></div></div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>

        <div class="col-lg-5 d-flex flex-column gap-4">
          <div class="dash-stat-card">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h5 class="mb-0">Quick Actions</h5>
            </div>
            <div class="d-flex flex-wrap gap-2">
              <button class="btn-ms btn-ms-outline py-2 px-3" onclick="window.dashGo('children')">Add Child</button>
              <button class="btn-ms btn-ms-outline py-2 px-3" onclick="window.dashGo('enroll')">Enroll Program</button>
              <button class="btn-ms btn-ms-outline py-2 px-3" onclick="window.dashGo('progress')">View Progress</button>
              <button class="btn-ms btn-ms-outline py-2 px-3" onclick="window.dashGo('schedule')">View Schedule</button>
              <button class="btn-ms btn-ms-outline py-2 px-3" onclick="window.dashGo('payments')">Pay Demo Fees</button>
            </div>
          </div>

          <div class="dash-stat-card">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h5 class="mb-0">Recent Notifications</h5>
              <button class="btn btn-sm btn-link fw-bold" onclick="window.dashGo('notifications')">All</button>
            </div>
            <div class="d-flex flex-column gap-2">
              ${notifs.map((n) => `<div class="small p-2 rounded-3 bg-surface-alt border"><strong>${n.type}:</strong> ${n.title}</div>`).join("")}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // MODULE 2: MY CHILDREN
  function renderChildren(host) {
    const children = getChildren();
    host.innerHTML = `
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <span class="badge-demo mb-1">Demo Profiles</span>
          <h4 class="mb-0">My Children</h4>
        </div>
        <button class="btn-ms btn-ms-primary py-2 px-4" id="btn-add-child">+ Add Child</button>
      </div>
      <div class="row g-4">
        ${children.map((c) => `
          <div class="col-md-6">
            <div class="dash-stat-card d-flex flex-column">
              <div class="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h5 class="mb-1">${c.name}</h5>
                  <div class="small text-muted-ms">Age ${c.age} • ${c.status}</div>
                </div>
                <span class="badge-pill-ms py-1 px-3">${c.level}</span>
              </div>
              <div class="small mb-3"><strong>Enrolled Program:</strong> ${c.program}</div>
              <div class="d-flex justify-content-between small fw-bold mb-1"><span>Level Progress</span><span>${c.progress}%</span></div>
              <div class="progress mb-3" style="height:8px;"><div class="progress-bar" style="width:${c.progress}%;background:var(--ms-coral);"></div></div>
              <div class="d-flex gap-2 mt-auto">
                <button class="btn-ms btn-ms-outline py-2 px-3 edit-child-btn" data-id="${c.id}">Edit Demo Profile</button>
                <button class="btn-ms btn-ms-primary py-2 px-3" onclick="window.dashGo('progress')">Progress</button>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `;

    document.getElementById("btn-add-child").addEventListener("click", () => {
      showModal("Add Child (Demo)", `
        <form id="add-child-form">
          <div class="mb-3"><label class="form-label small fw-bold">Child First Name</label><input type="text" id="ac-name" class="form-control" required></div>
          <div class="mb-3"><label class="form-label small fw-bold">Age</label><input type="number" id="ac-age" class="form-control" min="5" max="16" required></div>
          <div class="mb-3"><label class="form-label small fw-bold">Program</label><select id="ac-prog" class="form-select">${Data.programs.map((p) => `<option value="${p.name}">${p.name}</option>`).join("")}</select></div>
          <button type="submit" class="btn-ms btn-ms-primary w-100">Save Child Profile</button>
        </form>
      `);
      document.getElementById("add-child-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const list = getChildren();
        list.push({
          id: "child-" + Date.now(),
          name: document.getElementById("ac-name").value + " (Demo)",
          age: parseInt(document.getElementById("ac-age").value, 10),
          program: document.getElementById("ac-prog").value,
          level: "Level 1",
          status: "Active",
          progress: 15,
          accuracy: 90,
          weeklyHours: 2.0,
          feedback: "Newly added demo learner profile."
        });
        Store.set(Store.KEYS.CHILDREN, list);
        bootstrap.Modal.getInstance(document.getElementById("dashModal")).hide();
        renderModule("children");
      });
    });

    document.querySelectorAll(".edit-child-btn").forEach((b) => {
      b.addEventListener("click", () => {
        const list = getChildren();
        const child = list.find((x) => x.id === b.getAttribute("data-id"));
        showModal("Edit Demo Child Profile", `
          <form id="edit-child-form">
            <div class="mb-3"><label class="form-label small fw-bold">Name</label><input type="text" id="ec-name" class="form-control" value="${child.name}" required></div>
            <div class="mb-3"><label class="form-label small fw-bold">Age</label><input type="number" id="ec-age" class="form-control" value="${child.age}" required></div>
            <button type="submit" class="btn-ms btn-ms-primary w-100">Update Profile</button>
          </form>
        `);
        document.getElementById("edit-child-form").addEventListener("submit", (e) => {
          e.preventDefault();
          child.name = document.getElementById("ec-name").value;
          child.age = parseInt(document.getElementById("ec-age").value, 10);
          Store.set(Store.KEYS.CHILDREN, list);
          bootstrap.Modal.getInstance(document.getElementById("dashModal")).hide();
          renderModule("children");
        });
      });
    });
  }

  // MODULE 3: ENROLL IN PROGRAMS
  function renderEnroll(host) {
    const children = getChildren();
    const enrolls = getEnrollments();
    const params = new URLSearchParams(window.location.search);
    const preProg = params.get("prog") || Data.programs[0].id;

    host.innerHTML = `
      <div class="row g-4">
        <div class="col-lg-7">
          <div class="dash-stat-card">
            <span class="badge-demo mb-2">Interactive Demo Enrollment</span>
            <h4 class="mb-3">Enroll in a Program</h4>
            <form id="dash-enroll-form">
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label small fw-bold">Select Child</label>
                  <select id="en-child" class="form-select">${children.map((c) => `<option value="${c.name}">${c.name}</option>`).join("")}</select>
                </div>
                <div class="col-md-6">
                  <label class="form-label small fw-bold">Select Program</label>
                  <select id="en-prog" class="form-select">${Data.programs.map((p) => `<option value="${p.id}" ${p.id === preProg ? "selected" : ""}>${p.name}</option>`).join("")}</select>
                </div>
                <div class="col-md-6">
                  <label class="form-label small fw-bold">Learning Mode</label>
                  <select id="en-mode" class="form-select"><option value="Online">Online Live</option><option value="Offline Center">In-Center</option></select>
                </div>
                <div class="col-md-6">
                  <label class="form-label small fw-bold">Preferred Schedule</label>
                  <select id="en-sched" class="form-select"><option>Tue &amp; Thu • 5:00 PM</option><option>Mon &amp; Wed • 4:30 PM</option><option>Sat &amp; Sun • 10:30 AM</option></select>
                </div>
                <div class="col-12">
                  <label class="form-label small fw-bold">Additional Notes</label>
                  <textarea id="en-notes" class="form-control" rows="2" placeholder="Optional learning preferences..."></textarea>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn-ms btn-ms-primary">Submit Demo Enrollment</button>
                </div>
              </div>
              <div id="en-feedback" class="mt-3"></div>
            </form>
          </div>
        </div>

        <div class="col-lg-5">
          <div class="dash-stat-card" id="en-summary-card"></div>
        </div>

        <div class="col-12">
          <div class="dash-stat-card">
            <h5 class="mb-3">Demo Enrollment Records</h5>
            <div class="table-responsive">
              <table class="table align-middle mb-0">
                <thead><tr><th>Reference</th><th>Child</th><th>Program</th><th>Mode</th><th>Schedule</th><th>Status</th></tr></thead>
                <tbody>
                  ${enrolls.map((e) => `<tr><td class="fw-bold">${e.ref}</td><td>${e.childName}</td><td>${e.programName}</td><td>${e.mode}</td><td>${e.schedule}</td><td><span class="badge-demo">${e.status}</span></td></tr>`).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;

    const progSel = document.getElementById("en-prog");
    function updateSummary() {
      const p = Data.programs.find((x) => x.id === progSel.value) || Data.programs[0];
      document.getElementById("en-summary-card").innerHTML = `
        <span class="badge-pill-ms mb-2">${p.type} • ${p.level}</span>
        <h5 class="mb-2">${p.name}</h5>
        <p class="small text-secondary-ms">${p.description}</p>
        <ul class="small mb-3">${p.objectives.map((o) => `<li>${o}</li>`).join("")}</ul>
        <div class="p-3 rounded-3 bg-surface-alt border small">
          <div><strong>Duration:</strong> ${p.duration} (${p.frequency})</div>
          <div><strong>Sample Fee:</strong> ${p.fee}</div>
        </div>
      `;
    }
    progSel.addEventListener("change", updateSummary);
    updateSummary();

    document.getElementById("dash-enroll-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const p = Data.programs.find((x) => x.id === progSel.value);
      const ref = "ENR-2026-" + Math.floor(500 + Math.random() * 499);
      const list = getEnrollments();
      list.unshift({
        ref,
        childName: document.getElementById("en-child").value,
        programName: p.name,
        level: p.level,
        mode: document.getElementById("en-mode").value,
        schedule: document.getElementById("en-sched").value,
        fee: `$${p.feeAmount}`,
        status: "Enrolled (Demo)",
        date: "Nov 12, 2026"
      });
      Store.set(Store.KEYS.ENROLLMENTS, list);
      renderModule("enroll");
    });
  }

  // MODULE 4: LEARNING PROGRESS
  function renderProgress(host) {
    const children = getChildren();
    const c = children[0] || { name: "Demo Learner", level: "Level 4", progress: 78, accuracy: 94, weeklyHours: 4.5, feedback: "Great focus!" };
    host.innerHTML = `
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <span class="badge-demo mb-1">Sample Learning Analytics (Demo Data)</span>
          <h4 class="mb-0">Learning Progress — ${c.name}</h4>
        </div>
      </div>

      <div class="row g-3 mb-4">
        <div class="col-6 col-lg-3"><div class="dash-stat-card"><div class="small text-muted-ms">Current Level</div><div class="fs-3 fw-black text-purple display-font">${c.level}</div></div></div>
        <div class="col-6 col-lg-3"><div class="dash-stat-card"><div class="small text-muted-ms">Overall Progress</div><div class="fs-3 fw-black text-coral display-font">${c.progress}%</div></div></div>
        <div class="col-6 col-lg-3"><div class="dash-stat-card"><div class="small text-muted-ms">Calculation Accuracy</div><div class="fs-3 fw-black text-purple display-font">${c.accuracy}%</div></div></div>
        <div class="col-6 col-lg-3"><div class="dash-stat-card"><div class="small text-muted-ms">Weekly Activity</div><div class="fs-3 fw-black text-yellow display-font">${c.weeklyHours} hrs</div></div></div>
      </div>

      <div class="row g-4">
        <div class="col-lg-7">
          <div class="dash-stat-card">
            <h5 class="mb-3">Weekly Accuracy Trend (Sample Chart)</h5>
            <svg viewBox="0 0 500 180" class="w-100" style="max-height:200px;">
              <polyline fill="none" stroke="#5736A8" stroke-width="4" points="30,140 110,115 190,120 270,85 350,65 450,40"/>
              <circle cx="30" cy="140" r="6" fill="#FFC83D"/>
              <circle cx="110" cy="115" r="6" fill="#FFC83D"/>
              <circle cx="190" cy="120" r="6" fill="#FFC83D"/>
              <circle cx="270" cy="85" r="6" fill="#FFC83D"/>
              <circle cx="350" cy="65" r="6" fill="#FFC83D"/>
              <circle cx="450" cy="40" r="7" fill="#FF786B"/>
              <text x="20" y="170" font-size="11" fill="currentColor">Wk 1</text>
              <text x="100" y="170" font-size="11" fill="currentColor">Wk 2</text>
              <text x="180" y="170" font-size="11" fill="currentColor">Wk 3</text>
              <text x="260" y="170" font-size="11" fill="currentColor">Wk 4</text>
              <text x="340" y="170" font-size="11" fill="currentColor">Wk 5</text>
              <text x="440" y="170" font-size="11" fill="currentColor">Wk 6</text>
            </svg>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="dash-stat-card">
            <h5 class="mb-3">Instructor Feedback &amp; Badges</h5>
            <div class="p-3 rounded-3 bg-surface-alt border mb-3 small">“${c.feedback}”</div>
            <div class="d-flex flex-wrap gap-2">
              <span class="badge-pill-ms">Focus Star</span>
              <span class="badge-pill-ms">90%+ Accuracy</span>
              <span class="badge-pill-ms">Level 3 Completed</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // MODULE 5: CLASS SCHEDULE
  function renderSchedule(host) {
    const schedules = getSchedules();
    host.innerHTML = `
      <div class="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <span class="badge-demo mb-1">Demo Schedule Records</span>
          <h4 class="mb-0">Class Schedule</h4>
        </div>
        <div class="d-flex gap-2">
          <button class="btn-ms ${scheduleView === "list" ? "btn-ms-primary" : "btn-ms-outline"} py-2 px-3" id="sch-list-btn">List View</button>
          <button class="btn-ms ${scheduleView === "calendar" ? "btn-ms-primary" : "btn-ms-outline"} py-2 px-3" id="sch-cal-btn">Weekly Grid</button>
        </div>
      </div>

      ${scheduleView === "list" ? `
        <div class="dash-stat-card">
          <div class="table-responsive">
            <table class="table align-middle mb-0">
              <thead><tr><th>Class</th><th>Child</th><th>Instructor</th><th>Date &amp; Time</th><th>Mode</th><th>Status</th><th></th></tr></thead>
              <tbody>
                ${schedules.map((s) => `
                  <tr>
                    <td class="fw-bold">${s.title}</td>
                    <td>${s.child}</td>
                    <td>${s.instructor}</td>
                    <td>${s.date} • ${s.time}</td>
                    <td>${s.mode}</td>
                    <td><span class="badge-demo">${s.status}</span></td>
                    <td><button class="btn btn-sm btn-outline-primary sch-det-btn" data-id="${s.id}">Details</button></td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      ` : `
        <div class="row g-3">
          ${schedules.map((s) => `
            <div class="col-md-4">
              <div class="dash-stat-card">
                <span class="badge-demo mb-2">${s.status}</span>
                <h6>${s.title}</h6>
                <div class="small text-muted-ms mb-2">${s.date} • ${s.time}</div>
                <div class="small">${s.child} • ${s.instructor}</div>
              </div>
            </div>
          `).join("")}
        </div>
      `}
    `;

    document.getElementById("sch-list-btn").addEventListener("click", () => { scheduleView = "list"; renderModule("schedule"); });
    document.getElementById("sch-cal-btn").addEventListener("click", () => { scheduleView = "calendar"; renderModule("schedule"); });
    document.querySelectorAll(".sch-det-btn").forEach((b) => {
      b.addEventListener("click", () => {
        const s = schedules.find((x) => x.id === b.getAttribute("data-id"));
        showModal(s.title, `<p><strong>Student:</strong> ${s.child}</p><p><strong>Instructor:</strong> ${s.instructor}</p><p><strong>When:</strong> ${s.date} (${s.time})</p><p><strong>Mode:</strong> ${s.mode}</p><p><strong>Status:</strong> ${s.status}</p>`);
      });
    });
  }

  // MODULE 6: COMPETITIONS
  function renderCompetitions(host) {
    const regs = getCompRegs();
    const children = getChildren();
    host.innerHTML = `
      <span class="badge-demo mb-2">Demo Competitions</span>
      <h4 class="mb-4">Registered &amp; Available Events</h4>
      <div class="row g-4 mb-4">
        ${Data.competitions.map((c) => `
          <div class="col-md-6">
            <div class="dash-stat-card d-flex flex-column">
              <div class="d-flex justify-content-between mb-2"><span class="badge-pill-ms py-1 px-3">${c.date}</span><span class="small text-muted-ms">${c.level}</span></div>
              <h5>${c.name}</h5>
              <p class="small text-secondary-ms mb-3">${c.summary}</p>
              <button class="btn-ms btn-ms-primary py-2 px-3 mt-auto align-self-start dash-reg-comp" data-id="${c.id}">Register Child (Demo)</button>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="dash-stat-card">
        <h5 class="mb-3">My Registered Demo Events</h5>
        <div class="table-responsive">
          <table class="table align-middle mb-0">
            <thead><tr><th>Competition</th><th>Child</th><th>Level</th><th>Date</th><th>Status</th></tr></thead>
            <tbody>
              ${regs.map((r) => `<tr><td class="fw-bold">${r.compName}</td><td>${r.childName}</td><td>${r.level}</td><td>${r.date}</td><td><span class="badge-demo">${r.status}</span></td></tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;

    document.querySelectorAll(".dash-reg-comp").forEach((b) => {
      b.addEventListener("click", () => {
        const comp = Data.competitions.find((x) => x.id === b.getAttribute("data-id"));
        const child = children[0] || { name: "Demo Child", level: "Level 1" };
        regs.unshift({ id: "creg-" + Date.now(), compId: comp.id, compName: comp.name, childName: child.name, level: child.level, date: comp.date, status: "Registered (Demo)" });
        Store.set(Store.KEYS.COMPETITIONS, regs);
        renderModule("competitions");
      });
    });
  }

  // MODULE 7: FEE PAYMENTS
  function renderPayments(host) {
    const payments = getPayments();
    const total = payments.reduce((s, p) => s + p.amount, 0);
    const paid = payments.filter((p) => p.status.includes("Paid")).reduce((s, p) => s + p.amount, 0);
    const pending = total - paid;

    host.innerHTML = `
      <div class="alert alert-warning small mb-4">
        <strong>Demo Payments Only:</strong> No real card details are collected or processed. Payment gateway integration is reserved as a future backend integration point.
      </div>
      <div class="row g-3 mb-4">
        <div class="col-md-4"><div class="dash-stat-card"><div class="small text-muted-ms">Total Sample Fees</div><div class="fs-2 fw-black text-purple display-font">$${total}</div></div></div>
        <div class="col-md-4"><div class="dash-stat-card"><div class="small text-muted-ms">Amount Paid (Demo)</div><div class="fs-2 fw-black text-success display-font">$${paid}</div></div></div>
        <div class="col-md-4"><div class="dash-stat-card"><div class="small text-muted-ms">Pending Amount (Demo)</div><div class="fs-2 fw-black text-coral display-font">$${pending}</div></div></div>
      </div>

      <div class="dash-stat-card">
        <h5 class="mb-3">Demo Payment History</h5>
        <div class="table-responsive">
          <table class="table align-middle mb-0">
            <thead><tr><th>Transaction ID</th><th>Child</th><th>Program</th><th>Date</th><th>Amount</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              ${payments.map((p, idx) => `
                <tr>
                  <td class="fw-bold">${p.txId}</td>
                  <td>${p.child}</td>
                  <td>${p.program}</td>
                  <td>${p.date}</td>
                  <td>$${p.amount}</td>
                  <td><span class="badge-demo">${p.status}</span></td>
                  <td class="d-flex gap-2">
                    <button class="btn btn-sm btn-outline-primary view-rcpt-btn" data-idx="${idx}">Receipt</button>
                    <button class="btn btn-sm btn-outline-secondary dl-inv-btn" data-idx="${idx}">Invoice</button>
                    ${p.status.includes("Pending") ? `<button class="btn btn-sm btn-success mark-paid-btn" data-idx="${idx}">Demo Pay</button>` : ""}
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;

    document.querySelectorAll(".view-rcpt-btn").forEach((b) => {
      b.addEventListener("click", () => {
        const p = payments[b.getAttribute("data-idx")];
        showModal("Sample Fee Receipt (Demo)", `<p><strong>Transaction:</strong> ${p.txId}</p><p><strong>Student:</strong> ${p.child}</p><p><strong>Program:</strong> ${p.program}</p><p><strong>Amount:</strong> $${p.amount}</p><p><strong>Status:</strong> ${p.status}</p>`);
      });
    });

    document.querySelectorAll(".dl-inv-btn").forEach((b) => {
      b.addEventListener("click", () => {
        const p = payments[b.getAttribute("data-idx")];
        const content = `MINDSPARK ACADEMY - SAMPLE DEMO INVOICE\nTransaction ID: ${p.txId}\nStudent: ${p.child}\nProgram: ${p.program}\nDate: ${p.date}\nAmount: $${p.amount}\nStatus: ${p.status}\n\nNote: Demonstration invoice only. Not a real financial receipt.`;
        const blob = new Blob([content], { type: "text/plain" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `${p.txId}-sample-invoice.txt`;
        a.click();
      });
    });

    document.querySelectorAll(".mark-paid-btn").forEach((b) => {
      b.addEventListener("click", () => {
        payments[b.getAttribute("data-idx")].status = "Paid (Demo)";
        payments[b.getAttribute("data-idx")].date = "Nov 12, 2026";
        Store.set(Store.KEYS.PAYMENTS, payments);
        renderModule("payments");
      });
    });
  }

  // MODULE 8: NOTIFICATIONS
  function renderNotifications(host) {
    const notifs = getNotifs();
    host.innerHTML = `
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div><span class="badge-demo mb-1">Demo Alerts</span><h4 class="mb-0">Notifications</h4></div>
        <div class="d-flex gap-2">
          <button class="btn-ms btn-ms-outline py-2 px-3" id="mark-all-read">Mark All Read</button>
          <button class="btn-ms btn-ms-coral py-2 px-3" id="clear-notifs">Clear Demo Notifications</button>
        </div>
      </div>
      <div class="d-flex flex-column gap-3">
        ${notifs.length ? notifs.map((n, i) => `
          <div class="dash-stat-card d-flex justify-content-between align-items-center gap-3 ${n.read ? "opacity-75" : ""}">
            <div>
              <span class="badge-pill-ms py-1 px-2 mb-1" style="font-size:0.72rem;">${n.type}</span>
              <div class="fw-bold">${n.title}</div>
              <div class="small text-muted-ms">${n.time} • ${n.read ? "Read" : "Unread"}</div>
            </div>
            ${!n.read ? `<button class="btn btn-sm btn-outline-primary mark-one-btn" data-idx="${i}">Mark Read</button>` : ""}
          </div>
        `).join("") : `<div class="dash-stat-card text-center py-5">No demo notifications remaining.</div>`}
      </div>
    `;

    document.getElementById("mark-all-read").addEventListener("click", () => {
      notifs.forEach((n) => (n.read = true));
      Store.set(Store.KEYS.NOTIFICATIONS, notifs);
      renderModule("notifications");
    });
    document.getElementById("clear-notifs").addEventListener("click", () => {
      Store.set(Store.KEYS.NOTIFICATIONS, []);
      renderModule("notifications");
    });
    document.querySelectorAll(".mark-one-btn").forEach((b) => {
      b.addEventListener("click", () => {
        notifs[b.getAttribute("data-idx")].read = true;
        Store.set(Store.KEYS.NOTIFICATIONS, notifs);
        renderModule("notifications");
      });
    });
  }

  // MODULE 9: MY PROFILE
  function renderProfile(host) {
    const auth = getAuth();
    host.innerHTML = `
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="dash-stat-card p-4">
            <div class="d-flex align-items-center gap-3 mb-4">
              <img src="assets/images/avatar-parent.svg" alt="Parent Avatar" width="68" height="68" class="rounded-circle">
              <div>
                <span class="badge-demo mb-1">Demo Parent Profile</span>
                <h4 class="mb-0">${auth.parentName}</h4>
                <div class="small text-muted-ms">Member since ${auth.joined}</div>
              </div>
            </div>
            <form id="profile-edit-form">
              <div class="row g-3">
                <div class="col-md-6"><label class="form-label small fw-bold">Parent Name</label><input type="text" id="pr-name" class="form-control" value="${auth.parentName}" required></div>
                <div class="col-md-6"><label class="form-label small fw-bold">Email</label><input type="email" id="pr-email" class="form-control" value="${auth.email}" required></div>
                <div class="col-md-6"><label class="form-label small fw-bold">Phone</label><input type="tel" id="pr-phone" class="form-control" value="${auth.phone}" required></div>
                <div class="col-md-6"><label class="form-label small fw-bold">City (Sample)</label><input type="text" id="pr-city" class="form-control" value="${auth.city || ""}"></div>
                <div class="col-12 d-flex gap-2 mt-3">
                  <button type="submit" class="btn-ms btn-ms-primary py-2 px-4">Save Changes</button>
                  <button type="button" class="btn-ms btn-ms-outline py-2 px-4" onclick="window.dashGo('overview')">Cancel</button>
                </div>
              </div>
              <div id="pr-feedback" class="mt-3"></div>
            </form>
          </div>
        </div>
      </div>
    `;

    document.getElementById("profile-edit-form").addEventListener("submit", (e) => {
      e.preventDefault();
      auth.parentName = document.getElementById("pr-name").value;
      auth.email = document.getElementById("pr-email").value;
      auth.phone = document.getElementById("pr-phone").value;
      auth.city = document.getElementById("pr-city").value;
      Store.set(Store.KEYS.AUTH, auth);
      updateHeaderBadges();
      document.getElementById("pr-feedback").innerHTML = `<div class="alert alert-success small mb-0">Demo profile saved!</div>`;
    });
  }

  window.dashGo = switchTab;

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".dash-nav-btn[data-tab]").forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.getAttribute("data-tab")));
    });

    const sidebar = document.getElementById("dash-sidebar");
    const backdrop = document.getElementById("dash-backdrop");
    document.getElementById("dash-open-sidebar").addEventListener("click", () => {
      sidebar.classList.add("open");
      backdrop.classList.add("show");
    });
    const closeFn = () => {
      sidebar.classList.remove("open");
      backdrop.classList.remove("show");
    };
    document.getElementById("dash-close-sidebar").addEventListener("click", closeFn);
    backdrop.addEventListener("click", closeFn);

    document.getElementById("dash-notif-shortcut").addEventListener("click", () => switchTab("notifications"));
    document.getElementById("dash-profile-shortcut").addEventListener("click", () => switchTab("profile"));
    document.getElementById("dash-logout-btn").addEventListener("click", () => {
      const auth = getAuth();
      auth.isLoggedIn = false;
      Store.set(Store.KEYS.AUTH, auth);
      window.location.href = "login.html";
    });

    const params = new URLSearchParams(window.location.search);
    const initialTab = params.get("tab") || "overview";
    switchTab(initialTab);
  });
})();

