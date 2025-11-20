import Work1 from '../../assets/Work1.png';
import Work2 from '../../assets/Work2.png';
import Work3 from '../../assets/Work3.png';
import Work4 from '../../assets/Work4.png';
import Work5 from '../../assets/Work5.png';
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
        image: Work6, // Using Work5 as placeholder for RouteX
        title: 'RouteX - Tourism System',
        category: 'app', // Categorized as 'app' based on features like location services
        demoUrl: 'https://github.com/minura986/RouteX', // Update with your actual live link if available
        sourceUrl: '#', // Update with your GitHub repo link
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