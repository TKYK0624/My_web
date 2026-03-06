const title = document.querySelector('.floating-title');
const text = title.textContent;
title.innerHTML = text.split('').map(char => 
  `<span>${char === ' ' ? '&nbsp;' : char}</span>`
).join('');

const cursor = document.querySelector('.custom-cursor');

document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.custom-cursor');
  
  // 檢查元素是否存在，避免報錯
  if (!cursor) return;

  // 1. GSAP 高性能移動設定
  const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3.out" });
  const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3.out" });

  document.addEventListener("mousemove", e => {
    // 扣除 10 是因為圓點寬高是 20，這樣才會中心對齊
    xTo(e.clientX - 10);
    yTo(e.clientY - 10);
  });

  // 2. 互動偵測：把所有你想互動的 class 都放進來
  const hoverTargets = document.querySelectorAll('a, .nav-button, .portfolio-card, .portrait');

  hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
      gsap.to(cursor, { 
        scale: 1.5,           // 從 2.5 調降到 1.5，視覺上更精緻
        backgroundColor: "rgba(74, 74, 74, 0.15)", // 稍微加深一點點，避免太淡看不見
        duration: 0.3,
        overwrite: "auto" 
      });
    });

    target.addEventListener('mouseleave', () => {
      gsap.to(cursor, { 
        scale: 1, 
        backgroundColor: "rgba(74, 74, 74, 0.3)", 
        duration: 0.3,
        overwrite: "auto"
      });
    });
  });

  // 3. 解決你說的「變黑」與「卡住」問題
  // 如果滑鼠點擊時，給予一點回饋
  document.addEventListener("mousedown", () => {
    gsap.to(cursor, { scale: 0.8, duration: 0.1 });
  });
  document.addEventListener("mouseup", () => {
    gsap.to(cursor, { scale: 1, duration: 0.1 });
  });
});

function copyAndNotify(event) {
  const email = "s211035@stu.tcssh.tc.edu.tw";
  
  // 執行複製動作
  navigator.clipboard.writeText(email).then(() => {
    // 這裡我們不用笨重的 alert，改用 console 或是自定義提示
    // 為了專業感，我們在游標旁邊或畫面上顯示一個短暫的提示
    showToast("Email 已複製");
  });
  
  // 不使用 event.preventDefault()，所以瀏覽器仍會嘗試執行 href="mailto:..."
}

// 建立一個簡單的提示功能
function showToast(message) {
  const toast = document.createElement("div");
  toast.innerText = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(51, 51, 51, 0.9);
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    z-index: 10001;
    font-size: 14px;
    pointer-events: none;
  `;
  document.body.appendChild(toast);
  
  // 2秒後自動消失
  gsap.to(toast, { opacity: 0, y: 20, delay: 2, onComplete: () => toast.remove() });
}

const projectData = {
  'model': { title: '3D Modeling', desc: 'Blender 建模細節...' },
  'game': { title: 'Game Development', desc: '遊戲引擎實作過程...' }
};

function openProject(id) {
  const data = projectData[id];
  if (data) {
    // 這裡處理顯示邏輯，例如彈出視窗
    console.log("正在開啟：" + data.title);
  }
}