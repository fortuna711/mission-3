/**
 * 1. 초기 데이터 관리 (9명 전체 리스트)
 */
let members = [
    {
        id: "member1",
        name: "서예슬",
        part: "Frontend",
        major: "인공지능공학부",
        intro: "열심히 배우는 프론트엔드 개발자입니다!",
        fullIntro: "웹 개발을 처음 접했지만, 기초부터 차근차근 열심히 배우고 있습니다. 작은 UI 하나라도 왜 이렇게 만들어졌는지 이해하려고 노력합니다.",
        image: "https://cdn.eyesmag.com/content/uploads/posts/2024/10/23/shutterstock_2500953971-3c494ea8-0ac0-4f8d-a962-e47db09215a0.jpg",
        badge: "HTML / CSS",
        email: "mlnblmn0711@naver.com",
        phone: "010-3769-1500",
        skills: ["HTML / CSS", "JavaScript", "React"],
        motto: "기초를 탄탄하게 다져서 팀에 도움이 되고 싶습니다."
    },
    {
        id: "member2",
        name: "박현빈",
        part: "PM",
        major: "인공지능공학부",
        intro: "서비스의 가치를 고민하는 기획자입니다.",
        fullIntro: "사용자가 진정으로 필요로 하는 것이 무엇인지 정의하고 프로젝트의 방향성을 설정하는 과정을 즐깁니다.",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=300",
        badge: "기획 문서 작성",
        email: "hyunbin@lion.com",
        phone: "010-1234-5678",
        skills: ["기획 문서 작성", "Figma", "사용자 리서치"],
        motto: "함께 성장하는 즐거움을 아는 기획자가 되겠습니다."
    },
    {
        id: "member3",
        name: "김민수",
        part: "Backend",
        major: "인공지능공학부",
        intro: "효율적인 데이터 흐름을 설계합니다.",
        fullIntro: "데이터의 흐름을 파악하고 안정적인 서버 환경을 구축하는 것에 큰 흥미를 느끼고 있습니다.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=300",
        badge: "Java",
        email: "minsu@lion.com",
        phone: "010-2345-6789",
        skills: ["Java", "Spring Boot", "MySQL"],
        motto: "끊임없이 질문하고 성장하는 백엔드 개발자가 되겠습니다."
    },
    {
        id: "member4",
        name: "허찬",
        part: "Backend",
        major: "컴퓨터공학과",
        intro: "안정적인 백엔드 아키텍처를 추구합니다.",
        fullIntro: "복잡한 알고리즘을 최적화하고 코드의 성능을 개선하는 과정에서 성취감을 느낍니다.",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=300",
        badge: "Python",
        email: "chan@lion.com",
        phone: "010-3456-7890",
        skills: ["Python", "Django", "AWS"],
        motto: "문제를 끝까지 파고드는 끈기 있는 개발자입니다."
    },
    {
        id: "member5",
        name: "정연수",
        part: "Design",
        major: "인공지능공학부",
        intro: "사용자 중심의 디자인을 고민합니다.",
        fullIntro: "보기 좋은 디자인을 넘어, 사용자가 편리하게 사용할 수 있는 인터페이스를 고민합니다.",
        image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=300",
        badge: "Figma",
        email: "yeonsu@lion.com",
        phone: "010-4567-8901",
        skills: ["Figma", "Design System", "Prototyping"],
        motto: "디자인과 개발의 가교 역할을 하고 싶습니다."
    },
    {
        id: "member6",
        name: "이사랑",
        part: "Frontend",
        major: "정보통신공학과",
        intro: "컴포넌트 단위 설계에 관심이 많습니다.",
        fullIntro: "사용자에게 가장 먼저 닿는 화면인 프론트엔드의 매력에 빠져 공부하고 있습니다.",
        image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=300",
        badge: "React",
        email: "sarang@lion.com",
        phone: "010-5678-9012",
        skills: ["React", "TypeScript", "Tailwind CSS"],
        motto: "코드로 즐거움을 전하는 개발자가 되겠습니다."
    },
    {
        id: "member7",
        name: "최지우",
        part: "Backend",
        major: "소프트웨어학과",
        intro: "대용량 트래픽 처리를 배우고 싶습니다.",
        fullIntro: "서버 아키텍처와 분산 시스템에 관심이 많으며, 탄탄한 백엔드를 구축하는 것이 목표입니다.",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=300",
        badge: "Spring",
        email: "jiwoo@lion.com",
        phone: "010-6789-0123",
        skills: ["Spring", "Kotlin", "Redis"],
        motto: "어제보다 나은 오늘을 만드는 개발자가 되겠습니다."
    },
    {
        id: "member8",
        name: "강건우",
        part: "Design",
        major: "산업디자인학과",
        intro: "심미성과 기능성의 조화를 추구합니다.",
        fullIntro: "제품의 정체성을 시각적으로 풀어내는 브랜딩และ UI 디자인을 병행하고 있습니다.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=300",
        badge: "Adobe XD",
        email: "gunwoo@lion.com",
        phone: "010-7890-1234",
        skills: ["Adobe XD", "Photoshop", "Illustrator"],
        motto: "사용자의 감성을 움직이는 디자인을 합니다."
    },
    {
        id: "member9",
        name: "윤미소",
        part: "Frontend",
        major: "인공지능공학부",
        intro: "살아있는 인터랙션을 만드는 개발자입니다.",
        fullIntro: "최신 기술 트렌드에 관심이 많으며, 웹 브라우저에서 가능한 화려한 애니메이션에 흥미가 있습니다.",
        image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=300",
        badge: "JavaScript",
        email: "miso@lion.com",
        phone: "010-8901-2345",
        skills: ["JavaScript", "Vue.js", "GSAP"],
        motto: "긍정적인 에너지를 전파하는 팀원이 되겠습니다."
    }
];

