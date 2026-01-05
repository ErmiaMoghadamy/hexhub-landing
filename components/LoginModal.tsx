"use client";

import { useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const loginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const signupSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        backdropRef.current &&
        modalRef.current &&
        event.target === backdropRef.current
      ) {
        onClose();
      }
    };

    // Close modal on Escape key
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log('Login:', values);
      // Handle login logic here
      onClose();
    },
  });

  const signupFormik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      console.log('Signup:', values);
      // Handle signup logic here
      onClose();
    },
  });

  // Reset form errors when switching tabs
  const handleTabChange = (tab: 'login' | 'signup') => {
    setActiveTab(tab);
    // Reset formik touched and errors
    if (tab === 'login') {
      loginFormik.setTouched({});
      loginFormik.setErrors({});
    } else {
      signupFormik.setTouched({});
      signupFormik.setErrors({});
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={backdropRef}
      className="fixed left-0 top-0 bottom-0 right-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-200"
      onClick={(e) => {
        if (e.target === backdropRef.current) {
          onClose();
        }
      }}
    >
      <div 
        ref={modalRef} 
        className="relative max-w-md w-full mx-4 bg-slate-800 rounded-2xl p-6 shadow-2xl ring-1 ring-white/5 transform transition-all duration-200 scale-100"
      >
        <div  className='absolute top-4 right-4 flex justify-end w-full'>
          <button onClick={onClose} className='cursor-pointer'>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="mt-7 flex gap-2 mb-6 bg-slate-700/50 rounded-lg p-1">
          <button
            onClick={() => handleTabChange('login')}
            className={`flex-1 px-4 py-2 rounded-md text-sm font-semibold transition-all ${
              activeTab === 'login'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => handleTabChange('signup')}
            className={`flex-1 px-4 py-2 rounded-md text-sm font-semibold transition-all ${
              activeTab === 'signup'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Login Form */}
        {activeTab === 'login' && (
          <form onSubmit={loginFormik.handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="login-email" className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                id="login-email"
                name="email"
                type="email"
                value={loginFormik.values.email}
                onChange={loginFormik.handleChange}
                onBlur={loginFormik.handleBlur}
                className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
              {loginFormik.touched.email && loginFormik.errors.email && (
                <p className="mt-1 text-sm text-red-400">{loginFormik.errors.email}</p>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="login-password" className="block text-sm font-medium text-slate-300">
                  Password
                </label>
                <button
                  type="button"
                  className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                  onClick={() => {
                    // Handle forgot password
                    console.log('Forgot password clicked');
                  }}
                >
                  Forgot?
                </button>
              </div>
              <input
                id="login-password"
                name="password"
                type="password"
                value={loginFormik.values.password}
                onChange={loginFormik.handleChange}
                onBlur={loginFormik.handleBlur}
                className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
              {loginFormik.touched.password && loginFormik.errors.password && (
                <p className="mt-1 text-sm text-red-400">{loginFormik.errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loginFormik.isSubmitting}
            >
              {loginFormik.isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </form>
        )}

        {/* Signup Form */}
        {activeTab === 'signup' && (
          <form onSubmit={signupFormik.handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="signup-name" className="block text-sm font-medium text-slate-300 mb-2">
                Name
              </label>
              <input
                id="signup-name"
                name="name"
                type="text"
                value={signupFormik.values.name}
                onChange={signupFormik.handleChange}
                onBlur={signupFormik.handleBlur}
                className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
              {signupFormik.touched.name && signupFormik.errors.name && (
                <p className="mt-1 text-sm text-red-400">{signupFormik.errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="signup-email" className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                id="signup-email"
                name="email"
                type="email"
                value={signupFormik.values.email}
                onChange={signupFormik.handleChange}
                onBlur={signupFormik.handleBlur}
                className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
              {signupFormik.touched.email && signupFormik.errors.email && (
                <p className="mt-1 text-sm text-red-400">{signupFormik.errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="signup-password" className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <input
                id="signup-password"
                name="password"
                type="password"
                value={signupFormik.values.password}
                onChange={signupFormik.handleChange}
                onBlur={signupFormik.handleBlur}
                className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
              {signupFormik.touched.password && signupFormik.errors.password && (
                <p className="mt-1 text-sm text-red-400">{signupFormik.errors.password}</p>
              )}
            </div>

            <div>
              <label htmlFor="signup-confirm-password" className="block text-sm font-medium text-slate-300 mb-2">
                Confirm Password
              </label>
              <input
                id="signup-confirm-password"
                name="confirmPassword"
                type="password"
                value={signupFormik.values.confirmPassword}
                onChange={signupFormik.handleChange}
                onBlur={signupFormik.handleBlur}
                className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
              {signupFormik.touched.confirmPassword && signupFormik.errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-400">{signupFormik.errors.confirmPassword}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={signupFormik.isSubmitting}
            >
              {signupFormik.isSubmitting ? 'Signing up...' : 'Sign Up'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

