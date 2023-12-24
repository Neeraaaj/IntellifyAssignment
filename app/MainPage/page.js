'use client'

import React from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import { useState } from 'react'

const page = () => {
    
    const courses = [
            {
            id: 1,
            course_name: "Web Development 101",
            image_link: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video_links: [
                'https://www.youtube.com/watch?v=PkZNo7MFNFg',
                'https://www.youtube.com/watch?v=wesUO81bH0A',
                'https://www.youtube.com/watch?v=3tDYYhRYU7w',
                'https://www.youtube.com/watch?v=rnQ1B8xSoV4'
            ],
            course_type: "free",
            description: "An introductory course to web development..."
            },
            {
            id: 2,
            course_name: "Advanced Python Programming",
            image_link: "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video_links: [
            'https://www.youtube.com/watch?v=f79MRyMsjrQ',
            'https://www.youtube.com/watch?v=rfscVS0vtbw',
            'https://www.youtube.com/watch?v=N5vscPTWKOk',
            'https://www.youtube.com/watch?v=ZDa-Z5JzLYM'
            ],
            course_type: "premium",
            description: "Dive deep into Python with advanced programming techniques..."
            },
            {
            id: 3,
            course_name: "Machine Learning for Beginners",
            image_link: "https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video_links: [
            'https://www.youtube.com/watch?v=KNAWp2S3w94',
            'https://www.youtube.com/watch?v=JcI5Vnw0b2c',
            'https://www.youtube.com/watch?v=aircAruvnKk',
            'https://www.youtube.com/watch?v=qFJeN9V1ZsI'
            ],
            course_type: "free",
            description: "Understand the basics of machine learning..."
            },
            {
            id: 4,
            course_name: "Mastering Data Science",
            image_link: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video_links: [
            'https://www.youtube.com/watch?v=EF5-0T9DlCM',
            'https://www.youtube.com/watch?v=BgANZVRXwoY',
            'https://www.youtube.com/watch?v=ye3CwZJMKWg',
            'https://www.youtube.com/watch?v=QDaZJxHeiNg'
            ],
            course_type: "premium",
            description: "Become a data science expert with advanced concepts..."
            }
        ]

  const [course, setCourse] = useState(courses);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
  const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredCourses = term
      ? courses.filter((course) => course.course_name.toLowerCase().includes(term))
      : courses;

    setCourse(filteredCourses);
  };
  return (
    <div className="container my-12 mx-auto px-4 md:px-12 lg:mx-auto lg:px-8">
    <Header />
    <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={handleSearch}
            className="border border-gray-300 rounded-md p-2 mb-4 lg:mr-4 text-black w-full"
            />
  <div className="flex flex-wrap -mx-1 lg:-mx-4">
    {course.map((course) => (
      <div key={course.id} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <article className="overflow-hidden rounded-lg shadow-xl">
          <a href="#">
            <img alt="Placeholder" className="block h-auto w-full" src={course.image_link} />
          </a>

          <header className="flex items-center justify-between leading-tight p-2 md:p-4 no-underline">
            <h1 className="text-lg">
              <a className="no-underline hover:underline text-black" href="#">
                {course.course_name}
              </a>
            </h1>
          </header>
            <p className="text-black text-sm m-5">
              {course.description}
            </p>

          <footer className="flex items-center justify-between leading-none p-2 md:p-4 no-underline">
            <a className="flex items-center no-underline hover:underline text-black" href="#">
              <p className="ml-2 text-lg font-bold hover:decoration-0 no-underline">
                {course.course_type}
              </p>
              <button className='bg-[red] w-25 flex-end text-white p-4 rounded-xl shadow-xl mx-10 no-underline'>
                Go To Course
              </button>
            </a>
            <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
              <span className="hidden">{course.video_links[0]}</span>
              <i className="fa fa-heart"></i>
            </a>
          </footer>
        </article>
      </div>
    ))}
  </div>
</div>

  )
}

export default page