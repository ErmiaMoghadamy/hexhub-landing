"use client";

import { useState } from 'react'
import { SIGNUP_MODAL } from '../constants'

interface SignupModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interests: [] as string[]
  })

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handlePrev = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData)
    onClose()
    setStep(1)
    setFormData({ name: '', email: '', interests: [] })
  }

  const updateFormData = (key: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative max-w-md w-full mx-4 bg-slate-800 rounded-2xl p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors duration-200 ease-in-out"
        >
          ✕
        </button>

        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">{SIGNUP_MODAL.steps[0].title}</h2>
            <p className="text-slate-300 mb-6">{SIGNUP_MODAL.steps[0].description}</p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder={SIGNUP_MODAL.steps[0].fields.name}
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out"
              />
              <input
                type="email"
                placeholder={SIGNUP_MODAL.steps[0].fields.email}
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">{SIGNUP_MODAL.steps[1].title}</h2>
            <p className="text-slate-300 mb-6">{SIGNUP_MODAL.steps[1].description}</p>
            <div className="space-y-3">
              {SIGNUP_MODAL.steps[1].interests.map((interest) => (
                <label key={interest} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(interest)}
                    onChange={(e) => {
                      const updated = e.target.checked
                        ? [...formData.interests, interest]
                        : formData.interests.filter(i => i !== interest)
                      updateFormData('interests', updated)
                    }}
                    className="w-4 h-4 text-indigo-600 bg-slate-700 border-slate-600 rounded focus:ring-indigo-500 transition-all duration-200 ease-in-out"
                  />
                  <span className="text-slate-300">{interest}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">{SIGNUP_MODAL.steps[2].title}</h2>
            <p className="text-slate-300 mb-6">{SIGNUP_MODAL.steps[2].description}</p>
            <div className="space-y-2 text-sm">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Interests:</strong> {formData.interests.join(', ')}</p>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              onClick={handlePrev}
              className="px-6 py-2 text-slate-300 hover:text-white transition-colors duration-200 ease-in-out"
            >
              {SIGNUP_MODAL.buttons.back}
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={handleNext}
              className="ml-auto px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 ease-in-out hover:scale-105 active:scale-95"
            >
              {SIGNUP_MODAL.buttons.next}
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="ml-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 ease-in-out hover:scale-105 active:scale-95"
            >
              {SIGNUP_MODAL.buttons.join}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}