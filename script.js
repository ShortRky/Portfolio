// DOM Elements
const authSection = document.getElementById('auth-section');
const dashboard = document.getElementById('dashboard');
const usernameInput = document.getElementById('username');
const signupBtn = document.getElementById('signup-btn');
const signinBtn = document.getElementById('signin-btn');
const userGreeting = document.getElementById('user-greeting');
const newGoalInput = document.getElementById('new-goal');
const addGoalBtn = document.getElementById('add-goal-btn');
const goalList = document.getElementById('goal-list');
const pointsDisplay = document.getElementById('points');
const levelDisplay = document.getElementById('level');
const coinsDisplay = document.getElementById('coins');
const buyCoinsBtn = document.getElementById('buy-coins-btn');
const questList = document.getElementById('quest-list');
const shareProgressInput = document.getElementById('share-progress');
const shareBtn = document.getElementById('share-btn');
const sharedMessages = document.getElementById('shared-messages');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const themeToggle = document.getElementById('theme-toggle');

// User Data
let currentUser = null;
let users = JSON.parse(localStorage.getItem('users')) || {};

// Sign Up
signupBtn.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  if (username) {
    if (!users[username]) {
      users[username] = { goals: [], points: 0, level: 1, coins: 0, sharedMessages: [], chatMessages: [] };
      localStorage.setItem('users', JSON.stringify(users));
      currentUser = username;
      showDashboard();
    } else {
      alert('Username already exists!');
    }
  }
});

// Sign In
signinBtn.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  if (users[username]) {
    currentUser = username;
    showDashboard();
  } else {
    alert('User not found!');
  }
});

// Show Dashboard
function showDashboard() {
  authSection.classList.add('hidden');
  dashboard.classList.remove('hidden');
  userGreeting.textContent = currentUser;
  loadUserData();
}

// Load User Data
function loadUserData() {
  const user = users[currentUser];
  goalList.innerHTML = '';
  user.goals.forEach((goal, index) => {
    const li = document.createElement('li');
    li.textContent = goal;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteGoal(index));
    li.appendChild(deleteBtn);
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', () => completeGoal(index));
    li.appendChild(completeBtn);
    goalList.appendChild(li);
  });
  pointsDisplay.textContent = user.points;
  levelDisplay.textContent = user.level;
  coinsDisplay.textContent = user.coins;
  sharedMessages.innerHTML = user.sharedMessages.map(msg => `<p>${msg}</p>`).join('');
  chatMessages.innerHTML = user.chatMessages.map(msg => `<p>${msg}</p>`).join('');
  loadQuests();
}

// Add Goal
addGoalBtn.addEventListener('click', () => {
  const goal = newGoalInput.value.trim();
  if (goal) {
    users[currentUser].goals.push(goal);
    localStorage.setItem('users', JSON.stringify(users));
    newGoalInput.value = '';
    loadUserData();
  }
});

// Delete Goal
function deleteGoal(index) {
  users[currentUser].goals.splice(index, 1);
  localStorage.setItem('users', JSON.stringify(users));
  loadUserData();
}

// Complete Goal
function completeGoal(index) {
  const user = users[currentUser];
  user.points += 10; // Award points for completing a goal
  if (user.points >= 100) { // Level up every 100 points
    user.level += 1;
    user.points = 0;
  }
  user.goals.splice(index, 1); // Remove the completed goal
  localStorage.setItem('users', JSON.stringify(users));
  loadUserData();
}

// Buy Coins
buyCoinsBtn.addEventListener('click', () => {
  const user = users[currentUser];
  if (user.points >= 100) {
    user.points -= 100;
    user.coins += 10;
    localStorage.setItem('users', JSON.stringify(users));
    loadUserData();
  } else {
    alert('Not enough points!');
  }
});

// Load Quests
function loadQuests() {
  const user = users[currentUser];
  questList.innerHTML = '';
  const quests = [
    { description: 'Complete 3 goals', reward: 50, completed: false },
    { description: 'Reach level 2', reward: 100, completed: user.level >= 2 },
    { description: 'Earn 200 points', reward: 150, completed: user.points >= 200 }
  ];
  quests.forEach((quest, index) => {
    const li = document.createElement('li');
    li.textContent = quest.description;
    if (quest.completed) {
      li.textContent += ' (Completed)';
    } else {
      const completeBtn = document.createElement('button');
      completeBtn.textContent = 'Complete';
      completeBtn.addEventListener('click', () => completeQuest(index, quest.reward));
      li.appendChild(completeBtn);
    }
    questList.appendChild(li);
  });
}

// Complete Quest
function completeQuest(index, reward) {
  const user = users[currentUser];
  user.coins += reward;
  localStorage.setItem('users', JSON.stringify(users));
  loadUserData();
}

// Share Progress
shareBtn.addEventListener('click', () => {
  const message = shareProgressInput.value.trim();
  if (message) {
    users[currentUser].sharedMessages.push(`${currentUser}: ${message}`);
    localStorage.setItem('users', JSON.stringify(users));
    shareProgressInput.value = '';
    loadUserData();
  }
});

// Send Chat Message
sendBtn.addEventListener('click', () => {
  const message = chatInput.value.trim();
  if (message) {
    users[currentUser].chatMessages.push(`${currentUser}: ${message}`);
    localStorage.setItem('users', JSON.stringify(users));
    chatInput.value = '';
    loadUserData();
  }
});

// Dark Theme Toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Switch to Light Mode';
  } else {
    themeToggle.textContent = 'Switch to Dark Mode';
  }
});