// --- 1. 作品集資料 ---
const projectData = {
    model: {
        items: [
            {
                title: "夢核場景製作",
                date: "2025/11/XX",
                desc: "在電腦課閒餘做的雛形",
                extra: "",
                type: "image",
                src: "https://res.cloudinary.com/df6doa3fi/image/upload/v1777338501/%E6%93%B7%E5%8F%96_fclv5y.png",
                caption: "場景建模"
            },
            {
                title: "夢核場景製作",
                date: "2025/12/05",
                desc: "加大後的場景",
                extra: "",
                type: "image",
                src: "https://res.cloudinary.com/df6doa3fi/image/upload/v1777338501/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-04-01_175917_krld71.png",
                caption: "場景建模"
            },
            {
                title: "夢核場景製作",
                date: "2025/12/05",
                desc: "做了一些漂浮的門(省略部分細節",
                extra: "",
                type: "image",
                src: "https://res.cloudinary.com/df6doa3fi/image/upload/v1777338500/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-04-01_175903_or6ftb.png",
                caption: "場景建模"
            },
            {
                title: "夢核場景製作",
                date: "2025/12/06",
                desc: "加了漂浮門和體積霧，讓光線更加立體",
                extra: "",
                type: "image",
                src: "https://res.cloudinary.com/df6doa3fi/image/upload/v1777338515/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-04-01_180258_cqriqs.png",
                caption: "場景建模"
            },
            {
                title: "夢核場景製作",
                date: "2025/12/07",
                desc: "最終結果",
                extra: "",
                type: "image",
                src: "https://res.cloudinary.com/df6doa3fi/image/upload/v1777338508/1_kwbfjj.png",
                caption: "場景建模"
            },
            {
                title: "夢核場景製作",
                date: "2025/12/08",
                desc: "試著加了點特效",
                extra: "",
                type: "image",
                src: "https://res.cloudinary.com/df6doa3fi/image/upload/v1777338509/%E6%88%90%E5%93%81_j1pydy.png",
                caption: "場景建模"
            },
            {
                title: "草地建模練習",
                date: "2026-03-15",
                desc: "用Displace把底部貼圖加上Texture（紋理），透過紋理的灰階數值來推擠頂點產生高低差。",
                extra: "(想試試看夣核場景中的大草原是怎麼做的",
                type: "image",
                src: "https://res.cloudinary.com/df6doa3fi/image/upload/v1777338501/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-25_190756_jz8tg7.png",
                caption: "物件建模練習"
            },
            {
                title: "草地建模練習",
                date: "2026-03-15",
                desc: "用毛髮粒子效果來模擬草地",
                extra: "",
                type: "image",
                src: "https://res.cloudinary.com/df6doa3fi/image/upload/v1777338515/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-26_005329_x8mbrx.png",
                caption: "物件建模練習"
            },
            {
                title: "草地建模練習",
                date: "2026-03-15",
                desc: "調整毛髮的長度、密度和隨機性，讓草地看起來更自然",
                extra: "",
                type: "image",
                src: "https://res.cloudinary.com/df6doa3fi/image/upload/v1777338504/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2026-03-25_190722_hntipu.png",
                caption: "物件建模練習"
            }
        ]
    },
    game: {
        items: [
            {
                title: "Deep Dream",
                date: "2026-01-07",
                desc: "角色控制測試，包含移動與跳躍。",
                extra: "",
                type: "video",
                src: "https://res.cloudinary.com/df6doa3fi/video/upload/v1777334502/UI%E8%88%87%E4%BA%92%E5%8B%95%E6%B8%AC%E8%A9%A6_epvqd6.mp4",
                caption: "控制測試"
            },
            {
                title: "Deep Dream",
                date: "2026-01-08",
                desc: "測試滑鏟與蹲下動作",
                extra: "",
                type: "video",
                src: "https://res.cloudinary.com/df6doa3fi/video/upload/v1777334486/%E6%BB%91%E9%8F%9F%E6%B8%AC%E8%A9%A6_smfgfl.mp4",
                caption: "控制測試"
            },
            {
                title: "Deep Dream",
                date: "2026-01-09",
                desc: "測試場景中物件互動與 UI 顯示",
                extra: "",
                type: "video",
                src: "https://res.cloudinary.com/df6doa3fi/video/upload/v1777334502/UI%E8%88%87%E4%BA%92%E5%8B%95%E6%B8%AC%E8%A9%A6_epvqd6.mp4",
                caption: "互動測試"
            },
            {
                title: "Deep Dream",
                date: "2026-01-11",
                desc: "測試場景傳送",
                extra: "",
                type: "video",
                src: "https://res.cloudinary.com/df6doa3fi/video/upload/v1777334506/%E5%A0%B4%E6%99%AF%E5%82%B3%E9%80%81%E6%B8%AC%E8%A9%A6_dkydri.mp4",
                caption: "互動測試"
            }
        ]
    },
    web: {
        items: [
            {
                title: "個人作品集網頁",
                date: "2026-04-27",
                desc: "使用 HTML5, CSS3 與 JavaScript 打造的響應式作品集網站。",
                extra: "<ul><li>GSAP 動畫效果整合</li><li>自定義彈窗 UI 系統</li><li>響應式佈局設計 (Mobile Friendly)</li></ul>",
                type: "image",
                src: "你的網頁截圖路徑", 
                caption: "Web Design 界面展示"
            },
            {
                title: "剪切網頁 AxonCut",
                date: "2026-01-11",
                desc: "選修課製作的網頁影音剪切工具",
                extra: "",
                type: "video",
                src: "https://res.cloudinary.com/df6doa3fi/video/upload/v1777334506/%E5%A0%B4%E6%99%AF%E5%82%B3%E9%80%81%E6%B8%AC%E8%A9%A6_dkydri.mp4",
                caption: "音檔剪切測試"
            },
            {
                title: "剪切網頁 AxonCut",
                date: "2026-01-11",
                desc: "",
                extra: "",
                type: "video",
                src: "https://res.cloudinary.com/df6doa3fi/video/upload/v1777336117/2026-04-19_12-10-10_xble6k.mp4https://res.cloudinary.com/df6doa3fi/video/upload/v1777336112/2026-04-19_12-18-42_ja8ksw.mp4",
                caption: "影片檔剪輯測試"
            }
        ]
    },
    art: {
        items: [
            {
                title: "",
                date: "",
                desc: "",
                extra: "",
                type: "image",
                src: "",
                caption: ""
            },
            {
                title: "",
                date: "",
                desc: "",
                extra: "",
                type: "image",
                src: "",
                caption: ""
            }
        ]
    }
};

