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
    },
    {
        id: 2,
        image: Work6, // Using Work6 for RouteX
        title: 'RouteX - Tourism System',
        category: 'app', 
        demoUrl: 'https://github.com/minura986/RouteX', // Currently pointing to GitHub
        sourceUrl: '#', 
        status: 'completed',
    },
    {
        id: 3,
        image: Work2, // Using Work2 for Shrahi
        title: 'Shrahi Gifts N Stuffs',
        category: 'web',
        // Swapped these to match standard: Demo = Live Site, Source = GitHub
        demoUrl: 'https://shrahi-gifts-n-stuffs.vercel.app/', 
        sourceUrl: 'https://github.com/minura986/Shrahi-Gifts-N-Stuffs', 
        status: 'completed',
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