/**
 * 2. DOM 요소 선택
 */
const summaryGrid = document.getElementById('summaryGrid');
const detailList = document.getElementById('detailList');
const totalCountLabel = document.getElementById('totalCount');
const formContainer = document.getElementById('formContainer');
const memberForm = document.getElementById('memberForm');
const toggleFormBtn = document.getElementById('toggleFormBtn');
const deleteLastBtn = document.getElementById('deleteLastBtn');
const cancelBtn = document.getElementById('cancelBtn');

/**
 * 3. UI 업데이트 및 렌더링
 */
function updateUI() {
    renderSummaryCards();
    renderDetailCards();
    totalCountLabel.innerText = `총 ${members.length}명`;
}

function renderSummaryCards() {
    // 인라인 onclick 제거 후 data-id 활용하도록 변경
    summaryGrid.innerHTML = members.map(member => `
        <article class="profile-card" data-id="${member.id}">
            <div class="image-box">
                <img src="${member.image}" alt="${member.name}">
                <span class="badge">${member.badge}</span>
            </div>
            <div class="summary-content">
                <h2 class="summary-name">${member.name}</h2>
                <p class="summary-part">${member.part} | ${member.major}</p>
                <p class="summary-intro">${member.intro}</p>
            </div>
        </article>
    `).join('');
}

function renderDetailCards() {
    detailList.innerHTML = members.map(member => `
        <div class="detail-card" id="${member.id}">
            <header style="border-bottom: 1px solid #eee; margin-bottom: 15px; padding-bottom: 10px;">
                <h3 style="font-size: 1.5rem;">${member.name}</h3>
                <p style="color: #4c6ef5; font-weight: bold; font-size: 0.9rem;">${member.part} | ${member.major}</p>
            </header>
            <div style="font-size: 0.9rem; color: #444;">
                <p><strong>소개:</strong> ${member.fullIntro}</p>
                <p style="margin-top: 10px;"><strong>기술:</strong> ${member.skills.join(', ')}</p>
                <p style="margin-top: 10px;"><strong>한마디:</strong> ${member.motto}</p>
            </div>
        </div>
    `).join('');
}

/**
 * 4. 이벤트 로직
 */

// 추가 폼 토글 기능
toggleFormBtn.addEventListener('click', () => {
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
});

// 취소 버튼 기능
cancelBtn.addEventListener('click', () => {
    formContainer.style.display = 'none';
    memberForm.reset();
});

// 폼 Submit 기능 (새 멤버 추가)
memberForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newMember = {
        id: `member-${Date.now()}`,
        name: document.getElementById('name').value,
        part: document.getElementById('part').value,
        major: "미설정 전공",
        intro: document.getElementById('intro').value,
        fullIntro: document.getElementById('fullIntro').value,
        image: "https://via.placeholder.com/300x240?text=New+Lion",
        badge: document.getElementById('skills').value.split(',')[0].trim(),
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        skills: document.getElementById('skills').value.split(',').map(s => s.trim()),
        motto: document.getElementById('motto').value
    };

    members.push(newMember);
    updateUI();
    memberForm.reset();
    formContainer.style.display = 'none';
});

// 마지막 멤버 삭제 기능 (인라인 핸들러 대체)
deleteLastBtn.addEventListener('click', () => {
    if (members.length === 0) return alert("삭제할 멤버가 없습니다.");
    if (confirm("마지막 멤버를 삭제할까요?")) {
        members.pop();
        updateUI();
    }
});

// 요약 카드 클릭 시 상세 카드로 스크롤 (이벤트 위임 활용 기법)
summaryGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.profile-card');
    if (card) {
        const memberId = card.dataset.id;
        scrollToDetail(memberId);
    }
});

function scrollToDetail(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.style.boxShadow = "0 0 15px rgba(76, 110, 245, 0.5)";
        setTimeout(() => el.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)", 2000);
    }
}

// 초기 실행
updateUI();