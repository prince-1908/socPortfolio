import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function ImageGallery() {
    return (
        <div className='bg-black flex flex-col justify-center items-center py-16'>
            <div className='py-16'>
                <h2 className='text-7xl text-red border-b-2 border-red'>Gallery</h2>
            </div>
            <ImageList
                sx={{ width: 1000, height: 900 }}
                variant="quilted"
                cols={4}
                rowHeight={242}
            >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            {...srcset(item.img, 242, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}

const itemData = [
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1661423994.jpg',
        title: '',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1661423879.jpg',
        title: '',
    },
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1661331987.jpeg',
        title: '',
    },
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1661331976.jpeg',
        title: '',
        cols: 2,
    },
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1655805682.jpg',
        title: '',
        cols: 2,
    },
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1655805605.jpg',
        title: '',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1635098254.jpeg',
        title: '',
    },
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1635098241.jpeg',
        title: '',
    },
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1635098225.jpeg',
        title: '',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1625293877.jpg',
        title: '',
    },
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1625293771.jpg',
        title: '',
    },
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1625293765.jpg',
        title: '',
        cols: 2,
    },
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1587279267.jpg',
        title: '',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1587279258.jpg',
        title: '',
    },
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1587147500.jpg',
        title: '',
    },
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1587145414.jpg',
        title: '',
        cols: 2,
    },
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1587145263.jpg',
        title: '',
        cols: 2,
    },
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1587145215.jpg',
        title: '',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1587145173.jpg',
        title: '',
    },
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1587145128.jpg',
        title: '',
    },
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1587145054.jpg',
        title: '',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1587144990.jpg',
        title: '',
    },
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1587144918.jpg',
        title: '',
    },
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1587144880.jpg',
        title: '',
        cols: 2,
    },
    {
        img: 'https://www.ipsacademy.org/assets/uploads/colleges/blog_1587144863.jpg',
        title: '',
        rows: 4,
        cols: 4,
    },
];