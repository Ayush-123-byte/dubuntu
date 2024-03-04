
function App() {
  return (
    <div className="App">
     <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">Welcome to My Landing Page</h1>
        <p className="mt-2">This is a simple example using Tailwind CSS and React.</p>
      </div>
    </header>

    <section class="bg-blue-500 py-20 text-white">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-semibold mb-4">Welcome to Our Landing Page</h2>
            <p class="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a to="#" class="bg-white text-blue-500 py-2 px-6 rounded-full font-semibold hover:bg-blue-400 transition duration-300">Get Started</a>
        </div>
    </section>

    {/* <!-- Features Section --> */}
    <section class="py-20">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-semibold mb-8">Our Features</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="text-xl font-semibold mb-4">Feature 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="text-xl font-semibold mb-4">Feature 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="text-xl font-semibold mb-4">Feature 3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Call to Action Section --> */}
    <section class="bg-gray-800 py-20 text-white">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-semibold mb-4">Ready to get started?</h2>
            <p class="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a to="#" class="bg-white text-gray-800 py-2 px-6 rounded-full font-semibold hover:bg-gray-600 transition duration-300">Sign Up Now</a>
        </div>
    </section>

    {/* <!-- Footer --> */}
    <footer class="bg-gray-900 py-6 text-white">
        <div class="container mx-auto px-4 flex justify-between items-center">
            <p>&copy; 2024 Your Brand. All rights reserved.</p>
            <ul class="flex space-x-4">
                <li><a to="#" class="hover:text-gray-400">Privacy Policy</a></li>
                <li><a to="#" class="hover:text-gray-400">Terms of Service</a></li>
            </ul>
        </div>
    </footer>
    </div>
  );
}

export default App;
