/* ---------------------------------------------------
   STRIV WELLNESS APP – MAIN SCRIPT (ALL FEATURES)
--------------------------------------------------- */

/* ---------------------------
   PAGE DETECTION
--------------------------- */
const page = document.body.classList.contains("app-page")
  ? window.location.pathname.split("/").pop()
  : "index";

/* ---------------------------
   STORAGE HELPERS
--------------------------- */
function saveLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadLS(key, fallback) {
  return JSON.parse(localStorage.getItem(key)) || fallback;
}

/* ===================================================
   1. MENTAL PAGE — BREATHING + JOURNAL
=================================================== */
if (page === "MENTAL.HTML") {
  const circle = document.getElementById("breathingCircle");
  const breathText = document.getElementById("breathText");
  const startBreathing = document.getElementById("startBreathing");
  const stopBreathing = document.getElementById("stopBreathing");

  let breathingInterval;

  // Start breathing animation
  startBreathing.onclick = () => {
    circle.style.animation = "glow-breath 8s infinite";
    breathText.textContent = "Inhale… Hold… Exhale…";

    breathingInterval = setInterval(() => {
      breathText.textContent =
        ["Inhale…", "Hold…", "Exhale…"][Math.floor(Math.random() * 3)];
    }, 3000);
  };

  // Stop breathing animation
  stopBreathing.onclick = () => {
    circle.style.animation = "none";
    breathText.textContent = "Press start";
    clearInterval(breathingInterval);
  };

  /* -----------------------------
      JOURNAL SYSTEM
  ----------------------------- */
  const journalInput = document.getElementById("journalInput");
  const saveJournal = document.getElementById("saveJournal");
  const journalList = document.getElementById("journalList");

  function loadJournal() {
    const entries = loadLS("journalEntries", []);
    journalList.innerHTML =
      entries.length === 0
        ? "<p>No entries yet.</p>"
        : entries
            .slice()
            .reverse()
            .map((e) => `<p>• ${e}</p>`)
            .join("");
  }

  saveJournal.onclick = () => {
    if (journalInput.value.trim() === "") return;
    const entries = loadLS("journalEntries", []);
    entries.push(journalInput.value.trim());
    saveLS("journalEntries", entries);
    journalInput.value = "";
    loadJournal();
  };

  loadJournal();
}

/* ===================================================
   2. FITNESS PAGE — WORKOUT TIMER
=================================================== */
if (page === "FITNESS.HTML") {
  const timerDisplay = document.getElementById("workoutTimer");
  const workoutStep = document.getElementById("workoutStep");
  const startWorkout = document.getElementById("startWorkout");
  const stopWorkout = document.getElementById("stopWorkout");

  let workoutTime = 300; // 5 minutes
  let workoutInterval;

  const steps = [
    "Jumping Jacks",
    "Squats",
    "Plank Hold",
    "High Knees",
    "Slow Breathing Cooldown",
  ];
  let stepIndex = 0;

  function updateTimer() {
    const m = String(Math.floor(workoutTime / 60)).padStart(2, "0");
    const s = String(workoutTime % 60).padStart(2, "0");
    timerDisplay.textContent = `${m}:${s}`;
  }

  // START WORKOUT
  startWorkout.onclick = () => {
    stepIndex = 0;
    workoutStep.textContent = steps[stepIndex];
    workoutTime = 300;
    updateTimer();

    workoutInterval = setInterval(() => {
      workoutTime--;
      updateTimer();

      if (workoutTime % 60 === 0 && stepIndex < steps.length - 1) {
        stepIndex++;
        workoutStep.textContent = steps[stepIndex];
      }

      if (workoutTime <= 0) {
        clearInterval(workoutInterval);
        workoutStep.textContent = "Workout Complete! 🎉";
      }
    }, 1000);
  };

  // STOP WORKOUT
  stopWorkout.onclick = () => {
    clearInterval(workoutInterval);
    workoutStep.textContent = "Workout stopped.";
  };
}

/* ===================================================
   3. TRACKER PAGE — MOOD, SLEEP, STREAK
=================================================== */
if (page === "TRACKER.HTML") {
  /* -------------------------
     MOOD TRACKING
  ------------------------- */
  const moodRange = document.getElementById("moodRange");
  const moodValue = document.getElementById("moodValue");
  const saveMood = document.getElementById("saveMood");
  const stateList = document.getElementById("stateList");

  moodRange.oninput = () => {
    moodValue.textContent = moodRange.value;
  };

  function loadMoodHistory() {
    const history = loadLS("moodHistory", []);
    stateList.innerHTML =
      history.length === 0
        ? "<p>No entries.</p>"
        : history
            .slice()
            .reverse()
            .map((h) => `<p>${h.time} — Mood: ${h.value}</p>`)
            .join("");
  }

  saveMood.onclick = () => {
    const history = loadLS("moodHistory", []);
    history.push({
      time: new Date().toLocaleString(),
      value: moodRange.value,
    });
    saveLS("moodHistory", history);
    increaseStreak();
    loadMoodHistory();
  };

  loadMoodHistory();

  /* -------------------------
     SLEEP TRACKING
  ------------------------- */
  const sleepHours = document.getElementById("sleepHours");
  const saveSleep = document.getElementById("saveSleep");
  const sleepList = document.getElementById("sleepList");

  function loadSleepHistory() {
    const history = loadLS("sleepHistory", []);
    sleepList.innerHTML =
      history.length === 0
        ? "<p>No entries.</p>"
        : history
            .slice()
            .reverse()
            .map((h) => `<p>${h.time} — Slept: ${h.hours} hrs</p>`)
            .join("");
  }

  saveSleep.onclick = () => {
    if (!sleepHours.value) return;
    const history = loadLS("sleepHistory", []);
    history.push({
      time: new Date().toLocaleDateString(),
      hours: sleepHours.value,
    });
    saveLS("sleepHistory", history);
    increaseStreak();
    loadSleepHistory();
  };

  loadSleepHistory();

  /* -------------------------
     STREAK SYSTEM
  ------------------------- */
  const streakCount = document.getElementById("streakCount");

  function increaseStreak() {
    const today = new Date().toLocaleDateString();
    const lastDay = loadLS("lastStreakDay", null);
    let streak = loadLS("streak", 0);

    if (today !== lastDay) {
      streak++;
      saveLS("streak", streak);
      saveLS("lastStreakDay", today);
    }

    streakCount.textContent = streak + " days";
  }

  increaseStreak();
}

/* ===================================================
   4. COMMUNITY PAGE — CHALLENGES + LEADERBOARD
=================================================== */
if (page === "COMMUNITY.HTML") {
  const joinChallenge = document.getElementById("joinChallenge");
  const userPoints = document.getElementById("userPoints");
  const leaderboardList = document.getElementById("leaderboardList");

  function updateLeaderboard() {
    const points = loadLS("points", 0);
    leaderboardList.innerHTML = `<p><strong>You:</strong> ${points} pts</p>`;
    userPoints.textContent = points;
  }

  joinChallenge.onclick = () => {
    let points = loadLS("points", 0);
    points += 10;
    saveLS("points", points);
    updateLeaderboard();
  };

  updateLeaderboard();
}

/* ===================================================
   END OF SCRIPT
=================================================== */
/* End of script.js */