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
        <div className='bg-black flex justify-center py-16'>
            <ImageList
                sx={{width: 1000, height: 900}}
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
        img: 'https://ipsacademy.org/assets/uploads/colleges/blog_1661423994.jpg',
        title: '',
        rows: 2,
        cols: 2,
    },
    {
        img: '../../public/blog_1635098225.jpeg',
        title: 'Burger',
    },
    {
        img: '../../public/blog_1635098241.jpeg',
        title: 'Camera',
    },
    {
        img: '../../public/blog_1635098254.jpeg',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: '../../public/blog_1655805605.jpg',
        title: 'Hats',
        cols: 2,
    },
    {
        img: '../../public/blog_1655805682.jpg',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: '../../public/blog_1661331976.jpeg',
        title: 'Basketball',
    },
    {
        img: '../../public/blog_1661331987.jpeg',
        title: 'Fern',
    },
    {
        img: '../../public/blog_1661423879.jpg',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: '../../public/blog_1661423994.jpg',
        title: 'Tomato basil',
    },
];