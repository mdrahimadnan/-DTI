document.addEventListener("DOMContentLoaded", () => {

  const exercises = [

    {
      id:1, 
      title:"Surya Namaskar",
      timeSec:40, 
      difficulty:"Easy",
      img:"https://cdn-icons-png.flaticon.com/512/2937/2937838.png",
      desc:"A complete warm-up yoga flow.",
      howto:["Stand straight","Raise arms","Forward bend","Plank → Cobra → Downward Dog","Repeat"],
      benefits:["Warm-up","Flexibility"],
      link:"https://youtu.be/SzXGTT_8C0Y"
    },

    {
      id:2,
      title:"Cat–Cow Stretch",
      timeSec:30,
      difficulty:"Easy",
      img:"https://cdn-icons-png.flaticon.com/512/4327/4327932.png",
      desc:"Spine mobilizing yoga posture.",
      howto:["Get on all fours","Arch your back","Drop belly","Repeat"],
      benefits:["Back mobility","Relaxation"],
      link:"https://youtu.be/kqnua4rHVVA"
    },

    {
      id:3,
      title:"Downward Dog",
      timeSec:30,
      difficulty:"Medium",
      img:"https://cdn-icons-png.flaticon.com/512/3043/3043939.png",
      desc:"Stretch for whole body.",
      howto:["Lift hips up","Press heels down","Hold posture"],
      benefits:["Back stretch","Hamstring stretch"],
      link:"https://youtu.be/Zn8y7zQW5mI"
    },

    {
      id:4,
      title:"Plank Hold",
      timeSec:30,
      difficulty:"Medium",
      img:"https://cdn-icons-png.flaticon.com/512/4327/4327901.png",
      desc:"Core strengthening move.",
      howto:["Get into plank","Keep body straight","Tighten core"],
      benefits:["Core strength","Stability"],
      link:"https://youtu.be/pSHjTRCQxIw"
    },

    {
      id:5,
      title:"Bridge Pose",
      timeSec:30,
      difficulty:"Easy",
      img:"https://cdn-icons-png.flaticon.com/512/3043/3043920.png",
      desc:"Strengthens glutes & lower back.",
      howto:["Lie down","Lift hips","Hold"],
      benefits:["Glutes","Back"],
      link:"https://youtu.be/gx5n8b6E79Y"
    },

    {
      id:6,
      title:"Jumping Jacks",
      timeSec:20,
      difficulty:"Easy",
      img:"https://cdn-icons-png.flaticon.com/512/1048/1048949.png",
      desc:"Basic cardio warm-up.",
      howto:["Jump out","Jump in"],
      benefits:["Cardio"],
      link:"https://youtu.be/c4DAnQ6DtF8"
    },

    {
      id:7,
      title:"High Knees",
      timeSec:25,
      difficulty:"Medium",
      img:"https://cdn-icons-png.flaticon.com/512/565/565486.png",
      desc:"Boosts heart rate quickly.",
      howto:["Run in place","Lift knees high"],
      benefits:["Cardio","Stamina"],
      link:"https://youtu.be/OAJ_J3EZkdY"
    },

    {
      id:8,
      title:"Mountain Climbers",
      timeSec:30,
      difficulty:"Hard",
      img:"https://cdn-icons-png.flaticon.com/512/1046/1046860.png",
      desc:"Total body movement.",
      howto:["Plank position","Alternate knees"],
      benefits:["Abs","Cardio"],
      link:"https://youtu.be/cnyTQDSE884"
    },

    {
      id:9,
      title:"Burpees",
      timeSec:30,
      difficulty:"Hard",
      img:"https://cdn-icons-png.flaticon.com/512/3043/3043919.png",
      desc:"Explosive full-body cardio.",
      howto:["Squat","Kick back","Pushup","Jump"],
      benefits:["Fat burn"],
      link:"https://youtu.be/dZgVxmf6jkA"
    },

    {
      id:10,
      title:"Squats",
      timeSec:35,
      difficulty:"Easy",
      img:"https://cdn-icons-png.flaticon.com/512/1046/1046870.png",
      desc:"Strengthens legs & glutes.",
      howto:["Sit back","Stand up"],
      benefits:["Legs","Glutes"],
      link:"https://youtu.be/aclHkVaku9U"
    },

    {
      id:11,
      title:"Lunges",
      timeSec:35,
      difficulty:"Medium",
      img:"https://cdn-icons-png.flaticon.com/512/1046/1046882.png",
      desc:"Full leg workout.",
      howto:["Step forward","Lower knee","Alternate"],
      benefits:["Balance","Legs"],
      link:"https://youtu.be/QOVaa9zA3xw"
    },

    {
      id:12,
      title:"Pushups",
      timeSec:25,
      difficulty:"Medium",
      img:"https://cdn-icons-png.flaticon.com/512/1046/1046865.png",
      desc:"Upper body classic move.",
      howto:["Lower chest","Push up"],
      benefits:["Chest","Arms"],
      link:"https://youtu.be/_l3ySVKYVJ8"
    },

    {
      id:13,
      title:"Bicycle Crunches",
      timeSec:30,
      difficulty:"Medium",
      img:"https://cdn-icons-png.flaticon.com/512/1046/1046854.png",
      desc:"Targets upper & lower abs.",
      howto:["Elbow to knee","Switch sides"],
      benefits:["Abs"],
      link:"https://youtu.be/9FGilxCbdz8"
    },

    {
      id:14,
      title:"Russian Twists",
      timeSec:25,
      difficulty:"Medium",
      img:"https://cdn-icons-png.flaticon.com/512/4333/4333473.png",
      desc:"Rotational ab workout.",
      howto:["Sit down","Twist left-right"],
      benefits:["Obliques"],
      link:"https://youtu.be/wkD8rjkodUI"
    },

    {
      id:15,
      title:"Skaters",
      timeSec:30,
      difficulty:"Medium",
      img:"https://cdn-icons-png.flaticon.com/512/4333/4333445.png",
      desc:"Agility movement.",
      howto:["Hop sideways"],
      benefits:["Legs","Cardio"],
      link:"https://youtu.be/YqmtzN1X5qg"
    },

    {
      id:16,
      title:"Butt Kicks",
      timeSec:25,
      difficulty:"Easy",
      img:"https://cdn-icons-png.flaticon.com/512/4333/4333463.png",
      desc:"Warm-up movement.",
      howto:["Run in place","Kick glutes"],
      benefits:["Warm-up"],
      link:"https://youtu.be/xc1T6L9zBZw"
    },

    {
      id:17,
      title:"Leg Raises",
      timeSec:30,
      difficulty:"Medium",
      img:"https://cdn-icons-png.flaticon.com/512/4333/4333446.png",
      desc:"Lower ab isolation.",
      howto:["Lift legs","Lower slowly"],
      benefits:["Lower abs"],
      link:"https://youtu.be/JB2oyawG9KI"
    },

    {
      id:18,
      title:"Plank Hold",
      timeSec:40,
      difficulty:"Hard",
      img:"https://cdn-icons-png.flaticon.com/512/1046/1046867.png",
      desc:"Core + endurance.",
      howto:["Hold plank steady"],
      benefits:["Core"],
      link:"https://youtu.be/pSHjTRCQxIw"
    },

    {
      id:19,
      title:"Shadow Boxing",
      timeSec:40,
      difficulty:"Medium",
      img:"https://cdn-icons-png.flaticon.com/512/4333/4333409.png",
      desc:"Cardio + coordination.",
      howto:["Jab","Cross","Hook","Repeat"],
      benefits:["Cardio"],
      link:"https://youtu.be/7z4EsESi7eE"
    },

    {
      id:20,
      title:"Side Plank",
      timeSec:35,
      difficulty:"Medium",
      img:"https://cdn-icons-png.flaticon.com/512/4333/4333449.png",
      desc:"Oblique strengthening.",
      howto:["Raise hips","Hold"],
      benefits:["Obliques"],
      link:"https://youtu.be/wqzrb67Dwf8"
    }

  ];

  /* ========= DOM ELEMENTS ========== */

  const list = document.getElementById("exerciseList");
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("popupClose");

  const popupImg = document.getElementById("popup-img");
  const popupTitle = document.getElementById("popup-title");
  const popupDesc = document.getElementById("popup-description");
  const popupHow = document.getElementById("popup-howto");
  const popupBen = document.getElementById("popup-benefits");
  const popupTime = document.getElementById("popup-time-est");
  const popupDiff = document.getElementById("popup-difficulty");
  const popupLink = document.getElementById("popup-link");

  const timerEl = document.getElementById("timer");
  const startBtn = document.getElementById("timerStart");
  const pauseBtn = document.getElementById("timerPause");
  const resetBtn = document.getElementById("timerReset");

  const doneBtn = document.getElementById("doneBtn");
  const nextBtn = document.getElementById("nextBtn");

  const progressFill = document.getElementById("progressFill");
  const progressPercent = document.getElementById("progressPercent");

  let current = 0;
  let timeLeft = 0;
  let timer = null;
  let completed = 0;

  /* ========= RENDER CARDS ========== */

  function renderCards(){
    list.innerHTML = "";
    exercises.forEach((ex,i)=>{
      const c = document.createElement("div");
      c.className="exercise-card";
      c.innerHTML = `
        <img src="${ex.img}" class="ex-icon">
        <h3>${ex.title}</h3>
        <p>${ex.desc}</p>
      `;
      c.onclick = ()=>openPopup(i);
      list.appendChild(c);
    });
  }

  renderCards();

  /* ========= OPEN POPUP ========== */

  function openPopup(i){
    current = i;
    const ex = exercises[i];

    popupImg.src = ex.img;
    popupTitle.textContent = ex.title;
    popupDesc.textContent = ex.desc;
    popupTime.textContent = ex.timeSec + " sec";
    popupDiff.textContent = ex.difficulty;
    popupLink.href = ex.link;

    popupHow.innerHTML = ex.howto.map(s=>`<li>${s}</li>`).join("");
    popupBen.innerHTML = ex.benefits.map(s=>`<li>${s}</li>`).join("");

    timeLeft = ex.timeSec;
    updateTimer();

    popup.classList.remove("hidden");
  }

  closeBtn.onclick = ()=>popup.classList.add("hidden");

  /* ========= TIMER ========= */

  function updateTimer(){
    const m = String(Math.floor(timeLeft/60)).padStart(2,"0");
    const s = String(timeLeft%60).padStart(2,"0");
    timerEl.textContent = `${m}:${s}`;
  }

  startBtn.onclick = ()=>{
    if(timer) return;
    timer = setInterval(()=>{
      timeLeft--;
      updateTimer();
      if(timeLeft <= 0){
        clearInterval(timer);
        timer=null;
        markDone();
      }
    },1000);
  };

  pauseBtn.onclick = ()=>{ clearInterval(timer); timer=null; };
  
  resetBtn.onclick = ()=>{
    timeLeft = exercises[current].timeSec;
    updateTimer();
  };

  /* ========= PROGRESS ========= */

  doneBtn.onclick = markDone;
  nextBtn.onclick = ()=>openPopup((current+1) % exercises.length);

  function markDone(){
    completed++;
    updateProgress();
    popup.classList.add("hidden");
  }

  function updateProgress(){
    const p = Math.round((completed/exercises.length) * 100);
    progressFill.style.width = p + "%";
    progressPercent.textContent = p + "%";
  }

});
