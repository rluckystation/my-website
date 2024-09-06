async function summarizeMeeting() {
    const meetingText = document.getElementById("meetingText").value;
    const jobPosition = document.getElementById("jobPosition").value;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer sk-...qyb9"  // أدخل مفتاح API الخاص بك هنا
        },
        body: JSON.stringify({
            model: "gpt-4o",
            messages: [{"role": "user", "content": `تلخيص الاجتماع بناءً على منصب ${jobPosition}: ${meetingText}`}],
            max_tokens: 300
        })
    });

    const data = await response.json();
    document.getElementById("result").innerText = data.choices[0].message.content;
}

async function translateText() {
    const meetingText = document.getElementById("meetingText").value;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer sk-...qyb9"  // أدخل مفتاح API الخاص بك هنا
        },
        body: JSON.stringify({
            model: "gpt-4o",
            messages: [{"role": "user", "content": `ترجم النص إلى العربية: ${meetingText}`}],
            max_tokens: 300
        })
    });

    const data = await response.json();
    document.getElementById("result").innerText = data.choices[0].message.content;
}

async function generateTable() {
    const jobPosition = document.getElementById("jobPosition").value;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer sk-...qyb9"  // أدخل مفتاح API الخاص بك هنا
        },
        body: JSON.stringify({
            model: "gpt-4o",
            messages: [{"role": "user", "content": `أنشئ جدول بناءً على منصب ${jobPosition}`}],
            max_tokens: 500
        })
    });

    const data = await response.json();
    const tableData = data.choices[0].message.content;

    document.getElementById("result").innerHTML = `
        <h2>الجدول بناءً على المنصب:</h2>
        <pre>${tableData}</pre>
    `;
}
