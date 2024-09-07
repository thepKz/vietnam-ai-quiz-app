const quizData = [
    {
        question: "Thủ đô của Việt Nam là gì?",
        options: ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Huế"],
        correctAnswer: "Hà Nội",
        explanation: "Hà Nội là thủ đô của Việt Nam từ năm 1010 dưới triều đại Lý."
    },
    {
        question: "Năm nào Việt Nam giành độc lập?",
        options: ["1945", "1954", "1975", "1986"],
        correctAnswer: "1945",
        explanation: "Việt Nam tuyên bố độc lập vào ngày 2 tháng 9 năm 1945."
    },
    {
        question: "Sông nào dài nhất Việt Nam?",
        options: ["Sông Hồng", "Sông Mekong", "Sông Đồng Nai", "Sông Đà"],
        correctAnswer: "Sông Mekong",
        explanation: "Sông Mekong là sông dài nhất Việt Nam, có độ dài khoảng 4.350 km."
    },
    {
        question: "Đỉnh núi cao nhất Việt Nam là gì?",
        options: ["Phan Xi Păng", "Bà Đen", "Ngọc Linh", "Phu Xai Lai Leng"],
        correctAnswer: "Phan Xi Păng",
        explanation: "Phan Xi Păng là đỉnh núi cao nhất Việt Nam, có độ cao 3.143 m."
    },
    {
        question: "Việt Nam có bao nhiêu dân tộc?",
        options: ["54", "56", "63", "64"],
        correctAnswer: "54",
        explanation: "Việt Nam có 54 dân tộc, trong đó dân tộc Kinh chiếm đa số."
    },
    {
        question: "Quốc hoa của Việt Nam là gì?",
        options: ["Hoa Sen", "Hoa Mai", "Hoa Đào", "Hoa Sữa"],
        correctAnswer: "Hoa Sen",
        explanation: "Hoa Sen là quốc hoa của Việt Nam, được chọn làm biểu tượng cho sự thuần khiết, tinh khiết và sự trinh nữ."
    },
    {
        question: "Ai là người sáng lập ra Đảng Cộng sản Việt Nam?",
        options: ["Hồ Chí Minh", "Võ Nguyên Giáp", "Trần Phú", "Lê Duẩn"],
        correctAnswer: "Hồ Chí Minh",
        explanation: "Hồ Chí Minh là người sáng lập ra Đảng Cộng sản Việt Nam vào ngày 10 tháng 2 năm 1930."
    },
    {
        question: "Việt Nam gia nhập ASEAN vào năm nào?",
        options: ["1995", "1997", "1999", "2001"],
        correctAnswer: "1995",
        explanation: "Việt Nam đã gia nhập ASEAN (Hiệp hội các quốc gia Đông Nam Á) vào ngày 28 tháng 7 năm 1995."
    },
    {
        question: "Đâu là món ăn truyền thống của Việt Nam trong ngày Tết?",
        options: ["Bánh chưng", "Phở", "Bún chả", "Bánh mì"],
        correctAnswer: "Bánh chưng",
        explanation: "Bánh chưng là món ăn truyền thống của Việt Nam trong ngày Tết, được làm từ gạo nếp, thịt heo, đậu xanh và các loại rau củ."
    },
    {
        question: "Vịnh Hạ Long nằm ở tỉnh nào?",
        options: ["Quảng Ninh", "Hải Phòng", "Thanh Hóa", "Nghệ An"],
        correctAnswer: "Quảng Ninh",
        explanation: "Vịnh Hạ Long nằm ở tỉnh Quảng Ninh, cách Hà Nội khoảng 170 km về phía đông bắc."
    },
    {
        question: "Ai là tác giả của Truyện Kiều?",
        options: ["Nguyễn Du", "Hồ Xuân Hương", "Nguyễn Trãi", "Nguyễn Bỉnh Khiêm"],
        correctAnswer: "Nguyễn Du",
        explanation: "Nguyễn Du là tác giả của Truyện Kiều, một tác phẩm văn học tiêu biểu của dân tộc Việt Nam."
    },
    {
        question: "Đâu là di sản văn hóa thế giới đầu tiên của Việt Nam được UNESCO công nhận?",
        options: ["Phố cổ Hội An", "Vịnh Hạ Long", "Cố đô Huế", "Phong Nha-Kẻ Bàng"],
        correctAnswer: "Vịnh Hạ Long",
        explanation: "Vịnh Hạ Long là di sản văn hóa thế giới đầu tiên của Việt Nam được UNESCO công nhận vào năm 1994."
    },
    {
        question: "Việt Nam đã tổ chức SEA Games bao nhiêu lần?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        explanation: "Việt Nam đã tổ chức SEA Games (Hội thao Đông Nam Á) lần đầu tiên vào năm 2003 và lần thứ hai vào năm 2019."
    },
    {
        question: "Đâu là loại cà phê nổi tiếng của Việt Nam?",
        options: ["Cà phê chồn", "Cà phê Arabica", "Cà phê Robusta", "Cà phê Liberica"],
        correctAnswer: "Cà phê chồn",
        explanation: "Cà phê chồn là loại cà phê nổi tiếng của Việt Nam, được trồng chủ yếu ở các vùng miền Trung và Nam."
    },
    {
        question: "Tên gọi khác của Sài Gòn trước khi đổi thành Thành phố Hồ Chí Minh là gì?",
        options: ["Prey Nokor", "Gia Định", "Bến Nghé", "Tất cả đều đúng"],
        correctAnswer: "Tất cả đều đúng",
        explanation: "Sài Gòn đã có nhiều tên gọi khác nhau trong lịch sử, bao gồm Prey Nokor, Gia Định và Bến Nghé."
    },
    {
        question: "Đâu là loại vải nổi tiếng của Việt Nam?",
        options: ["Vải thiều", "Vải Hưng Yên", "Vải Lục Ngạn", "Tất cả đều đúng"],
        correctAnswer: "Tất cả đều đúng",
        explanation: "Việt Nam có nhiều loại vải nổi tiếng, bao gồm vải thiều, vải Hưng Yên và vải Lục Ngạn."
    },
    {
        question: "Ngày Quốc khánh Việt Nam là ngày nào?",
        options: ["30/4", "2/9", "19/5", "1/5"],
        correctAnswer: "2/9",
        explanation: "Ngày Quốc khánh Việt Nam là ngày 2 tháng 9 năm 1945, kỷ niệm ngày Việt Nam tuyên bố độc lập."
    },
    {
        question: "Đâu là món ăn được coi là 'linh hồn ẩm thực Việt Nam'?",
        options: ["Phở", "Bánh mì", "Bún chả", "Cơm tấm"],
        correctAnswer: "Phở",
        explanation: "Phở là món ăn được coi là 'linh hồn ẩm thực Việt Nam', được làm từ thịt bò, pho mát, rau sống và nước dùng."
    },
    {
        question: "Việt Nam có bao nhiêu Di sản Văn hóa Thế giới được UNESCO công nhận?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "8",
        explanation: "Việt Nam có 8 Di sản Văn hóa Thế giới được UNESCO công nhận, bao gồm Vịnh Hạ Long, Phố cổ Hội An, Cố đô Huế, Phong Nha-Kẻ Bàng, Cổ thành Hồi Xuân, Cổ thành Thăng Long, Cổ thành Hội An và Cổ thành Kiến Giang."
    },
    {
        question: "Đâu là loại nhạc cụ truyền thống của Việt Nam?",
        options: ["Đàn bầu", "Đàn tranh", "Sáo trúc", "Tất cả đều đúng"],
        correctAnswer: "Tất cả đều đúng",
        explanation: "Việt Nam có nhiều loại nhạc cụ truyền thống, bao gồm đàn bầu, đàn tranh, sáo trúc và nhiều loại khác."
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let timer;
let timeLeft = 30;

const quizContainer = document.getElementById('quiz-container');

function loadQuestion() {
    clearInterval(timer);
    timeLeft = 30;
    const question = quizData[currentQuestion];
    const questionHTML = `
        <div class="question-info">
            <span>Câu hỏi ${currentQuestion + 1}/${quizData.length}</span>
        </div>
        <div class="question">
            <h2>${question.question}</h2>
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option" data-index="${index}">${option}</div>
                `).join('')}
            </div>
        </div>
        <div class="quiz-footer">
            <div id="timer">Thời gian còn lại: ${timeLeft}s</div>
            <button id="next-btn" disabled>Câu tiếp theo</button>
        </div>
    `;
    quizContainer.innerHTML = questionHTML;

    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('click', selectOption);
    });

    document.getElementById('next-btn').addEventListener('click', nextQuestion);

    startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `Thời gian còn lại: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function selectOption(e) {
    const selectedOption = e.target;
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    selectedOption.classList.add('selected');
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    const selectedOption = document.querySelector('.option.selected');
    if (!selectedOption && timeLeft > 0) {
        alert('Vui lòng chọn một đáp án!');
        return;
    }

    const answer = selectedOption ? selectedOption.textContent : null;
    userAnswers.push(answer);

    if (answer === quizData[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

async function showResult() {
    const resultHTML = `
        <h2>Kết quả của bạn</h2>
        <p>Điểm số: ${score} / ${quizData.length}</p>
        <div id="ai-feedback">Đang phân tích bài làm của bạn...</div>
        <button id="restart-btn" style="background-color: #007bff; color: white; margin:15px; cursor: pointer;">Làm lại bài test</button>
    `;
    quizContainer.innerHTML = resultHTML;

    document.getElementById('restart-btn').addEventListener('click', restartQuiz);

    const aiFeedback = await analyzeAnswers();
    document.getElementById('ai-feedback').innerHTML = aiFeedback;
}

async function analyzeAnswers() {
    try {
        let feedback = '<h3>Phân tích chi tiết:</h3>';
        let incorrectAnswers = 0;

        for (let i = 0; i < quizData.length; i++) {
            const question = quizData[i].question;
            const userAnswer = userAnswers[i];
            const correctAnswer = quizData[i].correctAnswer;
            const explanation = quizData[i].explanation;

            if (userAnswer !== correctAnswer) {
                incorrectAnswers++;
                feedback += `
                    <div class="feedback-item">
                        <p><strong>Câu hỏi ${i + 1}:</strong> ${question}</p>
                        <p>Đáp án của bạn: ${userAnswer || 'Không trả lời'}</p>
                        <p>Đáp án đúng: ${correctAnswer}</p>
                        <p>Giải thích: ${explanation}</p>
                    </div>
                `;
            }
        }

        if (incorrectAnswers === 0) {
            return '<p>Chúc mừng! Bạn đã trả lời đúng tất cả các câu hỏi.</p>';
        }

        const aiAnalysis = await generateAIAnalysis(incorrectAnswers, quizData.length);
        
        return `
            <p>${aiAnalysis}</p>
            ${feedback}
        `;
    } catch (error) {
        console.error('Lỗi khi phân tích câu trả lời:', error);
        return 'Không thể phân tích câu trả lời lúc này. Vui lòng thử lại sau.';
    }
}

async function generateAIAnalysis(incorrectAnswers, totalQuestions) {
    // Giả lập phân tích AI
    const correctAnswers = totalQuestions - incorrectAnswers;
    const percentage = (correctAnswers / totalQuestions) * 100;
    
    let analysis = `Bạn đã trả lời đúng ${correctAnswers} câu trên tổng số ${totalQuestions} câu hỏi, đạt ${percentage.toFixed(2)}%. `;
    
    if (percentage >= 90) {
        analysis += "Thật ấn tượng! Bạn có kiến thức rất tốt về Việt Nam. Hãy tiếp tục duy trì và mở rộng kiến thức của mình.";
    } else if (percentage >= 70) {
        analysis += "Rất tốt! Bạn có hiểu biết khá tốt về Việt Nam. Hãy tiếp tục học hỏi để nâng cao kiến thức của mình.";
    } else if (percentage >= 50) {
        analysis += "Bạn có kiến thức cơ bản về Việt Nam. Hãy cố gắng tìm hiểu thêm về lịch sử, văn hóa và địa lý của đất nước.";
    } else {
        analysis += "Bạn cần cải thiện kiến thức của mình về Việt Nam. Hãy dành thời gian để đọc thêm về lịch sử, văn hóa và địa lý của đất nước.";
    }

    return analysis;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    loadQuestion();
}

loadQuestion();