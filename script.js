function showDashboard() {
  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('dashboard').classList.remove('hidden');
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('avatarCanvas'), alpha: true });
renderer.setSize(600, 400);
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x42ffb9 });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
camera.position.z = 5;
function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

const map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
map.on('click', function (e) {
  L.marker([e.latlng.lat, e.latlng.lng])
    .addTo(map)
    .bindPopup('Island Deployed!')
    .openPopup();
});

function startVoiceBot() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.start();
  recognition.onresult = function (event) {
    const userText = event.results[0][0].transcript;
    const botReply = userText.includes('meme') ? '🔥 Meme received. Sending roast.' : '😂 LOL, say it again!';
    document.getElementById('chatlog').value += `\nYou: ${userText}\nBot: ${botReply}`;
  };
}

function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData('text');
  ev.target.innerText = document.getElementById(data).innerText + ' Equipped!';
  document.getElementById('equipFeedback').innerText = `${data} equipped successfully.`;
}
