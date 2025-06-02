import React from 'react';
import { Play, Users, BookOpen, Award, CheckCircle, Star, ArrowRight } from 'lucide-react';

export default function Main() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              
            </div>
            <nav className="hidden md:flex items-center space-x-8">
             
             
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Skillmiz</span>?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Skillmiz is a platform that helps you learn new skills through interactive courses, expert-led tutorials, and hands-on projects. Whether you're looking to advance your career or explore new interests, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                    alt="For Instructors" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-4">FOR INSTRUCTORS</h3>
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="For Students" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 bg-opacity-80 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-4">FOR STUDENTS</h3>
                      <button className="bg-white bg-opacity-20 text-white px-6 py-2 rounded-lg hover:bg-opacity-30 transition-all">
                        Start Learning
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Everything you can do in a physical classroom, you can do with Skillmiz
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transform Your Learning Experience
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform combines the best of traditional classroom learning with cutting-edge technology. Engage in interactive lessons, collaborate with peers, and track your progress in real-time.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Interactive live classes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Real-time collaboration tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Progress tracking and analytics</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Modern Workspace" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Features</h2>
            <p className="text-xl text-gray-600">
              Discover what makes Skillmiz the perfect choice for modern education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interactive Learning</h3>
              <p className="text-gray-600">
                Engage with content through interactive exercises, quizzes, and hands-on projects that make learning fun and effective.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certified Courses</h3>
              <p className="text-gray-600">
                Earn industry-recognized certificates upon completion of courses to boost your career prospects.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from industry experts and experienced professionals who bring real-world knowledge to the classroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools for Teachers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1388&q=80" 
                alt="Teacher with Students" 
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">4.9/5</p>
                    <p className="text-xs text-gray-500">Teacher Rating</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-orange-500">Tools</span> For Teachers <br />
                And Learners
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Empower educators with comprehensive tools to create engaging content, track student progress, and build interactive learning experiences. From course creation to student assessment, we've got everything covered.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Course Builder</h4>
                    <p className="text-gray-600">Create and customize courses with our intuitive drag-and-drop interface</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Analytics Dashboard</h4>
                    <p className="text-gray-600">Track student engagement and performance with detailed analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Assessments, <br />
                <span className="text-yellow-500">Quizzes, Tests</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Create comprehensive assessments to evaluate student understanding and progress. Our platform supports various question types, automated grading, and detailed performance analytics.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">Recent Quiz Results</h4>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">92% Average</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Mathematics Quiz</span>
                    <span className="font-medium">95%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Science Test</span>
                    <span className="font-medium">89%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">History Assignment</span>
                    <span className="font-medium">92%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1606103619093-96d2b3bfd3c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Venice Canal" 
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                <p className="text-sm font-medium text-gray-900">Live in Rome? Study easy!</p>
                <p className="text-xs text-gray-500">Online global access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Management Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Class Management</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-white bg-opacity-20 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                        alt="Student" 
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium">John Smith</p>
                        <p className="text-sm opacity-80">Mathematics</p>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between bg-white bg-opacity-20 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                        alt="Student" 
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-sm opacity-80">Physics</p>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between bg-white bg-opacity-20 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                        alt="Student" 
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium">Mike Wilson</p>
                        <p className="text-sm opacity-80">Chemistry</p>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-orange-500">Class Management</span> <br />
                Tools for Educators
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Streamline your classroom management with powerful tools designed for modern educators. Track attendance, manage assignments, communicate with students, and monitor progress all in one place.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Student Management</h4>
                    <p className="text-gray-600">Organize students, track attendance, and manage enrollment efficiently</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Assignment Tracking</h4>
                    <p className="text-gray-600">Create, distribute, and grade assignments with automated workflows</p>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      


    </div>
  );
}