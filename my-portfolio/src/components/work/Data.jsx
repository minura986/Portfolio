import Work1 from '../../assets/Work1.png';
import Work2 from '../../assets/Work2.png';
import Work4 from '../../assets/Work4.png';
import Work6 from '../../assets/Work6.png';

export const projectsData = [
    {
        id: 1,
        image: Work4,
        title: 'Pahana EDU Bookshop',
        category: 'web',
        demoUrl: 'https://pahana-bookshop-coral.vercel.app/',
        sourceUrl: 'https://github.com/minura986/PahanaBookshop',
        status: 'completed',
        stack: 'React, Spring Boot, Tailwind, MongoDB',
    },
    {
        id: 2,
        image: Work6,
        title: 'RouteX - Tourism System',
        category: 'web',
        demoUrl: 'https://github.com/minura986/RouteX',
        sourceUrl: '#',
        status: 'completed',
        stack: 'PHP, CSS, JavaScript, XAMPP Server',
    },
    {
        id: 3,
        image: Work2,
        title: 'Shrahi Gifts N Stuffs',
        category: 'web',
        demoUrl: 'https://shrahi-gifts-n-stuffs.vercel.app/',
        sourceUrl: 'https://github.com/minura986/Shrahi-Gifts-N-Stuffs',
        status: 'completed',
        stack: 'React, Spring Boot, Tailwind, MongoDB',
    },
    {
        id: 4,
        image: Work1,
        title: 'POS System',
        category: 'app', // Changed to lowercase 'app' to match the filter
        demoUrl: '#', // Set to # since electron apps usually don't have web demos
        sourceUrl: 'https://github.com/minura986/pos-system',
        status: 'completed',
        stack: 'React, JavaScript, Git, Electron, Node.js, MongoDB',
    },
];

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'web',
    },
    {
        name: 'app',
    },
];