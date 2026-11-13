const rawName = prompt("Ismingizni yozing:");


const userName = rawName ? rawName.trim() : "Mehmon"; 


const formattedName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();

const greetingTemplate = `Salom, ${formattedName}! Xush kelibsiz!`;

alert(greetingTemplate);
