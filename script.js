// Get the contact form elements
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.getElementById('submit');

// Add event listener to submit button
submitButton.addEventListener('click', async (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Validate form inputs
  if (!name ||!email ||!message) {
    alert('Please fill in all fields');
    return;
  }

  // Send form data to email
  const emailData = {
    from: email,
    to: 'ponomarevmatvej601@gmail.com',
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };
  await fetch('/sendmail.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(emailData)
  });

  // Send form data to Telegram
  const telegramData = {
    chat_id: 'YOUR_TELEGRAM_CHAT_ID',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };
  await fetch('https://api.telegram.org/botYOUR_TELEGRAM_BOT_TOKEN/sendMessage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(telegramData)
  });

  // Send form data to Discord
  const discordData = {
    content: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };
  await fetch('https://discord.com/channels/@karas4ik~', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(discordData)
  });

  // Show success message
  alert('Form submitted successfully!');
});