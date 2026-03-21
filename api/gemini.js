// 文件路径：api/gemini.js
// 卿心红娘专属 AI 后端代理接口 (Vercel Serverless Function)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: '只接受 POST 请求，拒绝套路' });
  }

  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: '蔡总，客户没有输入内容哦' });
  }

  // 安全获取 Vercel 后台的 API KEY
  const apiKey = process.env.GEMINI_API_KEY; 
  if (!apiKey) {
    return res.status(500).json({ error: '后端密钥丢失，请在 Vercel 后台配置 GEMINI_API_KEY' });
  }

  try {
    const model = "gemini-2.5-flash-preview-09-2025";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        systemInstruction: { 
          parts: [{ text: "你是卿心红娘的专属AI助理。语言风格：真诚、专业、有温度、偶尔带点幽默，坚决反对物化婚恋和PUA套路。" }] 
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'AI 模型请求失败');
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    res.status(200).json({ result: text });

  } catch (error) {
    console.error("卿心后端代理报错:", error);
    res.status(500).json({ error: '服务器网络波动，请蔡总稍后再试: ' + error.message });
  }
}
