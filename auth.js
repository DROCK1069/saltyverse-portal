
document.getElementById('login-form').addEventListener('submit', async function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Supabase login logic
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    alert('Login failed: ' + error.message);
  } else {
    window.location.href = 'dashboard.html';
  }
});

document.getElementById('google-login').onclick = () => supabase.auth.signInWithOAuth({ provider: 'google' });
document.getElementById('microsoft-login').onclick = () => supabase.auth.signInWithOAuth({ provider: 'azure' });
document.getElementById('discord-login').onclick = () => supabase.auth.signInWithOAuth({ provider: 'discord' });
