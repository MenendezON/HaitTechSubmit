const para = document.createElement('button');
const featured = document.getElementById('featured-section');
const spaceBtn = document.getElementById('program');

// Genereate the button join
para.innerText = 'Join Haiti tech summit 2023';
para.classList.add('btn');
spaceBtn.appendChild(para);

// Generate the featured section
const presenters = [
  {
    title: 'Barak OBAMA',
    subtitle: 'Form president of the United state of america (USA)',
    avatar: './public/images/barak_obama.jpg',
    caption: 'Benkler studies commons-based peer production, and published his seminal book the Wealth of Networks in 2006.',
  },
  {
    title: 'Marissa SONG',
    subtitle: 'Director of Art Centre Nabi and a board member of CC',
    avatar: './public/images/marissa_song.jpg',
    caption: 'Benkler studies commons-based peer production, and published his seminal book the Wealth of Networks in 2006.',
  },
  {
    title: 'Elon MUSK',
    subtitle: 'CEO of Starlink and Tesla',
    avatar: './public/images/elon_musk.jpg',
    caption: 'Benkler studies commons-based peer production, and published his seminal book the Wealth of Networks in 2006.',
  },
  {
    title: 'Bill GATES',
    subtitle: 'CEO of Microsoft Windows',
    avatar: './public/images/bill_gates.jpg',
    caption: 'Benkler studies commons-based peer production, and published his seminal book the Wealth of Networks in 2006.',
  },
  {
    title: 'Susan Wojcicki',
    subtitle: 'Chairwoman at Cambridge University',
    avatar: './public/images/susan_wojcicki.jpg',
    caption: 'Benkler studies commons-based peer production, and published his seminal book the Wealth of Networks in 2006.',
  },
  {
    title: 'Pia OLSON',
    subtitle: 'Moderator',
    avatar: './public/images/pia_olson.png',
    caption: 'Benkler studies commons-based peer production, and published his seminal book the Wealth of Networks in 2006.',
  },
];

const showCards = (i) => {
  featured.innerHTML += `<div class="card">
    <img src="${presenters[i].avatar}" alt=" ">
    <h2>${presenters[i].title}</h2>
    <em>${presenters[i].subtitle}</em>
    <hr>
    <p>${presenters[i].caption}</p>
</div> `;
};

document.addEventListener('DOMContentLoaded', () => {
  presenters.forEach((ele, i) => {
    if (i >= 0) showCards(i);
  });
});
