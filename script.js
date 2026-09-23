const btn = document.querySelector("#theme-btn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// ── 백엔드 API 연동 ──────────────────────────────
const API_URL = "https://mypage-backend-c3ui.onrender.com";

const setText = (id, value) => {
  document.getElementById(id).textContent = value;
};

async function loadProfile() {
  const status = document.getElementById("api-status");
  try {
    const res = await fetch(`${API_URL}/profile`);
    const p = await res.json();
    setText("name", p.name);
    setText("profile-role", p.role);
    setText("profile-intro", p.intro);
    setText("interest-role", p.interests.role);
    setText("interest-list", p.interests.items.map((i) => `• ${i}`).join("\n"));
    setText("project-role", p.project.role);
    setText("project-desc", p.project.desc);
    setText("project-highlight", p.project.highlight);
    setText("goal-role", p.goal.role);
    setText("goal-desc", p.goal.desc);
    setText("goal-highlight", p.goal.highlight);
    status.textContent = "✅ Render 백엔드 API(/profile)에서 불러온 정보입니다.";
  } catch (e) {
    status.textContent = "⚠️ 서버에 연결하지 못했습니다. 잠시 후 새로고침해 주세요.";
  }
}

loadProfile();