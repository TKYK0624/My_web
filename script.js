// --- 1. 全域資料與變數 (放最前面，確保所有函數都抓得到) ---
const projectData = {
    'model': {
        title: "3D Modeling",
        desc: "使用 Blender 進行建模與渲染，這是我第一個場景作品...",
        media: '<img src="https://i.ibb.co/ynQL8vyM/blender-gif-1.gif">'
    },
    'game': {
        title: "Game Development",
        desc: "這是一個 Unity 3D 遊戲，重點在於角色控制與物理互動...",
        media: '<video autoplay muted loop playsinline src="assets/mp4/unity/Unity_move_test.mp4"></video>'
    },
    'cpp': {
        title: "C++ Casino Simulation",
        desc: "基於 C++ 開發的後台模擬系統，串接了 Firebase Realtime Database...",
        media: '<video autoplay muted loop playsinline src="assets/mp4/other/C++asino_clip1.mp4"></video>'
    },
    'art': {
        title: "Digital Illustration",
        desc: "個人藝術創作與視覺設計...",
        media: '<div style="color:white; padding:20px;">作品上傳中...</div>'
    }
};

let currentKey = '';
const keys = Object.keys(projectData);

// --- 2. 初始化功能 (DOM 加載完成後執行) ---
document.addEventListener("DOMContentLoaded", () => {
    
    // A. 標題漂浮效果 (保持原有邏輯)
    const title = document.querySelector(".floating-title");
    if (title) {
        const text = title.textContent;
        title.innerHTML = text
            .split("")
            .map((char) => `<span>${char === " " ? "&nbsp;" : char}</span>`)
            .join("");
    }

    // B. 自定義游標邏輯 (含移動、縮放、點擊縮小)
    const cursor = document.querySelector(".custom-cursor");
    if (cursor) {
        // GSAP 移動設定
        const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3.out" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3.out" });

        document.addEventListener("mousemove", (e) => {
            xTo(e.clientX - 10);
            yTo(e.clientY - 10);
        });

        // 互動偵測 (MouseEnter / MouseLeave)
        const hoverTargets = document.querySelectorAll("a, .nav-button, .portfolio-card, .portrait, .close-btn, .nav-arrow");
        hoverTargets.forEach((target) => {
            target.addEventListener("mouseenter", () => {
                gsap.to(cursor, { scale: 1.5, backgroundColor: "rgba(74, 74, 74, 0.15)", duration: 0.3, overwrite: "auto" });
            });
            target.addEventListener("mouseleave", () => {
                gsap.to(cursor, { scale: 1, backgroundColor: "rgba(74, 74, 74, 0.3)", duration: 0.3, overwrite: "auto" });
            });
        });

        // 🟢 重新加入：滑鼠點擊時的縮小效果
        document.addEventListener("mousedown", () => {
            gsap.to(cursor, { scale: 0.8, duration: 0.1, overwrite: "auto" });
        });
        document.addEventListener("mouseup", () => {
            // 放開時判斷是否正在懸停在目標上，若在目標上則回到 1.5，否則回到 1
            const isHovering = Array.from(hoverTargets).some(el => el.matches(':hover'));
            gsap.to(cursor, { scale: isHovering ? 1.5 : 1, duration: 0.1, overwrite: "auto" });
        });
    }

    // C. 影片輪播邏輯
    function setupVideoLoop(videoId, sources) {
        const videoPlayer = document.getElementById(videoId);
        if (!videoPlayer || sources.length === 0) return;

        let currentVideoIndex = 0;
        const playNextVideo = () => {
            currentVideoIndex = (currentVideoIndex + 1) % sources.length;
            videoPlayer.src = sources[currentVideoIndex];
            videoPlayer.load();
            videoPlayer.play().catch((e) => console.log(`${videoId} 自動播放失敗:`, e));
        };

        videoPlayer.addEventListener("ended", playNextVideo);
        videoPlayer.addEventListener("error", playNextVideo);
    }

    // 啟動輪播
    setupVideoLoop("gameVideo", [
        "assets/mp4/unity/Unity_move_test.mp4",
        "assets/mp4/unity/Unity_slide_test.mp4",
        "assets/mp4/unity/Unity_interactive_test.mp4",
        "assets/mp4/unity/Unity_teleport_test.mp4"
    ]);

    setupVideoLoop("C++Video", [
        "assets/mp4/other/C++asino_clip1.mp4",
        "assets/mp4/other/Project2_clip2.mp4"
    ]);
});

// --- 3. Modal 彈窗控制全域函數 ---
function openProject(key) {
    if (!projectData[key]) return;
    currentKey = key;
    const data = projectData[key];
    
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-desc').innerText = data.desc;
    document.getElementById('modal-media-container').innerHTML = data.media;
    
    document.getElementById('project-modal').classList.add('active');
}

function closeProject() {
    document.getElementById('project-modal').classList.remove('active');
    document.getElementById('modal-media-container').innerHTML = ''; 
}

function nextProject() {
    let idx = (keys.indexOf(currentKey) + 1) % keys.length;
    openProject(keys[idx]);
}

function prevProject() {
    let idx = (keys.indexOf(currentKey) - 1 + keys.length) % keys.length;
    openProject(keys[idx]);
}

// --- 4. 複製與通知功能 ---
function copyAndNotify(event) {
    const email = "s211035@stu.tcssh.tc.edu.tw";
    navigator.clipboard.writeText(email).then(() => {
        showToast("Email 已複製");
    });
}

function showToast(message) {
    const toast = document.createElement("div");
    toast.innerText = message;
    toast.style.cssText = `position:fixed; bottom:20px; left:50%; transform:translateX(-50%); background:rgba(51,51,51,0.9); color:white; padding:10px 20px; border-radius:20px; z-index:10001; font-size:14px; pointer-events:none;`;
    document.body.appendChild(toast);
    gsap.to(toast, { opacity: 0, y: 20, delay: 2, onComplete: () => toast.remove() });
}