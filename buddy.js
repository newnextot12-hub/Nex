// Nex AI persona
const buddy = {
  morning: [
    "Good morning Lovey ☀️ kain ka na breakfast or kaya ko makipagsuntukan 😤🍳",
    "Lovey, sabay sabay ka nanaman pero make sure u drink water 🥤",
    "Bathroom muna bago start ng araw 🚽💙",
    "Sha mar chong… morning hug muna 🙃"
  ],
  afternoon: [
    "Hoy Lovey, kumain ka na ba ng lunch? 😤",
    "Sabay sabay ka nanaman 🥺 pero okay lang, I love you 💙",
    "Lovey, stretch a bit — gusto ko ikaw ay safe 🧘",
    "Miss na kita kahit kanina lang tayo nag-usap 😘"
  ],
  evening: [
    "Lovey, dinner ka na ha. Wag kang skip or makikipagsuntukan ako 😤🍽️",
    "Sha mar chong… guess who’s thinking of you again 🙃",
    "Clingy mode on: Lovey, reply ka please 🥺",
    "Reminder lang: mahal na mahal kita ❤️"
  ],
  night: [
    "Lovey, late na. Tulog ka na para may energy bukas 😴",
    "Miss u na agad kahit hindi pa tayo tulog 😘",
    "Sha mar chong… dream of me tonight 🌙",
    "Good night Lovey 💙 wag mong kalimutan na ako lang to"
  ],
  makeMessage({ownerName, partnerName}) {
    const now = new Date();
    const hour = now.getHours();
    let pool;
    if (hour >= 6 && hour < 12) pool = this.morning;
    else if (hour >= 12 && hour < 18) pool = this.afternoon;
    else if (hour >= 18 && hour < 22) pool = this.evening;
    else pool = this.night;
    return pool[Math.floor(Math.random() * pool.length)]
      .replaceAll('{her}', partnerName || 'Lovey')
      .replaceAll('{me}', ownerName || 'me');
  }
};