let currentCollectionKey = "";
let currentItemIndex = 0;

function renderCollectionItem(collectionKey, itemIndex) {
    const project = projectData[collectionKey];
    if (!project) return;
    const item = project.items[itemIndex] || project.items[0];

    const modalDate = document.getElementById("modal-date");
    const modalDesc = document.getElementById("modal-desc");
    const modalExtra = document.getElementById("modal-extra");
    const modalMediaContainer = document.getElementById("modal-media-container");
    const modalItemCaption = document.getElementById("modal-item-caption");

    modalDate.textContent = item.date || project.date || "";
    modalDesc.innerHTML = item.desc || project.desc || "";
    modalExtra.innerHTML = item.extra || project.extra || "";
    modalItemCaption.textContent = item.caption || "";

    const modalTitle = document.getElementById("modal-title");
    modalTitle.textContent = item.title || project.title || "";

    if (item.type === "video") {
        modalMediaContainer.innerHTML = `<video autoplay loop playsinline src="${item.src}"></video>`;
    } else {
        modalMediaContainer.innerHTML = `<img src="${item.src}" alt="${project.title}" />`;
    }

    const video = modalMediaContainer.querySelector("video");
    if (video) {
        video.play().catch(() => {});
    }
}

function openCollection(collectionKey) {
    currentCollectionKey = collectionKey;
    currentItemIndex = 0;
    renderCollectionItem(collectionKey, currentItemIndex);

    const modal = document.getElementById("project-modal");
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
}

