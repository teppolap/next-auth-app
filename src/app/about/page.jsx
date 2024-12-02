export default function About() {
  return (
    <div className='px-4 py-12 max-w-4xl mx-auto'>
      <h1 className='text-4xl font-extrabold mb-8 text-slate-800 text-center'>
        About
      </h1>
      <div className='bg-white p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
          <p className='text-gray-700 mb-4'>
            This is a Next.js application using Clerk for authentication and
            Mongoose for MongoDB.
          </p>
          <p className='text-gray-700 mb-4'>
            The front-end of the application is built with Next.js and uses
            Clerk for user authentication. The back-end is connected to MongoDB
            using Mongoose.
          </p>
          <p className='text-gray-700 mb-4'>
            This application is intended as a starting point for building
            full-stack web applications with authentication using Next.js,
            Clerk, and Mongoose.
          </p>
          <ul className='text-gray-700 mb-4 space-y-2'>
            <li>
              <a
                href='https://github.com/teppolap/next-auth-app'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center text-blue-500 hover:underline'
              >
                <svg
                  className='w-5 h-5 mr-2'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z' />
                </svg>
                GitHub Repository
              </a>
            </li>
            <li>
              <a
                href='https://go.clerk.com/O9JPZR5'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center text-blue-500 hover:underline'
              >
                <svg
                  className='w-5 h-5 mr-2'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z' />
                </svg>
                Clerk Documentation
              </a>
            </li>
          </ul>
        </div>
        <div className='flex justify-center items-top'>
          <img
            src='https://www.loginradius.com/blog/static/6d170d83a7074847494831a6df861d3c/d3746/cover-auth.jpg'
            alt='Description of image'
            className='rounded-lg w-full h-auto object-cover'
          />
        </div>
      </div>
    </div>
  );
}