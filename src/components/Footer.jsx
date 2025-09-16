import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold">Ravi Ranjan</h3>
                <p className="text-gray-400">frontend Developer</p>
              </div>
              
              <div className="flex space-x-6 mb-6 md:mb-0">
                <a href="https://www.linkedin.com/in/ravinke123/" className="hover:text-blue-400 transition-colors">LinkedIn</a>
                <a href="https://github.com/ravisharma50" className="hover:text-blue-400 transition-colors">GitHub</a>
                {/* <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a> */}
              </div>
              
              <div>
                <p>&copy; {new Date().getFullYear()} Ravi. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
  )
}

export default Footer
