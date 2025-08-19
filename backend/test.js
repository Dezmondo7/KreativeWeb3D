
async function testAI() {
  const response = await fetch('http://localhost:5000/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt: 'Hello AI, give me a creative website idea' })
  });

  const data = await response.json();
  console.log(data);
}

testAI();