function prevCollectionItem() {
    if (!currentCollectionKey) return;
    const items = projectData[currentCollectionKey].items;
    currentItemIndex = (currentItemIndex - 1 + items.length) % items.length;
    renderCollectionItem(currentCollectionKey, currentItemIndex);
}

function nextCollectionItem() {
    if (!currentCollectionKey) return;
    const items = projectData[currentCollectionKey].items;
    currentItemIndex = (currentItemIndex + 1) % items.length;
    renderCollectionItem(currentCollectionKey, currentItemIndex);
}

// --- 2. 初始化功能 ---
document.addEventListener("DOMContentLoaded", () => {
    // A. 標題漂浮效果 (打散文字成 span)
    const title = document.querySelector(".floating-title");
    if (title) {
        const text = title.textContent;
        title.innerHTML = text
            .split("")
            .map((char) => `<span>${char === " " ? "&nbsp;" : char}</span>`)
            .join("");
    }

    // B. 影片輪播邏輯
    function setupVideoLoop(videoId, sources) {
        const videoPlayer = document.getElementById(videoId);
        if (!videoPlayer || sources.length === 0) return;

        let currentVideoIndex = 0;
        const playNextVideo = () => {
            currentVideoIndex = (currentVideoIndex + 1) % sources.length;
            videoPlayer.src = sources[currentVideoIndex];
            videoPlayer.load();
            videoPlayer.play().catch(() => {});
        };

        videoPlayer.addEventListener("ended", playNextVideo);
        videoPlayer.addEventListener("error", playNextVideo);
    }

    setupVideoLoop("gameVideo", [
        "https://res.cloudinary.com/df6doa3fi/video/upload/v1777334502/UI%E8%88%87%E4%BA%92%E5%8B%95%E6%B8%AC%E8%A9%A6_epvqd6.mp4",
        "https://res.cloudinary.com/df6doa3fi/video/upload/v1777334486/%E6%BB%91%E9%8F%9F%E6%B8%AC%E8%A9%A6_smfgfl.mp4",
        "https://res.cloudinary.com/df6doa3fi/video/upload/v1777334502/UI%E8%88%87%E4%BA%92%E5%8B%95%E6%B8%AC%E8%A9%A6_epvqd6.mp4",
        "https://res.cloudinary.com/df6doa3fi/video/upload/v1777334506/%E5%A0%B4%E6%99%AF%E5%82%B3%E9%80%81%E6%B8%AC%E8%A9%A6_dkydri.mp4"
    ]);

    // C. 作品集卡片點擊開啟彈窗
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalExtra = document.getElementById("modal-extra");
    const modalMediaContainer = document.getElementById("modal-media-container");

    document.querySelectorAll(".portfolio-card").forEach((card) => {
        const key = card.dataset.project;
        if (!key || !projectData[key]) return;

        card.addEventListener("click", () => {
            openCollection(key);
        });
    });

    const closeButton = document.querySelector(".close-btn");
    const prevButton = document.querySelector(".nav-arrow.left");
    const nextButton = document.querySelector(".nav-arrow.right");

    if (prevButton) prevButton.addEventListener("click", prevCollectionItem);
    if (nextButton) nextButton.addEventListener("click", nextCollectionItem);
    closeButton.addEventListener("click", closeProject);
    modal.addEventListener("click", (event) => {
        if (event.target === modal) closeProject();
    });
});

function closeProject() {
    const modal = document.getElementById("project-modal");
    const modalMediaContainer = document.getElementById("modal-media-container");

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    modalMediaContainer.innerHTML = "";
}

// --- 4. 複製 Email 與通知 ---
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